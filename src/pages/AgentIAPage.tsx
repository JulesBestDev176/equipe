import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Star, MessageCircle, Calendar, Mail, Share2, BarChart3, Shield, Headphones, Zap, Users, Clock, Award, Globe, Monitor, Database, Code, Phone, Rocket, BadgeDollarSign, ShieldCheck, Settings, BookOpen, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const AgentIAPage = () => {
  useScrollToTop();
  const heroRef = useRef(null);
  const pricingRef = useRef(null);
  const otherServicesRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const isOtherServicesInView = useInView(otherServicesRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const [selectedPlan, setSelectedPlan] = useState('Business');
  const [hoveredFeature, setHoveredFeature] = useState(null);

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

  const plans = [
    {
      name: "Essentiel",
      price: "75 000",
      setup: "150 000",
      description: "Idéal pour l'automatisation personnelle",
      features: [
        "Gestion emails de base",
        "Tri des messages",
        "Agenda simple",
        "Support téléphonique",
        "1 compte connecté",
        "100 actions/mois"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700",
      badge: "💼 Personnel"
    },
    {
      name: "Business",
      price: "150 000",
      setup: "175 000", 
      description: "Solution complète pour professionnels",
      features: [
        "Tout le pack Essentiel",
        "Gestion réseaux sociaux",
        "Réponses avancées",
        "Optimisation planning",
        "3 comptes connectés",
        "500 actions/mois",
        "Support prioritaire"
      ],
      popular: true,
      color: "from-blue-600 to-purple-600",
      badge: "⭐ Populaire"
    },
    {
      name: "Entreprise",
      price: "250 000",
      setup: "200 000",
      description: "Solution tout-en-un pour équipes",
      features: [
        "Tout le pack Business",
        "Gestion d'équipe",
        "E-commerce intégré",
        "Analyses avancées",
        "Comptes illimités",
        "Actions illimitées",
        "Support 24h/7",
        "Formation équipe"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600",
      badge: "🏢 Enterprise"
    }
  ];

  const otherServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Solutions Web",
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      link: "/site-web",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Applications",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      link: "/applications",
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Assistant Personnel 24h/24",
      description: "Votre IA gère vos communications personnelles et professionnelles. Comme un assistant qui ne prend jamais de congé !",
      details: ["Gestion des emails automatique", "Tri des messages importants", "Réponses intelligentes", "Organisation des rendez-vous"],
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Gestion de Planning",
      description: "Automatisez votre agenda et optimisez votre temps. L'IA planifie intelligemment vos journées.",
      details: ["Programmation de rendez-vous", "Optimisation d'emploi du temps", "Rappels automatiques", "Synchronisation multi-calendriers"],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Gestion des Communications",
      description: "L'IA trie, répond et archive vos emails et messages selon vos priorités et préférences.",
      details: ["Filtrage intelligent des messages", "Réponses automatiques", "Catégorisation des demandes", "Archivage automatique"],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Automatisation des Réseaux",
      description: "L'IA publie, répond et engage votre audience sur tous vos réseaux sociaux selon votre branding.",
      details: ["Publication automatisée", "Réponses aux commentaires", "Analyse d'engagement", "Création de contenu"],
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    }
  ];

  const advancedServices = [
    {
      icon: "📧",
      title: "Gestionnaire Email Pro",
      description: "Votre IA trie vos emails, répond aux demandes courantes et vous alerte pour les urgences.",
      features: ["Tri automatique des emails", "Réponses pré-approuvées", "Détection des urgences", "Archivage intelligent"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "📅",
      title: "Assistant de Planning",
      description: "Optimisez votre temps avec un agenda intelligent qui planifie selon vos priorités et contraintes.",
      features: ["Optimisation des créneaux", "Gestion des conflits", "Synchronisation multi-devices", "Rappels contextuels"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "📱",
      title: "Gestionnaire Social",
      description: "Publiez, répondez et engagez votre audience sur tous vos réseaux sans y passer des heures.",
      features: ["Programmation de posts", "Réponses automatisées", "Analyse de performance", "Suggestions de contenu"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: "🛒",
      title: "Automatisation E-commerce",
      description: "Gérez commandes, stocks et service client automatiquement pour votre boutique en ligne.",
      features: ["Suivi des commandes", "Alertes de stock", "Réponses clients", "Gestion des livraisons"],
      color: "from-amber-500 to-orange-600"
    }
  ];

  const howItWorksSteps = [
  {
    step: "1",
    title: "Configuration sur Mesure",
    description:
      "Nous personnalisons votre IA selon vos besoins spécifiques et vos outils existants.",
    icon: <Settings className="h-8 w-8 text-white" />,
    color: "from-blue-500 via-blue-600 to-indigo-700",
  },
  {
    step: "2",
    title: "Formation Express",
    description:
      "30 minutes pour maîtriser le système. Une interface simple comme WhatsApp !",
    icon: <BookOpen className="h-8 w-8 text-white" />,
    color: "from-blue-500 via-blue-600 to-indigo-700",
  },
  {
    step: "3",
    title: "L'IA Prend le Relais",
    description:
      "Elle gère vos communications, planning et réseaux sociaux automatiquement.",
    icon: <Cpu className="h-8 w-8 text-white" />,
    color: "from-blue-500 via-blue-600 to-indigo-700",
  },
  {
    step: "4",
    title: "Vous Concentrez sur l'Essentiel",
    description:
      "Gagnez du temps pour ce qui compte vraiment pendant que l'IA gère le quotidien.",
    icon: <Clock className="h-8 w-8 text-white" />,
    color: "from-blue-500 via-blue-600 to-indigo-700",
  },
];

  const testimonials = [
    {
      name: "Aminata Diop",
      business: "Consultante indépendante",
      text: "Mon IA gère mes emails et mon agenda. Je gagne 2h par jour et ne rate plus jamais un rendez-vous important !",
      rating: 5,
      avatar: "👩🏾‍💼",
      result: "+2h/jour"
    },
    {
      name: "Jean Mbaye",
      business: "E-commerce",
      text: "Toutes mes commandes et messages clients sont gérés automatiquement. Mon business tourne même quand je dors !",
      rating: 5,
      avatar: "👨🏿‍💼",
      result: "+30% ventes"
    },
    {
      name: "Fatou Ndiaye",
      business: "Coach Bien-être",
      text: "Mes réseaux sociaux sont toujours actifs grâce à l'IA qui publie et répond pour moi. Mon engagement a doublé !",
      rating: 5,
      avatar: "👩🏾‍💻",
      result: "2x engagement"
    }
  ];

  const examples = [
    {
      icon: "📧",
      title: "Gestion Email",
      example: 'L\'IA trie vos emails, répond aux demandes courantes et vous alerte seulement pour ce qui nécessite votre attention.',
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "📅",
      title: "Agenda Intelligent",
      example: 'L\'IA optimise votre emploi du temps en évitant les conflits et en réservant du temps pour vos priorités.',
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "📱",
      title: "Réseaux Sociaux",
      example: 'Un post Instagram est automatiquement adapté pour Facebook, LinkedIn et transformé en email newsletter.',
      color: "from-green-500 to-teal-600"
    },
    {
      icon: "🛍️",
      title: "Boutique en Ligne",
      example: 'L\'IA suit les commandes, envoie les confirmations et gère le service client de base sans votre intervention.',
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: "📞",
      title: "Réception Virtuelle",
      example: 'Les appels sont filtrés, les messages transcrits et les urgences immédiatement signalées sur votre mobile.',
      color: "from-red-500 to-pink-600"
    },
    {
      icon: "📊",
      title: "Analyses Automatisées",
      example: 'Des rapports clés sur vos performances sont générés automatiquement chaque semaine dans votre boîte mail.',
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl"
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

          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                i % 3 === 0 ? "bg-blue-400/60" : i % 3 === 1 ? "bg-indigo-400/60" : "bg-purple-400/60"
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
              Votre Assistant IA
              <br />
                Pour Automatiser Votre Quotidien
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto px-4"
            >
              Un assistant intelligent qui{" "}
              <strong className="text-white">gère vos emails</strong>, organise votre agenda et optimise vos réseaux sociaux{" "}
              <strong className="text-white">pendant que vous vous concentrez sur l'essentiel</strong>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Shield, text: "100% Sécurisé", color: "text-blue-400", bgColor: "from-green-500/10 to-emerald-500/10" },
                { icon: Clock, text: "Setup en 48h", color: "text-blue-400", bgColor: "from-blue-500/10 to-cyan-500/10" },
                { icon: Headphones, text: "Support Local", color: "text-blue-400", bgColor: "from-purple-500/10 to-violet-500/10" },
                { icon: Award, text: "Multi-Plateformes", color: "text-blue-400", bgColor: "from-pink-500/10 to-rose-500/10" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`flex flex-col items-center gap-2 p-3 sm:p-4 bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-xl border border-white/10 cursor-pointer group`}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - Remontée après le Hero */}
      <section ref={pricingRef} id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            {/* <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💰
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Tarifs Adaptés à Vos Besoins
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choisissez la formule qui correspond à votre niveau d'activité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: plan.popular ? 1.02 : 1.05, y: -5 }}
                className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white shadow-2xl scale-105 border-2 border-white/20' 
                    : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Le Plus Populaire
                    </span>
                  </motion.div>
                )} */}
                
                <div className="text-center">
                  <div className="mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      plan.popular ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                  
                  <motion.h3
                    className="text-xl lg:text-2xl font-bold mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index }}
                  >
                    {plan.name}
                  </motion.h3>
                  <p className={`mb-6 text-sm lg:text-base ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <motion.div
                      className="text-2xl lg:text-4xl font-bold mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {plan.price.toLocaleString()} FCFA
                      <span className="text-sm lg:text-lg font-normal">/mois</span>
                    </motion.div>
                    <div className={`text-xs lg:text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                      + {plan.setup.toLocaleString()} FCFA d'inscription
                    </div>
                  </div>
                  
                  <ul className="space-y-2 lg:space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isPricingInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center text-xs lg:text-sm"
                      >
                        <CheckCircle className={`w-4 h-4 mr-2 lg:mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-blue-200' : 'text-green-500'
                        }`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 lg:py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl`
                    }`}
                  >
                    {selectedPlan === plan.name ? '✅ Sélectionné' : 'Choisir ce Plan'}
                  </motion.button> */}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-xl border border-white/50"
          >
            <p className="text-gray-600 mb-4 text-base lg:text-lg">
              💳 Paiement par Orange Money, Wave ou virement bancaire
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-6 text-xs lg:text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Garantie satisfait ou remboursé 30 jours
              </span>
              <span className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-blue-500" />
                Support technique inclus
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-500" />
                Mises à jour gratuites
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            {/* <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🤖
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Libérez-vous des Tâches Répétitives
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment regagner des heures chaque jour en automatisant votre quotidien
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer group ${feature.bgColor} border border-white/50 shadow-lg hover:shadow-2xl`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  initial={false}
                  animate={hoveredFeature === index ? { opacity: 1 } : { opacity: 0 }}
                />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <motion.div
                      className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.gradient} text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 shadow-lg mx-auto sm:mx-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 text-center sm:text-left">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base text-center sm:text-left">{feature.description}</p>
                  
                  <motion.ul 
                    className="space-y-3"
                    initial="hidden"
                    animate={hoveredFeature === index ? "visible" : "hidden"}
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                      hidden: {}
                    }}
                  >
                    {feature.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        variants={{
                          hidden: { x: -10, opacity: 0.7 },
                          visible: { x: 0, opacity: 1 }
                        }}
                        className="flex items-center text-gray-700 text-sm lg:text-base"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-3 flex-shrink-0" />
                        </motion.div>
                        <span className="font-medium">{detail}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            {/* <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⚡
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Solutions Avancées d'Automatisation
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des outils puissants pour optimiser chaque aspect de votre vie professionnelle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {advancedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="text-5xl lg:text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-700 text-sm lg:text-base"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 text-white p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h3
                className="text-2xl lg:text-3xl font-bold mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎯 Adapté à Tous les Métiers
              </motion.h3>
              <p className="text-blue-100 leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto">
                <strong>Indépendants, Entrepreneurs, Professionnels, Étudiants...</strong><br/>
                Peu importe votre activité, notre IA s'adapte à vos besoins spécifiques !
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            {/* <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🎯
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Exemples Concrets d'Automatisation
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Voici comment votre assistant IA peut transformer votre quotidien
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
          >
            {examples.map((exemple, index) => (
              <motion.div
                key={exemple.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${exemple.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl lg:text-6xl mb-6"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exemple.icon}
                  </motion.div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">{exemple.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed italic">
                    {exemple.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto border border-white/50"
          >
            <motion.h3
              className="text-xl lg:text-2xl font-bold text-gray-800 mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⏱️ Gagnez Jusqu'à 10h Par Semaine
            </motion.h3>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
              Imaginez ce que vous pourriez faire avec tout ce temps supplémentaire : développer votre business, 
              passer plus de temps en famille, ou simplement vous reposer. Notre IA prend en charge les tâches 
              chronophages pour que vous puissiez vous concentrer sur ce qui compte vraiment pour vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} id="demo" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            {/* <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚙️
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Comment Ça Marche
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une intégration simple et rapide pour des résultats immédiats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 md:mb-20">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center relative group"
              >
                <div className="relative">
                  <motion.div
                    className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${step.color} text-white rounded-3xl flex items-center justify-center text-xl lg:text-2xl font-bold mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl lg:text-3xl">{step.icon}</span>
                  </motion.div>
                  
                  {/* {index < howItWorksSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-8 lg:top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"
                      initial={{ scaleX: 0 }}
                      animate={isHowItWorksInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )} */}
                </div>
                
                <motion.h3
                  className="text-lg lg:text-xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0 }}
                  animate={isHowItWorksInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed text-sm lg:text-base"
                  initial={{ opacity: 0 }}
                  animate={isHowItWorksInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Demo Interface - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-sm sm:max-w-md mx-auto"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Email Interface Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 lg:p-6 flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-6 h-6 lg:w-8 lg:h-8 mr-3 lg:mr-4" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-base lg:text-lg">Assistant Email</h4>
                  <p className="text-blue-100 text-xs lg:text-sm flex items-center">
                    <motion.div
                      className="w-2 h-2 bg-blue-300 rounded-full mr-2"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Traitement automatique activé
                  </p>
                </div>
              </div>
              
              {/* Email Content */}
              <div className="p-4 lg:p-6 space-y-4 h-64 sm:h-80 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="bg-white p-3 lg:p-4 rounded-2xl rounded-tl-sm max-w-xs shadow-lg border border-gray-100">
                    <strong className="text-blue-600 text-xs lg:text-sm">📧 Email reçu :</strong><br/>
                    <em className="text-gray-600 text-xs lg:text-sm">
                      "Bonjour, je souhaite prendre rendez-vous pour une consultation"
                    </em>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 lg:p-4 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
                    <span className="text-xs lg:text-sm">🗓 "Bonjour, je vous propose ces créneaux : Lundi 10h, Mardi 15h ou Jeudi 11h. Quel vous convient ?"</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 }}
                >
                  <div className="bg-white p-3 lg:p-4 rounded-2xl rounded-tl-sm max-w-xs shadow-lg border border-gray-100">
                    <strong className="text-gray-800 text-xs lg:text-sm">Client :</strong> 
                    <span className="text-gray-600 text-xs lg:text-sm"> "Je prends Mardi 15h, merci"</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 lg:p-4 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
                    <span className="text-xs lg:text-sm">✅ "Rendez-vous confirmé pour Mardi à 15h. Un rappel vous sera envoyé 24h avant."</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3 }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-3 lg:p-4 rounded-2xl text-xs lg:text-sm shadow-lg">
                    <strong>📅 Notification :</strong><br/>
                    "RDV ajouté à votre agenda : Consultation avec M. Diallo - Mardi 15h"
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            {/* <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⭐
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Ils Nous Font Confiance
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment nos clients ont transformé leur quotidien
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
                className="relative bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group"
              >
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isTestimonialsInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  {testimonial.result}
                </motion.div>
                
                <div className="text-center mb-6">
                  <motion.div
                    className="text-5xl lg:text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isTestimonialsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.p
                  className="text-gray-600 mb-6 italic leading-relaxed text-center text-sm lg:text-base"
                  initial={{ opacity: 0 }}
                  animate={isTestimonialsInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  "{testimonial.text}"
                </motion.p>
                
                <div className="text-center">
                  <h4 className="font-bold text-gray-800 text-base lg:text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium text-sm lg:text-base">{testimonial.business}</p>
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
            {/* <motion.div
              className="text-4xl md:text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🚀
            </motion.div> */}

            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Découvrez Nos Autres Solutions
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complétez votre transformation digitale
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isOtherServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer group bg-blue-50 border border-white/50 shadow-xl hover:shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Globe className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Solutions Web</h3>
                
                
                <Link to="/site-web">
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
              className="relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer group bg-blue-50 border border-white/50 shadow-xl hover:shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Monitor className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Applications</h3>
                
                
                <Link to="/applications">
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 to-transparent"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        
        {[...Array(15)].map((_, i) => (
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-5xl lg:text-6xl mb-8"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🚀
            </motion.div>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Prêt à{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Gagner du Temps
              </span>{" "}
              Chaque Jour ?
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Rejoignez les professionnels qui ont libéré jusqu'à 10h par semaine grâce à notre assistant IA
            </motion.p>
            
           
            
            <motion.div
              className="text-blue-100 space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="flex items-center justify-center gap-2 text-base lg:text-lg">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </motion.span>
                +221 77 715 10 61
              </p>
              <p className="flex items-center justify-center gap-2 text-sm lg:text-base">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </motion.span>
                contact@devflow.sn
              </p>
              <p className="text-blue-200 text-xs lg:text-sm mt-4 px-4 flex flex-wrap gap-3 justify-center items-center">
                <Rocket className="w-4 h-4 text-white" /> Livraison en 7–14
                jours •
                <BadgeDollarSign className="w-4 h-4 text-white" /> Devis gratuit
                •
                <ShieldCheck className="w-4 h-4 text-white" /> Garantie
                satisfaction
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentIAPage;