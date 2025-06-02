// src/components/FallbackContact.jsx
import { motion } from 'framer-motion';

const FallbackContact = ({ formData, onClose, show = false }) => {
  if (!show) return null;

  const fallbackOptions = [
    {
      icon: '📧',
      label: 'Envoyer par Email',
      description: 'Votre client email s\'ouvrira avec le message pré-rempli',
      url: `mailto:souleymanefall176@gmail.com?subject=${encodeURIComponent(`Contact depuis le site - ${formData.name}`)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `${formData.company ? `Entreprise: ${formData.company}\n` : ''}` +
        `${formData.phone ? `Téléphone: ${formData.phone}\n` : ''}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nMessage envoyé depuis le formulaire de contact`
      )}`,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      description: 'Contactez-nous directement via WhatsApp',
      url: `https://wa.me/221777151061?text=${encodeURIComponent(
        `Bonjour ! Je vous contacte depuis votre site web.\n\n` +
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `${formData.company ? `Entreprise: ${formData.company}\n` : ''}` +
        `${formData.phone ? `Téléphone: ${formData.phone}\n` : ''}\n` +
        `Message: ${formData.message}`
      )}`,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: '📞',
      label: 'Appeler',
      description: 'Contactez-nous directement par téléphone',
      url: 'tel:+221777151061',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div 
            className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-2xl">⚠️</span>
          </motion.div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Problème de connexion
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            Nous n'arrivons pas à envoyer votre message pour le moment. 
            Voici d'autres moyens de nous contacter rapidement :
          </p>
        </div>

        {/* Options de contact */}
        <div className="space-y-3 mb-6">
          {fallbackOptions.map((option, index) => (
            <motion.a
              key={option.label}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-4 bg-gradient-to-r ${option.color} ${option.hoverColor} text-white rounded-xl shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div className="flex-1">
                  <div className="font-semibold">{option.label}</div>
                  <div className="text-sm opacity-90">{option.description}</div>
                </div>
                <motion.span 
                  className="text-xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Informations supplémentaires */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-blue-500">ℹ️</span>
            Nos engagements
          </h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Réponse garantie sous 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Support 24/7 disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Consultation gratuite</span>
            </div>
          </div>
        </motion.div>

        {/* Boutons d'action */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Fermer
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Réessayer
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Problème persistant ? Contactez-nous directement au{' '}
            <a 
              href="tel:+221777151061" 
              className="text-blue-600 hover:underline font-medium"
            >
              +221 77 715 10 61
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FallbackContact;