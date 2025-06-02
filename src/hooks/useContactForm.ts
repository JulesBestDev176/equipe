// src/hooks/useContactForm.ts
import { useState, useCallback, ChangeEvent } from 'react';
import apiService from '../services/api';

// Types
interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormState {
  isSubmitting: boolean;
  submitStatus: 'success' | 'error' | null;
  errors: FormErrors;
  showFallback: boolean;
  lastSubmissionTime: number | null;
}

interface UseContactFormReturn {
  formData: FormData;
  formState: FormState;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  updateField: (field: keyof FormData, value: string) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
  validateForm: () => boolean;
  getFallbackOptions: () => unknown;
  closeFallback: () => void;
  testApiConnectivity: () => Promise<{ healthy: boolean; [key: string]: unknown }>;
  isValid: boolean;
  hasData: boolean;
  isFormDirty: boolean;
}

export const useContactForm = (): UseContactFormReturn => {
  // État du formulaire
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: '',
    budget: '',
    timeline: ''
  });

  // État de soumission et erreurs
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    submitStatus: null, // null, 'success', 'error'
    errors: {},
    showFallback: false,
    lastSubmissionTime: null
  });

  // Réinitialiser le formulaire
  const resetForm = useCallback((): void => {
    console.log('🔄 Réinitialisation du formulaire');
    
    setFormData({
      name: '',
      email: '',
      message: '',
      phone: '',
      company: '',
      budget: '',
      timeline: ''
    });
    
    setFormState({
      isSubmitting: false,
      submitStatus: null,
      errors: {},
      showFallback: false,
      lastSubmissionTime: null
    });
  }, []);

  // Mettre à jour un champ spécifique
  const updateField = useCallback((field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Effacer l'erreur du champ modifié
    if (formState.errors[field]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [field]: '' }
      }));
    }
  }, [formState.errors]);

  // Gérer le changement d'input
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    updateField(name as keyof FormData, value);
  }, [updateField]);

  // Validation côté client
  const validateForm = useCallback((): boolean => {
    const errors: FormErrors = {};
    
    // Validation nom
    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Le nom doit contenir au moins 2 caractères';
    } else if (formData.name.trim().length > 50) {
      errors.name = 'Le nom ne peut pas dépasser 50 caractères';
    }

    // Validation email
    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Email invalide';
      }
    }

    // Validation message
    if (!formData.message.trim()) {
      errors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      errors.message = 'Message trop court (min. 10 caractères)';
    } else if (formData.message.length > 2000) {
      errors.message = 'Message trop long (max. 2000 caractères)';
    }

    // Validation téléphone (optionnel)
    if (formData.phone && formData.phone.trim()) {
      const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
      if (!phoneRegex.test(formData.phone)) {
        errors.phone = 'Numéro de téléphone invalide';
      }
    }

    // Validation entreprise (optionnel)
    if (formData.company && formData.company.length > 100) {
      errors.company = 'Nom d\'entreprise trop long (max. 100 caractères)';
    }

    setFormState(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  }, [formData]);

  // Vérifier si on peut soumettre (rate limiting côté client)
  const canSubmit = useCallback((): boolean => {
    const now = Date.now();
    const lastSubmission = formState.lastSubmissionTime;
    
    // Empêcher les soumissions trop rapprochées (2 minutes)
    if (lastSubmission && (now - lastSubmission) < 120000) {
      const waitTime = Math.ceil((120000 - (now - lastSubmission)) / 1000);
      console.warn(`⏰ Veuillez attendre ${waitTime} secondes avant de renvoyer`);
      return false;
    }
    
    return true;
  }, [formState.lastSubmissionTime]);

  // Soumettre le formulaire
  const submitForm = useCallback(async (): Promise<void> => {
    console.log('📝 Tentative de soumission du formulaire');

    // Vérifier si on peut soumettre
    if (!canSubmit()) {
      setFormState(prev => ({
        ...prev,
        submitStatus: 'error',
        errors: { general: 'Veuillez attendre avant de renvoyer le formulaire' }
      }));
      return;
    }

    // Valider le formulaire
    if (!validateForm()) {
      console.log('❌ Validation échouée');
      return;
    }

    setFormState(prev => ({ 
      ...prev, 
      isSubmitting: true, 
      errors: {},
      submitStatus: null,
      showFallback: false
    }));

    try {
      console.log('🚀 Envoi du formulaire...');
      
      const result = await apiService.sendContactForm(formData);

      if (result.success) {
        console.log('✅ Formulaire envoyé avec succès');
        
        setFormState(prev => ({ 
          ...prev, 
          isSubmitting: false,
          submitStatus: 'success',
          showFallback: false,
          lastSubmissionTime: Date.now()
        }));

        // Analytics optionnel
        if (window.gtag && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Success'
          });
        }

        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
          resetForm();
        }, 3000);

      } else {
        console.log('❌ Erreur lors de l\'envoi:', result);
        
        // Gérer les erreurs de validation du serveur
        if (result.errors && Array.isArray(result.errors)) {
          type ServerError = { field: string; message: string };
          const errorMap: FormErrors = {};
          result.errors.forEach((error: ServerError) => {
            errorMap[error.field] = error.message;
          });
          
          setFormState(prev => ({ 
            ...prev, 
            isSubmitting: false,
            errors: errorMap,
            submitStatus: 'error'
          }));
        } else {
          // Autres erreurs (réseau, serveur, etc.)
          setFormState(prev => ({ 
            ...prev, 
            isSubmitting: false,
            submitStatus: 'error',
            showFallback: result.showFallback || false,
            errors: { general: result.message }
          }));
        }

        // Analytics pour les erreurs
        if (window.gtag && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
          window.gtag('event', 'form_error', {
            event_category: 'Contact',
            event_label: result.error || 'Unknown Error'
          });
        }
      }

    } catch (error: unknown) {
      console.error('❌ Erreur inattendue:', error);
      
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        submitStatus: 'error',
        showFallback: true,
        errors: { general: 'Une erreur inattendue s\'est produite' }
      }));

      // Log de l'erreur
      apiService.logError('form_submission', error, formData);
    }

    // Auto-clear du status après 5 secondes
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitStatus: null,
        showFallback: false
      }));
    }, 5000);

  }, [formData, validateForm, resetForm, canSubmit]);

  // Obtenir les options de fallback
  const getFallbackOptions = useCallback(() => {
    return apiService.getFallbackOptions(formData);
  }, [formData]);

  // Fermer le fallback
  const closeFallback = useCallback((): void => {
    setFormState(prev => ({ 
      ...prev, 
      showFallback: false 
    }));
  }, []);

  // Tester la connectivité avec l'API
  const testApiConnectivity = useCallback(async () => {
    console.log('🔍 Test de connectivité API...');
    
    const result = await apiService.checkApiStatus();
    
    if (!result.healthy) {
      setFormState(prev => ({
        ...prev,
        errors: { general: 'Problème de connexion avec le serveur' }
      }));
    }
    
    return result;
  }, []);

  // Utilitaires
  const isValid = Object.keys(formState.errors).length === 0;
  const hasData = Object.values(formData).some(value => value.trim() !== '');
  const isFormDirty = hasData;

  return {
    // État
    formData,
    formState,
    
    // Actions
    handleChange,
    updateField,
    submitForm,
    resetForm,
    validateForm,
    getFallbackOptions,
    closeFallback,
    testApiConnectivity,
    
    // Utilitaires
    isValid,
    hasData,
    isFormDirty
  };
};