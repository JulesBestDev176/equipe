import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';


const Support = () => {
  useScrollToTop();
  const [selectedTicketType, setSelectedTicketType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'normal',
    message: ''
  });

  const supportOptions = [
    {
      id: 'technical',
      title: 'Support Technique',
      description: 'Problèmes techniques, bugs, erreurs de fonctionnement',
      icon: '🔧',
      responseTime: '< 4h',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Mises à jour, sauvegardes, optimisations',
      icon: '⚙️',
      responseTime: '< 24h',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'feature',
      title: 'Nouvelle Fonctionnalité',
      description: 'Demandes d\'évolution, nouvelles features',
      icon: '✨',
      responseTime: '< 48h',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'emergency',
      title: 'Urgence',
      description: 'Site down, problème de sécurité critique',
      icon: '🚨',
      responseTime: '< 1h',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const contactMethods = [
    {
      method: 'Email',
      value: 'support@devflow.sn',
      icon: '📧',
      available: '24/7',
      description: 'Pour toutes vos demandes non urgentes'
    },
    {
      method: 'Téléphone',
      value: '+221 77 123 45 67',
      icon: '📞',
      available: '9h-18h (GMT)',
      description: 'Support direct pour clients premium'
    },
    {
      method: 'WhatsApp',
      value: '+221 77 123 45 67',
      icon: '💬',
      available: '9h-22h (GMT)',
      description: 'Réponse rapide et support visuel'
    },
    {
      method: 'Slack',
      value: 'Canal dédié',
      icon: '💼',
      available: 'Heures ouvrées',
      description: 'Pour les projets en cours'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket submitted:', { ...formData, type: selectedTicketType });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />
      {/* Hero Section - Style identique à CGV mais adapté pour Support */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center relative overflow-hidden pt-24">
        {/* Background avec effets géométriques */}
        <div className="absolute inset-0">
          {/* Formes animées avec couleurs harmonieuses */}
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Particules flottantes avec couleurs coordonnées */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-blue-400/60' : 
                i % 3 === 1 ? 'bg-indigo-400/60' : 'bg-purple-400/60'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-0">
          {/* Icône principale avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎧
            </motion.div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6"
          >
            Support Client DevFlow
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Notre équipe dédiée vous accompagne pour un 
            <span className="text-blue-400 font-semibold"> support technique expert</span>, 
            <span className="text-indigo-400 font-semibold"> maintenance proactive</span> et 
            <span className="text-purple-400 font-semibold"> assistance personnalisée</span>.
          </motion.p>

          {/* Stats avec couleurs coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24"
          >
            {[
              { icon: "⚡", label: "Réponse < 2h", color: "text-blue-400" },
              { icon: "🌍", label: "Support 24/7", color: "text-indigo-400" },
              { icon: "🎯", label: "Équipe experte", color: "text-purple-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-sm md:text-base ${stat.color} group-hover:text-white transition-colors`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Status */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 max-w-4xl mx-auto border border-green-200/50"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-semibold">
                Tous nos services sont opérationnels
              </span>
              <span className="text-green-600 text-sm">
                Dernière vérification : il y a 2 minutes
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Quel type de support vous faut-il ?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedTicketType(option.id)}
                className={`cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                  selectedTicketType === option.id 
                    ? `border-transparent bg-gradient-to-br ${option.color} text-white` 
                    : 'border-gray-200/50 hover:border-gray-300'
                }`}
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${
                  selectedTicketType === option.id ? 'text-white' : 'text-gray-800'
                }`}>
                  {option.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  selectedTicketType === option.id ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {option.description}
                </p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                  selectedTicketType === option.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  ⏱️ Réponse {option.responseTime}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedTicketType && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 relative overflow-hidden"
        >
          {/* Background effet glassmorphism */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Header moderne avec badge de type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-200/50 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl shadow-lg">
                    {supportOptions.find(opt => opt.id === selectedTicketType)?.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-800 text-lg">
                      {supportOptions.find(opt => opt.id === selectedTicketType)?.title}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Réponse {supportOptions.find(opt => opt.id === selectedTicketType)?.responseTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Créer votre ticket
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Notre équipe d'experts vous répondra rapidement avec une solution personnalisée
                </p>
              </motion.div>

              {/* Formulaire avec design glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
              >
                <div className="space-y-10">
                  
                  {/* Section 1: Informations personnelles */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-200/50">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm">1</div>
                      <h4 className="text-xl font-bold text-gray-800">Vos informations</h4>
                      <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-purple-200"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="group"
                      >
                        <label className="flex items-center gap-3 text-sm font-semibold text-gray-700 mb-3">
                          <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs">👤</div>
                          Nom complet *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200/60 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/90 placeholder-gray-400 group-hover:border-gray-300"
                            placeholder="Votre nom complet"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 rounded-full bg-gray-300 group-focus-within:bg-blue-500 transition-colors"></div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="group"
                      >
                        <label className="flex items-center gap-3 text-sm font-semibold text-gray-700 mb-3">
                          <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">📧</div>
                          Adresse email *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200/60 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/90 placeholder-gray-400 group-hover:border-gray-300"
                            placeholder="votre@email.com"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 rounded-full bg-gray-300 group-focus-within:bg-indigo-500 transition-colors"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Section 2: Détails du problème */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-200/50">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-sm">2</div>
                      <h4 className="text-xl font-bold text-gray-800">Détails de votre demande</h4>
                      <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-pink-200"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="md:col-span-2 group"
                      >
                        <label className="flex items-center gap-3 text-sm font-semibold text-gray-700 mb-3">
                          <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-xs">📝</div>
                          Sujet *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200/60 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/90 placeholder-gray-400 group-hover:border-gray-300"
                            placeholder="Résumé de votre problème"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <div className="w-2 h-2 rounded-full bg-gray-300 group-focus-within:bg-purple-500 transition-colors"></div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="group"
                      >
                        <label className="flex items-center gap-3 text-sm font-semibold text-gray-700 mb-3">
                          <div className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-xs">⚡</div>
                          Priorité
                        </label>
                        <div className="relative">
                          <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleInputChange}
                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200/60 focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/90 appearance-none cursor-pointer group-hover:border-gray-300"
                          >
                            <option value="low">🟢 Basse</option>
                            <option value="normal">🟡 Normale</option>
                            <option value="high">🟠 Haute</option>
                            <option value="urgent">🔴 Urgente</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <span className="text-gray-400 text-sm">▼</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="group"
                    >
                      <label className="flex items-center gap-3 text-sm font-semibold text-gray-700 mb-3">
                        <div className="w-6 h-6 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-xs">💬</div>
                        Description détaillée *
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200/60 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/90 placeholder-gray-400 resize-none group-hover:border-gray-300"
                          placeholder="Décrivez votre problème en détail : contexte, étapes pour reproduire, message d'erreur, etc."
                        />
                        <div className="absolute bottom-4 right-4">
                          <div className="w-2 h-2 rounded-full bg-gray-300 group-focus-within:bg-green-500 transition-colors"></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-2 flex items-center justify-end gap-1">
                        <span>💡</span>
                        Plus vous êtes précis, plus nous pourrons vous aider rapidement
                      </div>
                    </motion.div>
                  </div>

                  {/* Section Envoi */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="pt-8 border-t border-gray-200/50"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-medium">Réponse garantie sous {supportOptions.find(opt => opt.id === selectedTicketType)?.responseTime}</span>
                      </div>
                      
                      <motion.button
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-2xl shadow-2xl transition-all duration-500 flex items-center gap-3 overflow-hidden"
                      >
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        
                        <span>Envoyer le ticket</span>
                        <motion.span 
                          className="text-lg"
                          animate={{ rotate: [0, 15, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🚀
                        </motion.span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Note de confidentialité */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center mt-8"
              >
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 text-sm text-gray-600 border border-gray-200/50">
                  <span className="text-green-500">🔒</span>
                  Vos informations sont sécurisées et ne seront jamais partagées
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Autres moyens de nous contacter
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.method}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{method.method}</h3>
                <p className="text-blue-600 font-semibold mb-2">{method.value}</p>
                <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {method.available}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Support;