import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Star, Monitor, Smartphone, Tablet, Shield, Headphones, Zap, Users, Clock, Award, Code, Layers, Cpu, Database, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ApplicationsPage = () => {
  useScrollToTop();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const processRef = useRef(null);
  const otherServicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isOtherServicesInView = useInView(otherServicesRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const [selectedPlan, setSelectedPlan] = useState('Mobile Standard');

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
      icon: <Smartphone className="w-6 h-6" />,
      title: "Applications Mobiles",
      description: "Applications mobiles simples et efficaces, adaptées à vos besoins",
      features: [
        "Fonctionnalités sur mesure",
        "Interface facile à utiliser",
        "Notifications en temps réel"
      ],
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      price: "500 000",
      subtitle: "À partir de"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Applications Web",
      description: "Sites et applications web rapides et faciles à gérer",
      features: [
        "Design responsive",
        "Gestion simple du contenu",
        "Sécurité et performance"
      ],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      price: "500 000",
      subtitle: "À partir de"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Applications Desktop",
      description: "Logiciels de bureau adaptés à votre activité",
      features: [
        "Interface claire et intuitive",
        "Gestion des données facile",
        "Rapports simples"
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      price: "1 000 000",
      subtitle: "À partir de"
    }
  ];

  const pricingPlans = [
    {
      name: "Mobile",
      price: "1 500 000",
      setup: "300 000",
      description: "Application mobile performante pour Android et iOS",
      features: [
        "Fonctionnalités personnalisées",
        "Interface intuitive et moderne",
        "Notifications push",
        "Support 45 jours",
        "Formation utilisateur",
        "Déploiement sur Play Store et App Store",
        "Documentation complète"
      ],
      popular: true,
      color: "from-blue-600 to-indigo-700",
      badge: "📱 Mobile"
    },
    {
      name: "Application Web",
      price: "600 000",
      setup: "100 000",
      description: "Site web ou application web simple et efficace",
      features: [
        "Design responsive",
        "Gestion facile du contenu",
        "Fonctionnalités essentielles",
        "Sécurité de base",
        "Support 30 jours",
        "Formation à l'utilisation",
        "Maintenance 1 mois"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600",
      badge: "🌐 Web"
    },
    {
      name: "Desktop",
      price: "1 000 000",
      setup: "150 000",
      description: "Logiciel de bureau adapté à votre activité",
      features: [
        "Interface claire et simple",
        "Gestion des données",
        "Rapports et tableaux de bord",
        "Support 60 jours",
        "Formation utilisateur",
        "Maintenance 3 mois"
      ],
      popular: false,
      color: "from-emerald-600 to-teal-600",
      badge: "💻 Desktop"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyse & Cahier des Charges",
      description: "Étude approfondie de vos besoins et définition des spécifications techniques",
      icon: "📋",
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "2",
      title: "Conception & Prototypage",
      description: "Création des wireframes, maquettes et prototypes interactifs",
      icon: "🎨",
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "3",
      title: "Développement & Tests",
      description: "Développement agile avec tests continus et intégration",
      icon: "💻",
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: "4",
      title: "Déploiement & Formation",
      description: "Mise en production, formation équipe et support continu",
      icon: "🚀",
      color: "from-orange-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Ibrahima Ndiaye",
      business: "Directeur IT - Bank of Africa",
      text: "L'application mobile développée a révolutionné notre service client. Les fonctionnalités sont parfaitement adaptées au marché sénégalais.",
      rating: 5,
      avatar: "👨🏿‍💼"
    },
    {
      name: "Awa Sarr",
      business: "CEO - TransLog Sénégal",
      text: "Le logiciel de gestion a optimisé tous nos processus. L'intégration CNSS nous fait gagner énormément de temps.",
      rating: 5,
      avatar: "👩🏾‍💼"
    },
    {
      name: "Moussa Diop",
      business: "DG - AgriSen",
      text: "L'ERP développé gère parfaitement notre chaîne logistique agricole. ROI atteint en 8 mois !",
      rating: 5,
      avatar: "👨🏿‍🌾"
    }
  ];

  const features = [
    { icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Technologies Modernes", desc: "React Native, Swift, Python" },
    { icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Architecture Modulaire", desc: "Évolutive et maintenable" },
    { icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Performance Optimisée", desc: "Code natif optimisé" },
    { icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Sécurité Avancée", desc: "Cryptage et protection" }
  ];

  const advantages = [
    {
      icon: "💰",
      title: "Tarifs Compétitifs",
      description: "Coûts 40 à 60% inférieurs aux standards internationaux grâce à l'optimisation des ressources",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "🌍",
      title: "Expertise Adaptée aux Marchés",
      description: "Connaissance approfondie des besoins, cultures et réglementations locales à l'échelle mondiale",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "⚡",
      title: "Technologies Open Source",
      description: "Réduction des coûts et flexibilité grâce aux architectures modulaires et solutions open source",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "☁️",
      title: "Hébergement Optimisé",
      description: "Solutions cloud régionales et globales pour garantir performance et disponibilité",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animations de fond */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl"
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
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full"
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
              Développons Vos{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Applications
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Sur Mesure
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto px-4"
            >
              Applications{" "}
              <strong className="text-purple-400">mobiles et desktop</strong> performantes, 
              <strong className="text-pink-400"> adaptées aux besoins spécifiques des marchés locaux</strong>
            </motion.p>
            
            {/* Features rapides */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-purple-400"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white text-center">{feature.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Solutions Applicatives
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Du mobile au desktop, nous développons des applications performantes adaptées à vos besoins
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
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
                className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer group ${service.bgColor} border border-white/50 shadow-xl hover:shadow-2xl`}
              >
                <div className="text-center">
                  <motion.div
                    className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm lg:text-base">{service.description}</p>
                  
                  <span className="text-xs lg:text-sm text-gray-500">{service.subtitle}</span>
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">
                     {service.price} FCFA
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm lg:text-base">
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Pourquoi{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Nous Choisir
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Des avantages uniques pour le développement de vos applications, adaptés à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${advantage.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl lg:text-2xl shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {advantage.icon}
                </motion.div>
                
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Méthodologie
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus éprouvé pour transformer vos idées en applications performantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center relative"
              >
                <motion.div
                  className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${step.color} text-white rounded-3xl flex items-center justify-center text-2xl lg:text-3xl mx-auto mb-6 shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>
                
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base">{step.description}</p>
                
                {/* Ligne de connexion */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-8 lg:top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 -z-10"
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
      <section ref={pricingRef} id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tarifs{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Compétitifs
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Des tarifs compétitifs adaptés à vos besoins, avec une qualité reconnue à l'international
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: plan.popular ? 1.02 : 1.05, y: -5 }}
                className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105 border-2 border-white/20' 
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
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Populaire
                    </span>
                  </motion.div>
                )}
                
                <div className="text-center">
                  <div className="mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      plan.popular ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 text-xs lg:text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-xl lg:text-2xl font-bold mb-2">
                      {plan.price} FCFA
                    </div>
                    <div className={`text-xs ${plan.popular ? 'text-purple-100' : 'text-gray-500'}`}>
                      + {plan.setup} FCFA de setup
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs">
                        <CheckCircle className={`w-3 h-3 lg:w-4 lg:h-4 mr-2 flex-shrink-0 ${
                          plan.popular ? 'text-purple-200' : 'text-green-500'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-sm ${
                      plan.popular
                        ? 'bg-white text-purple-600 hover:bg-gray-100'
                        : `bg-gradient-to-r ${plan.color} text-white`
                    }`}
                  >
                    {selectedPlan === plan.name ? '✅ Sélectionné' : 'Choisir ce Plan'}
                  </motion.button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nos Clients{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Témoignent
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos applications transforment les entreprises sénégalaises
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl lg:text-6xl mb-4">{testimonial.avatar}</div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic text-center text-sm lg:text-base">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-bold text-gray-800 text-base lg:text-lg">{testimonial.name}</h4>
                  <p className="text-purple-600 text-sm lg:text-base">{testimonial.business}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Autres Services */}
      <section ref={otherServicesRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isOtherServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🚀
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Découvrez Nos{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Autres Solutions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complétez votre transformation digitale
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOtherServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer group bg-blue-50 border border-white/50 shadow-xl hover:shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MessageCircle className="w-6 h-6 lg:w-8 lg:h-8" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Agent IA</h3>
                
                
                <Link to="/automatisation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm lg:text-base"
                  >
                    Découvrir →
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer group bg-emerald-50 border border-white/50 shadow-xl hover:shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Globe className="w-6 h-6 lg:w-8 lg:h-8" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Solutions Web</h3>
                
                
                <Link to="/site-web">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 lg:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm lg:text-base"
                  >
                    Découvrir →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Transformez Votre{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Vision
              </span>{" "}
              en Application
            </h2>
            
            <motion.p
              className="text-lg sm:text-xl text-purple-100 mb-12 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-base lg:text-lg font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center justify-center"
              >
                Demander un Devis
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 w-5 h-5 lg:w-6 lg:h-6" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-base lg:text-lg font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                📱 Discuter du Projet
              </motion.button>
            </motion.div>
            
            <motion.div
              className="text-purple-100 space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="flex items-center justify-center gap-2 text-base lg:text-lg">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📞
                </motion.span>
                +221 77 715 10 61
              </p>
              <p className="flex items-center justify-center gap-2 text-sm lg:text-base">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  📧
                </motion.span>
                contact@devflow.sn
              </p>
              <p className="text-purple-200 text-xs lg:text-sm mt-4 px-4">
                🚀 Développement en 2-6 mois • 💰 Devis gratuit • 🛡️ Garantie de qualité • 🇸🇳 Expertise locale
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
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full"
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

export default ApplicationsPage;