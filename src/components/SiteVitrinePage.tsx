import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Star, Monitor, Smartphone, Globe, Shield, Headphones, Zap, Users, Clock, Award, Code, Search, Palette, Lock } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

const SiteVitrinePage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const [selectedPlan, setSelectedPlan] = useState('Standard');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Landing Page",
      description: "Site en une seule page, parfait pour un portfolio ou la présentation d'une entreprise",
      features: ["Design moderne", "Responsive", "Formulaire de contact", "Optimisation SEO", "Hébergement inclus"],
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      price: "150 000"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Site Vitrine",
      description: "Site en plusieurs pages pour une organisation (Services, Valeurs, Réalisations, Blog...)",
      features: ["5-8 pages", "Système de blog", "Galerie photos", "Multi-langues", "Analytics inclus"],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      price: "250 000"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Site E-commerce",
      description: "Site permettant d'acheter un bien ou un service en ligne",
      features: ["Catalogue produits", "Panier & paiement", "Gestion commandes", "Suivi livraisons", "Tableau de bord"],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      price: "400 000"
    }
  ];

  const pricingPlans = [
    {
      name: "Essentiel",
      price: "150 000",
      setup: "50 000",
      description: "Parfait pour débuter",
      features: [
        "Site Landing Page",
        "Design responsive",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Hébergement 1 an",
        "Nom de domaine inclus",
        "Support 30 jours"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Standard",
      price: "280 000",
      setup: "70 000",
      description: "Le plus populaire",
      features: [
        "Site vitrine complet",
        "Jusqu'à 8 pages",
        "Blog intégré",
        "Galerie photos",
        "Multi-langues (FR/EN)",
        "Analytics avancés",
        "Support 60 jours",
        "Formation incluse"
      ],
      popular: true,
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Premium",
      price: "480 000",
      setup: "100 000",
      description: "Solution complète",
      features: [
        "Site e-commerce",
        "Catalogue illimité",
        "Système de paiement",
        "Gestion des stocks",
        "Rapports détaillés",
        "Formation équipe",
        "Support 90 jours",
        "Maintenance 6 mois"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyse & Devis",
      description: "Nous analysons vos besoins et vous proposons une solution adaptée",
      icon: "📋",
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "2",
      title: "Design & Maquette",
      description: "Création des maquettes et validation du design avec vous",
      icon: "🎨",
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "3",
      title: "Développement",
      description: "Intégration et développement de votre site web",
      icon: "💻",
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: "4",
      title: "Livraison & Formation",
      description: "Mise en ligne et formation pour gérer votre site",
      icon: "🚀",
      color: "from-orange-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Fatou Sow",
      business: "Boutique Mode",
      text: "Notre site e-commerce nous a permis de doubler nos ventes en 3 mois. L'équipe a été très professionnelle.",
      rating: 5,
      avatar: "👩🏾‍💼"
    },
    {
      name: "Mamadou Ba",
      business: "Restaurant",
      text: "Le site vitrine présente parfaitement notre restaurant. Nous recevons plus de réservations depuis le lancement.",
      rating: 5,
      avatar: "👨🏿‍🍳"
    },
    {
      name: "Awa Diallo",
      business: "Salon de Beauté",
      text: "Site magnifique et facile à gérer. Les clients trouvent facilement nos services et tarifs.",
      rating: 5,
      avatar: "👩🏾‍💄"
    }
  ];

  const features = [
    { icon: <Code className="w-8 h-8" />, title: "Code Optimisé", desc: "Technologies modernes" },
    { icon: <Search className="w-8 h-8" />, title: "SEO Intégré", desc: "Référencement naturel" },
    { icon: <Palette className="w-8 h-8" />, title: "Design Sur Mesure", desc: "Unique à votre marque" },
    { icon: <Lock className="w-8 h-8" />, title: "Sécurisé", desc: "Protection avancée" }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Header/>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animations de fond */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Particules flottantes */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Créons Votre{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Site Web
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Professionnel
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto px-4"
            >
              Des sites web{" "}
              <strong className="text-blue-400">modernes et responsive</strong>, 
              <strong className="text-pink-400"> faire grandir votre business</strong>
            </motion.p>
            
            

            {/* Features rapides */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-blue-400"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                  <p className="text-xs text-slate-300 text-center">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions Web
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du site vitrine au e-commerce, nous créons la solution parfaite pour votre business
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative p-8 rounded-3xl transition-all duration-500 cursor-pointer group ${service.bgColor} border border-white/50 shadow-xl hover:shadow-2xl`}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="text-3xl font-bold text-purple-600 mb-6">
                    {service.price} FCFA
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    Choisir ce service
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Processus
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 étapes simples pour transformer votre idée en site web professionnel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} text-white rounded-3xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Ligne de connexion */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -z-10"
                    initial={{ scaleX: 0 }}
                    animate={isProcessInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section ref={pricingRef} id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Tarifs{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transparents
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des prix adaptés au marché sénégalais pour tous les entrepreneurs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: plan.popular ? 1.02 : 1.05, y: -5 }}
                className={`relative p-8 rounded-3xl transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-2 border-white/20' 
                    : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl hover:shadow-2xl'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Populaire
                    </span>
                  </motion.div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                      {plan.price} FCFA
                    </div>
                    <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                      + {plan.setup} FCFA de setup
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-blue-200' : 'text-green-500'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : `bg-gradient-to-r ${plan.color} text-white`
                    }`}
                  >
                    {selectedPlan === plan.name ? '✅ Sélectionné' : 'Choisir ce Plan'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos Clients{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Témoignent
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi ils nous font confiance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{testimonial.avatar}</div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic text-center">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-blue-600">{testimonial.business}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Prêt à{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Lancer
              </span>{" "}
              Votre Projet ?
            </h2>
            
            <motion.p
              className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center justify-center"
              >
                Demander un Devis
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                📞 Nous Appeler
              </motion.button>
            </motion.div>
            
            <motion.div
              className="text-blue-100 space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="flex items-center justify-center gap-2 text-lg">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📞
                </motion.span>
                +221 77 715 10 61
              </p>
              <p className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  📧
                </motion.span>
                contact@devflow.sn
              </p>
              <p className="text-blue-200 text-sm mt-4">
                🚀 Livraison en 7-14 jours • 💰 Devis gratuit • 🛡️ Garantie satisfaction
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Effets de fond animés */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 to-transparent"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Particules flottantes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

     <Footer/>
    </div>
  );
};

export default SiteVitrinePage;