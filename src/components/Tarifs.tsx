import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Tarifs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Parfait pour les petites entreprises',
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      originalMonthlyPrice: 2000,
      originalYearlyPrice: 20000,
      currency: '€',
      popular: false,
      description: 'Idéal pour démarrer votre transformation digitale',
      features: [
        'Site web responsive (5 pages)',
        'Design moderne et professionnel',
        'Optimisation SEO de base',
        'Formulaire de contact',
        'Hébergement 1 an inclus',
        'Support email',
        'Analytics de base',
        'Certificat SSL'
      ],
      notIncluded: [
        'E-commerce avancé',
        'Automatisation',
        'Support prioritaire'
      ],
      gradient: 'from-blue-600 to-cyan-600',
      icon: '🚀',
      deliveryTime: '2-3 semaines',
      revisions: '3 révisions incluses'
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'Le plus populaire pour les entreprises',
      monthlyPrice: 3500,
      yearlyPrice: 35000,
      originalMonthlyPrice: 4500,
      originalYearlyPrice: 45000,
      currency: '€',
      popular: true,
      description: 'Solution complète pour booster votre business',
      features: [
        'Site web responsive (10 pages)',
        'Design sur mesure premium',
        'E-commerce complet',
        'Optimisation SEO avancée',
        'Intégration CRM',
        'Automatisation workflows',
        'Support prioritaire 24/7',
        'Analytics avancés',
        'Hébergement premium 1 an',
        'Certificat SSL premium',
        'Sauvegarde automatique',
        'Formation équipe'
      ],
      notIncluded: [
        'Intelligence artificielle',
        'Développement mobile'
      ],
      gradient: 'from-purple-600 to-pink-600',
      icon: '⭐',
      deliveryTime: '4-6 semaines',
      revisions: '5 révisions incluses'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'Pour les grandes entreprises',
      monthlyPrice: 7500,
      yearlyPrice: 75000,
      originalMonthlyPrice: 10000,
      originalYearlyPrice: 100000,
      currency: '€',
      popular: false,
      description: 'Solution sur mesure avec IA et automatisation',
      features: [
        'Développement sur mesure illimité',
        'Architecture scalable',
        'Intelligence artificielle intégrée',
        'Application mobile native',
        'Automatisation avancée (n8n)',
        'Infrastructure cloud premium',
        'Support dédié 24/7',
        'Consultant personnel',
        'Analytics et BI avancés',
        'Sécurité renforcée',
        'API personnalisées',
        'Formation complète équipe',
        'Maintenance premium',
        'Monitoring en temps réel'
      ],
      notIncluded: [],
      gradient: 'from-emerald-600 to-teal-600',
      icon: '👑',
      deliveryTime: '8-12 semaines',
      revisions: 'Révisions illimitées'
    }
  ];

  const addOns = [
    {
      name: 'Référencement SEO Premium',
      price: 500,
      description: 'Optimisation complète pour moteurs de recherche',
      icon: '🎯'
    },
    {
      name: 'Formation équipe (1 jour)',
      price: 800,
      description: 'Formation complète de votre équipe',
      icon: '🎓'
    },
    {
      name: 'Maintenance mensuelle',
      price: 300,
      description: 'Maintenance et mises à jour mensuelles',
      icon: '🔧'
    },
    {
      name: 'Design graphique complet',
      price: 1200,
      description: 'Logo, charte graphique, supports marketing',
      icon: '🎨'
    }
  ];

  const TarifsCard = ({ plan, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { 
      stiffness: 400, 
      damping: 30 
    });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { 
      stiffness: 400, 
      damping: 30 
    });

    const currentPrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    const originalPrice = billingCycle === 'monthly' ? plan.originalMonthlyPrice : plan.originalYearlyPrice;
    const savings = ((originalPrice - currentPrice) / originalPrice * 100).toFixed(0);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 15);
      mouseY.set((e.clientY - centerY) / 15);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          type: "spring",
          stiffness: 100
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setSelectedPlan(plan)}
        className={`group relative cursor-pointer ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
      >
        {/* Popular badge */}
        {plan.popular && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className={`px-6 py-2 bg-gradient-to-r ${plan.gradient} text-white text-sm font-bold rounded-full shadow-lg`}>
              ⚡ Plus populaire
            </div>
          </motion.div>
        )}

        {/* Glow Effect */}
        <motion.div
          className={`absolute -inset-2 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
          whileHover={{ scale: 1.05 }}
        />

        {/* Main Card */}
        <motion.div 
          className={`relative bg-slate-900/90 backdrop-blur-xl border rounded-3xl overflow-hidden shadow-xl transition-all duration-500 h-full ${
            plan.popular 
              ? 'border-purple-500/50 hover:border-purple-400/70' 
              : 'border-slate-700/50 hover:border-slate-600/50'
          }`}
          whileHover={{ 
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Header */}
          <div className={`relative p-8 bg-gradient-to-br ${plan.gradient} text-white`}>
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className="text-4xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {plan.icon}
              </motion.div>
              {billingCycle === 'yearly' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold"
                >
                  -{savings}%
                </motion.div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-sm opacity-90 mb-6">{plan.subtitle}</p>
            
            {/* Price */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black">
                {currentPrice.toLocaleString()}
              </span>
              <span className="text-lg">{plan.currency}</span>
              {originalPrice !== currentPrice && (
                <span className="text-lg line-through opacity-60">
                  {originalPrice.toLocaleString()}{plan.currency}
                </span>
              )}
            </div>
            
            <p className="text-sm opacity-80">
              {billingCycle === 'monthly' ? 'par projet' : 'facturé annuellement'}
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-gray-400 mb-6 leading-relaxed">
              {plan.description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + featureIndex * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
              
              {plan.notIncluded.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + (plan.features.length + featureIndex) * 0.05 }}
                  className="flex items-center gap-3 opacity-50"
                >
                  <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 text-xs">×</span>
                  </div>
                  <span className="text-gray-500 text-sm line-through">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Delivery info */}
            <div className="space-y-2 mb-8 p-4 bg-slate-800/50 rounded-2xl">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>⏱️</span>
                <span>{plan.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>🔄</span>
                <span>{plan.revisions}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                plan.popular
                  ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl`
                  : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {plan.popular ? 'Commencer maintenant' : 'Choisir ce plan'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="tarifs" className="py-32 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Nos Tarifs
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Des solutions sur mesure pour chaque besoin et chaque budget
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
              Projet unique
            </span>
            <motion.button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full ${
                billingCycle === 'yearly' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-700'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{
                  x: billingCycle === 'yearly' ? 32 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
              Abonnement annuel
              <span className="ml-1 text-green-400 font-semibold">(-25%)</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Tarifs Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <TarifsCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Options supplémentaires
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 group hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{addon.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{addon.name}</h4>
                      <p className="text-gray-400 text-sm">{addon.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-400">
                      +{addon.price}€
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ or Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🛡️ Garantie satisfaction 30 jours
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Nous sommes tellement confiants dans la qualité de notre travail que nous offrons 
              une garantie de remboursement intégral pendant 30 jours. Votre satisfaction est 
              notre priorité absolue.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tarifs;