// src/services/api.ts

interface FormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  budget?: string;
  timeline?: string;
}

interface ApiResponse {
  success: boolean;
  error?: string;
  message?: string;
  errors?: Array<{ field: string; message: string }>;
  data?: unknown;
  showFallback?: boolean;
  status?: number;
}

interface ValidationResult {
  isValid: boolean;
  errors: Array<{ field: string; message: string }>;
}

interface FallbackOptions {
  mailto: {
    url: string;
    label: string;
    description: string;
  };
  whatsapp: {
    url: string;
    label: string;
    description: string;
  };
  phone: {
    url: string;
    label: string;
    description: string;
  };
}

class ApiService {
  private baseURL: string;
  private timeout: number;

  constructor() {
    // Gestion des variables d'environnement pour React
    this.baseURL = this.getApiUrl();
    this.timeout = 30000; // 30 secondes
    
    // console.log('🔧 API Service initialisé:', {
    //   baseURL: this.baseURL,
    //   environment: this.getEnvironment()
    // });
  }

  // Récupérer l'URL de l'API selon l'environnement
  private getApiUrl(): string {
    // Vérifier les différentes façons d'accéder aux variables d'env dans React
    if (typeof window !== 'undefined') {
      // Variables d'environnement React (Create React App)
      const reactAppUrl = (window as Window & { process?: { env?: { REACT_APP_API_URL?: string } } }).process?.env?.REACT_APP_API_URL;
      if (reactAppUrl) return reactAppUrl;
      
      // Variables globales injectées
      const globalEnv = (window as Window & { ENV?: { REACT_APP_API_URL?: string } }).ENV?.REACT_APP_API_URL;
      if (globalEnv) return globalEnv as string;
    }
    
    // Fallback par défaut
    return 'https://devflow-back.onrender.com';
  }

  // Récupérer l'environnement
  private getEnvironment(): string {
    if (typeof window !== 'undefined') {
      const reactEnv = (window as unknown as { process?: { env?: Record<string, unknown> } }).process?.env?.NODE_ENV as string | undefined;
      if (reactEnv) return reactEnv;
      
      const globalEnv = (window as unknown as { ENV?: Record<string, unknown> }).ENV?.NODE_ENV;
      if (globalEnv) return globalEnv as string;
    }
    
    return 'production';
  }

  // Configuration par défaut des requêtes
  private getConfig(): RequestInit {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };
  }

  // Gestion des erreurs réseau
  private handleNetworkError(error: Error): ApiResponse {
    // console.error('🔥 Erreur réseau détectée:', error);
    
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'NETWORK_ERROR',
        message: 'Impossible de se connecter au serveur. Vérifiez votre connexion internet.',
        showFallback: true
      };
    }
    
    if (error.name === 'AbortError' || error.message.includes('timeout')) {
      return {
        success: false,
        error: 'TIMEOUT_ERROR',
        message: 'La requête a pris trop de temps. Veuillez réessayer.',
        showFallback: true
      };
    }

    return {
      success: false,
      error: 'UNKNOWN_ERROR',
      message: 'Une erreur inattendue s\'est produite.',
      showFallback: true
    };
  }

  // Test de connectivité avec le backend
  async healthCheck(): Promise<ApiResponse> {
    try {
      // console.log('🏥 Test de connectivité backend...');
      // console.log('🔗 URL testée:', `${this.baseURL}/health`);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(`${this.baseURL}/health`, {
        method: 'GET',
        signal: controller.signal,
        ...this.getConfig()
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      // console.log('✅ Backend accessible:', data);
      return { success: true, data };

    } catch (error) {
      // console.error('❌ Backend inaccessible:', error);
      return this.handleNetworkError(error as Error);
    }
  }

  // Validation côté client avant envoi
  validateFormData(formData: FormData): ValidationResult {
    const errors: Array<{ field: string; message: string }> = [];

    // Validation nom
    if (!formData.name || formData.name.trim().length < 2) {
      errors.push({ field: 'name', message: 'Le nom est requis (min. 2 caractères)' });
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.push({ field: 'email', message: 'Email invalide' });
    }

    // Validation message
    if (!formData.message || formData.message.trim().length < 10) {
      errors.push({ field: 'message', message: 'Message requis (min. 10 caractères)' });
    }

    // Validation téléphone (optionnel)
    if (formData.phone && formData.phone.trim()) {
      const phoneRegex = /^[+]?[\d\s\-()]{8,20}$/;
      if (!phoneRegex.test(formData.phone)) {
        errors.push({ field: 'phone', message: 'Numéro de téléphone invalide' });
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Envoyer le formulaire de contact
  async sendContactForm(formData: FormData): Promise<ApiResponse> {
    try {
      // console.log('📤 Envoi du formulaire de contact...', formData);

      // Validation côté client avant envoi
      const validation = this.validateFormData(formData);
      if (!validation.isValid) {
        // console.warn('⚠️ Validation échouée côté client:', validation.errors);
        return {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'Données invalides',
          errors: validation.errors
        };
      }

      // Préparation des données avec métadonnées
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        url: window.location.href,
        // Nettoyage des champs
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
        phone: formData.phone?.trim() || '',
        company: formData.company?.trim() || '',
        budget: formData.budget || '',
        timeline: formData.timeline || ''
      };

      // Configuration de la requête avec timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        // console.warn('⏰ Timeout de la requête après 30s');
      }, this.timeout);

      const endpoint = `${this.baseURL}/api/contact/send`;
      // console.log('🚀 Envoi vers:', endpoint);

      const response = await fetch(endpoint, {
        method: 'POST',
        signal: controller.signal,
        body: JSON.stringify(payload),
        ...this.getConfig()
      });

      clearTimeout(timeoutId);

      // Parse de la réponse
      let data: ApiResponse;
      try {
        data = await response.json();
      } catch (parseError) {
        // console.error('❌ Erreur parsing JSON:', parseError);
        throw new Error('Réponse serveur invalide');
      }

      // console.log('📥 Réponse API:', data);

      if (!response.ok) {
        // console.error(`❌ Erreur HTTP ${response.status}:`, data);
        return {
          success: false,
          error: 'SERVER_ERROR',
          message: data.message || `Erreur serveur (${response.status})`,
          errors: data.errors || [],
          status: response.status
        };
      }

      if (!data.success) {
        // console.error('❌ Réponse négative du serveur:', data);
        return {
          success: false,
          error: 'API_ERROR',
          message: data.message || 'Erreur lors du traitement',
          errors: data.errors || []
        };
      }

      // console.log('✅ Formulaire envoyé avec succès:', data);
      return data;

    } catch (error) {
      // console.error('❌ Erreur lors de l\'envoi du formulaire:', error);
      return this.handleNetworkError(error as Error);
    }
  }

  // Options de fallback en cas d'erreur
  getFallbackOptions(formData: FormData): FallbackOptions {
    const { name, email, message, phone, company } = formData;
    
    // Construction du message pour WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Bonjour ! Je vous contacte depuis votre site web.\n\n` +
      `Nom: ${name}\n` +
      `Email: ${email}\n` +
      `${company ? `Entreprise: ${company}\n` : ''}` +
      `${phone ? `Téléphone: ${phone}\n` : ''}\n` +
      `Message: ${message}`
    );

    // Construction du corps de l'email
    const emailBody = encodeURIComponent(
      `Bonjour,\n\n` +
      `Je vous contacte depuis votre site web.\n\n` +
      `Nom: ${name}\n` +
      `Email: ${email}\n` +
      (company ? `Entreprise: ${company}\n` : '') +
      (phone ? `Téléphone: ${phone}\n` : '') +
      `\nMessage:\n${message}`
    );

    return {
      mailto: {
        url: `mailto:souleymanefall176@gmail.com?subject=${encodeURIComponent(`Contact depuis le site - ${name}`)}&body=${emailBody}`,
        label: 'Envoyer par Email',
        description: 'Votre client email s\'ouvrira avec le message pré-rempli'
      },
      whatsapp: {
        url: `https://wa.me/221777151061?text=${whatsappMessage}`,
        label: 'Contacter via WhatsApp',
        description: 'Contactez-nous directement via WhatsApp'
      },
      phone: {
        url: 'tel:+221777151061',
        label: 'Appeler directement',
        description: 'Contactez-nous par téléphone'
      }
    };
  }

  // Test de l'endpoint de contact
  async testContactEndpoint(): Promise<ApiResponse> {
    try {
      // console.log('🧪 Test de l\'endpoint de contact...');
      
      const response = await fetch(`${this.baseURL}/api/contact/test`, {
        method: 'GET',
        ...this.getConfig()
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      // console.log('✅ Endpoint de contact accessible:', data);
      return { success: true, data };

    } catch (error) {
      // console.error('❌ Endpoint de contact inaccessible:', error);
      return this.handleNetworkError(error as Error);
    }
  }

  // Vérification complète de l'API
  async checkApiStatus(): Promise<{ healthy: boolean; results: { health: ApiResponse; contact: ApiResponse } }> {
    // console.log('🔍 Vérification complète de l\'API...');
    
    const results = {
      health: await this.healthCheck(),
      contact: await this.testContactEndpoint()
    };

    const isHealthy = results.health.success && results.contact.success;
    
    // console.log('📊 Statut API:', {
    //   healthy: isHealthy,
    //   details: results
    // });

    return {
      healthy: isHealthy,
      results
    };
  }

  // Utilitaire pour logger les erreurs
  logError(context: string, error: Error, formData: FormData | null = null): object {
    const errorLog = {
      context,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      formData: formData ? {
        name: formData.name,
        email: formData.email,
        hasMessage: !!formData.message,
        hasPhone: !!formData.phone,
        hasCompany: !!formData.company
      } : null
    };

    // console.error('📝 Log d\'erreur:', errorLog);
    
    // En production, on pourrait envoyer ce log à un service de monitoring
    if (this.getEnvironment() === 'production') {
      // Exemple: Sentry, LogRocket, etc.
      // this.sendErrorLog(errorLog);
    }

    return errorLog;
  }

  // Méthodes utilitaires publiques
  setBaseURL(url: string): void {
    this.baseURL = url;
    // console.log('🔧 URL de base mise à jour:', this.baseURL);
  }

  getBaseURL(): string {
    return this.baseURL;
  }

  setTimeout(timeout: number): void {
    this.timeout = timeout;
    // console.log('⏰ Timeout mis à jour:', this.timeout);
  }

  getTimeout(): number {
    return this.timeout;
  }
}

// Instance singleton
const apiService = new ApiService();

// Export par défaut
export default apiService;

// Export nommé pour la compatibilité
export { apiService };