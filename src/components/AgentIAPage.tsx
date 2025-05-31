import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Star, MessageCircle, Calendar, Mail, Share2, BarChart3, Shield, Headphones, Zap, Users, Clock, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AgentIAPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
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

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Réceptionniste Virtuelle 24h/24",
      description: "Votre IA répond par message vocal ou texte sur WhatsApp. Comme une vraie secrétaire qui ne dort jamais !",
      details: ["Messages vocaux automatiques", "Réponses SMS instantanées", "Prise de messages importants", "Transfert des urgences"],
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Chatbot Intelligent",
      description: "Un robot conversationnel qui répond à vos clients sur tous vos réseaux sociaux et votre site web.",
      details: ["Répond sur Instagram/Facebook", "Chat sur votre site web", "Prend les commandes", "Guide les clients"],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Reformatage de Contenu",
      description: "L'IA transforme vos textes : un article devient post Facebook, story Instagram, email marketing...",
      details: ["Un texte → plusieurs formats", "Posts réseaux sociaux", "Emails de vente", "Descriptions produits"],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Prospection Automatique",
      description: "L'IA trouve de nouveaux clients et leur envoie des messages personnalisés pour vous.",
      details: ["Recherche de prospects", "Messages personnalisés", "Suivi automatique", "Rapports de résultats"],
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    }
  ];

  const advancedServices = [
    {
      icon: "🎯",
      title: "Setter IA pour Instagram/TikTok",
      description: "L'IA gère vos messages privés (DM) sur Instagram, TikTok et Facebook. Elle filtre les vrais clients.",
      features: ["Répond aux DMs automatiquement", "Qualifie les prospects", "Prend les RDV", "Vous envoie les clients sérieux"],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: "📢",
      title: "Campagnes de Prospection",
      description: "L'IA trouve vos futurs clients et leur écrit des messages personnalisés pour générer des ventes.",
      features: ["Trouve des clients potentiels", "Messages personnalisés", "Suivi automatique", "Rendez-vous qualifiés"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: "🔄",
      title: "Reformatage de Contenu",
      description: "Donnez un texte à l'IA, elle le transforme en posts, stories, emails, annonces publicitaires...",
      features: ["1 idée → 10 contenus différents", "Posts Facebook/Instagram", "Emails marketing", "Scripts de vente"],
      color: "from-emerald-500 to-cyan-600"
    },
    {
      icon: "🎤",
      title: "Réceptionniste Vocale",
      description: "Vos clients peuvent laisser des messages vocaux sur WhatsApp. L'IA comprend et répond automatiquement.",
      features: ["Comprend les messages vocaux", "Répond en français/anglais", "Transcrit les demandes", "Actions automatiques"],
      color: "from-amber-500 to-orange-600"
    }
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: "On Programme Votre IA",
      description: "En 2 jours, nous créons votre assistant intelligent qui connaît votre business sur le bout des doigts.",
      icon: "⚙️",
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "2", 
      title: "Formation Rapide",
      description: "30 minutes pour apprendre à contrôler votre IA. Plus simple qu'utiliser WhatsApp !",
      icon: "🎓",
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "3",
      title: "L'IA Travaille Pour Vous",
      description: "Elle répond aux clients, gère vos DMs, trouve des prospects et convertit en ventes automatiquement.",
      icon: "🤖",
      color: "from-emerald-500 to-teal-600"
    },
    {
      step: "4",
      title: "Vous Récoltez les Résultats",
      description: "Plus de clients, plus de ventes, moins de stress. Votre business grandit pendant que vous dormez.",
      icon: "💰",
      color: "from-orange-500 to-red-600"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "75 000",
      setup: "150 000",
      description: "Idéal pour commencer avec l'IA",
      features: [
        "Chatbot basique WhatsApp",
        "Réponses automatiques simples",
        "Support par téléphone",
        "Formation 1h incluse",
        "Français/Anglais",
        "50 conversations/mois"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Business",
      price: "150 000",
      setup: "175 000", 
      description: "Le choix des entrepreneurs ambitieux",
      features: [
        "Tout du pack Starter",
        "Réceptionniste vocale",
        "Chatbot multi-plateformes",
        "Reformatage de contenu",
        "Gestion des DMs Instagram",
        "500 conversations/mois",
        "Support prioritaire"
      ],
      popular: true,
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Pro Max",
      price: "250 000",
      setup: "200 000",
      description: "Pour dominer votre marché",
      features: [
        "Tout du pack Business",
        "Setter IA avancé",
        "Prospection automatique",
        "Campagnes personnalisées",
        "Intégrations sur mesure",
        "Conversations illimitées",
        "Support immédiat 24h/7",
        "Formation équipe complète"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ndiaye",
      business: "Coach Fitness en ligne",
      text: "L'IA répond à mes DMs Instagram et filtre les vrais prospects. Je ne perds plus de temps avec les curieux. Mes ventes ont explosé !",
      rating: 5,
      avatar: "👩🏾‍💼",
      result: "+150% ventes"
    },
    {
      name: "Omar Diouf",
      business: "E-commerce Mode",
      text: "La réceptionniste vocale est magique ! Les clients laissent des messages vocaux et l'IA comprend tout. Service client 24h/24 sans effort.",
      rating: 5,
      avatar: "👨🏿‍💼",
      result: "24h/24 service"
    },
    {
      name: "Khady Mbaye",
      business: "Consultante Marketing",
      text: "Je donne un texte à l'IA et hop ! Elle me fait 10 posts différents pour tous mes réseaux. Je gagne 5h par semaine !",
      rating: 5,
      avatar: "👩🏾‍💻",
      result: "-5h/semaine"
    }
  ];

  const examples = [
    {
      icon: "🛍️",
      title: "E-commerce",
      example: 'Client écrit "Vos sacs à main ?" → L\'IA montre le catalogue, prend la commande et programme la livraison.',
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: "🍽️",
      title: "Restaurant",
      example: 'Message vocal : "Je veux du thieb" → L\'IA comprend, propose les options et confirme la commande automatiquement.',
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: "💼",
      title: "Coach/Consultant",
      example: 'DM Instagram "Comment perdre du poids ?" → IA filtre le prospect et propose directement un appel découverte.',
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "🏠",
      title: "Immobilier",
      example: 'L\'IA trouve des gens qui cherchent des maisons, leur écrit en privé et prend des RDV de visite automatiquement.',
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: "💇‍♀️",
      title: "Salon de Beauté",
      example: 'Un post Instagram devient : story, post Facebook, email clients et annonce Google - tout automatiquement !',
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "🎓",
      title: "Formation",
      example: 'L\'IA répond aux questions sur vos cours par messages vocaux et inscrit directement les étudiants intéressés.',
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section Amélioré */}
<section ref={heroRef} className="relative h-[100vh] py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-24">
  {/* Animations de fond */}
  <div className="absolute inset-0">
    {/* Formes géométriques animées */}
    <motion.div
      className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
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
      className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl"
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

    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Particules flottantes */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute w-2 h-2 rounded-full ${
          i % 3 === 0
            ? "bg-blue-400/60"
            : i % 3 === 1
            ? "bg-indigo-400/60"
            : "bg-purple-400/60"
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

  <div className="container mx-auto px-4 relative z-10">
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
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
      >
        Votre{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Vendeur Virtuel
        </span>
        <br />
        <span className="text-4xl md:text-5xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Qui Travaille 24h/24
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto"
      >
        Un assistant intelligent qui{" "}
        <strong className="text-blue-400">répond à vos clients</strong>, prend les commandes et gère votre business{" "}
        <strong className="text-purple-400">pendant que vous vous reposez</strong>. 
        Tout se passe sur <strong className="text-green-400">WhatsApp</strong> !
      </motion.p>
      
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.4 }}
          />
          <span className="relative z-10 flex items-center gap-3">
            Commencer Maintenant
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </span>
        </motion.button>
        
        
      </motion.div> */}
      
      {/* Indicateurs de confiance améliorés */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
      >
        {[
          { icon: Shield, text: "100% Sécurisé", color: "text-green-400", bgColor: "from-green-500/10 to-emerald-500/10" },
          { icon: Clock, text: "Setup en 48h", color: "text-blue-400", bgColor: "from-blue-500/10 to-cyan-500/10" },
          { icon: Headphones, text: "Support Sénégal", color: "text-purple-400", bgColor: "from-purple-500/10 to-violet-500/10" },
          { icon: Award, text: "Français/English", color: "text-pink-400", bgColor: "from-pink-500/10 to-rose-500/10" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className={`flex flex-col items-center gap-2 p-4 bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-xl border border-white/10 cursor-pointer group`}
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
              <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
            </motion.div>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Features Section Redessinée */}
      <section ref={featuresRef} id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🤖
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comment Votre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vendeur Virtuel
              </span>{" "}
              Travaille
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment gagner plus d'argent en servant vos clients 24h/24, 
              même quand vous dormez
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
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
                className={`relative p-8 rounded-3xl transition-all duration-500 cursor-pointer group ${feature.bgColor} border border-white/50 shadow-lg hover:shadow-2xl`}
              >
                {/* Effet de brillance au survol */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  initial={false}
                  animate={hoveredFeature === index ? { opacity: 1 } : { opacity: 0 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} text-white rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
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
                        className="flex items-center text-gray-700"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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

      {/* Services Avancés Section Améliorée */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        {/* Effets de fond */}
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
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⚡
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Services{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Avancés
              </span>{" "}
              Pour Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des outils puissants pour faire grandir votre business plus rapidement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group overflow-hidden"
              >
                {/* Gradient animé au survol */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-700"
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
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Effets de lumière */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h3
                className="text-3xl font-bold mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💼 Parfait Pour Tous Types de Business
              </motion.h3>
              <p className="text-blue-100 leading-relaxed text-xl max-w-3xl mx-auto">
                <strong>Consultants, Coachs, E-commerce, Restaurants, Salons, Immobilier...</strong><br/>
                Peu importe votre domaine, notre IA s'adapte à votre façon de travailler !
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exemples Concrets Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🎯
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Exemples{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Concrets
              </span>{" "}
              de Ce Que Fait Votre IA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Voici exactement comment votre assistant va vous aider au quotidien
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group overflow-hidden"
              >
                {/* Gradient de fond au survol */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${exemple.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exemple.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{exemple.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
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
            className="text-center bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-xl max-w-4xl mx-auto border border-white/50"
          >
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🧠 Une IA Qui Comprend Vraiment Votre Business
            </motion.h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Nous programmons votre IA avec{" "}
              <strong className="text-blue-600">vos produits, votre style, vos réponses habituelles</strong>. 
              Elle comprend les messages vocaux, reformate vos contenus et trouve vos futurs clients. 
              <strong className="text-purple-600">
                C'est comme avoir le meilleur commercial du monde qui ne prend jamais de pause !
              </strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section Modernisée */}
      <section ref={howItWorksRef} id="demo" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚙️
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comment Votre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IA Personnelle
              </span>{" "}
              Fonctionne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En 4 étapes simples, transformez votre business avec un assistant intelligent 
              qui travaille pour vous 24h/24
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} text-white rounded-3xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-3xl">{step.icon}</span>
                  </motion.div>
                  
                  {/* Ligne de connexion */}
                  {index < howItWorksSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200"
                      initial={{ scaleX: 0 }}
                      animate={isHowItWorksInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </div>
                
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0 }}
                  animate={isHowItWorksInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isHowItWorksInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Demo WhatsApp Interface Améliorée */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-md mx-auto"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header WhatsApp */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MessageCircle className="w-8 h-8 mr-4" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-lg">Assistant JulesDev</h4>
                  <p className="text-green-100 text-sm flex items-center">
                    <motion.div
                      className="w-2 h-2 bg-green-300 rounded-full mr-2"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    En ligne
                  </p>
                </div>
              </div>
              
              {/* Messages */}
              <div className="p-6 space-y-4 h-80 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="bg-white p-4 rounded-2xl rounded-tl-sm max-w-xs shadow-lg border border-gray-100">
                    <strong className="text-blue-600">💬 Message vocal client :</strong><br/>
                    <em className="text-gray-600">
                      "Bonjour, j'ai vu vos formations sur Instagram, c'est combien pour apprendre le marketing digital ?"
                    </em>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
                    🎯 "Salut ! Notre formation Marketing Digital coûte 125 000F. Elle dure 6 semaines. Tu veux voir le programme complet ?"
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 }}
                >
                  <div className="bg-white p-4 rounded-2xl rounded-tl-sm max-w-xs shadow-lg border border-gray-100">
                    <strong className="text-gray-800">Client :</strong> 
                    <span className="text-gray-600"> "Oui ! Et vous faites des facilités de paiement ?"</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl rounded-tr-sm max-w-xs shadow-lg">
                    💳 "Parfait ! Oui, 3 fois sans frais : 45k à l'inscription + 40k + 40k. Je t'envoie le programme et on fixe un call ?"
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl text-sm shadow-lg">
                    <strong>📱 Notification :</strong><br/>
                    "Prospect qualifié: Marie Diop - Formation Marketing Digital - RDV programmé demain 15h"
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section Premium */}
      <section ref={pricingRef} id="pricing" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Effets de fond */}
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
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💰
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tarifs{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Adaptés
              </span>{" "}
              au Sénégal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des prix justes pour tous les entrepreneurs, du petit commerce à la grande entreprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
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
                      ⭐ Le Plus Populaire
                    </span>
                  </motion.div>
                )}
                
                <div className="text-center">
                  <motion.h3
                    className="text-2xl font-bold mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index }}
                  >
                    {plan.name}
                  </motion.h3>
                  <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <motion.div
                      className="text-4xl font-bold mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {plan.price.toLocaleString()} FCFA
                      <span className="text-lg font-normal">/mois</span>
                    </motion.div>
                    <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                      + {plan.setup.toLocaleString()} FCFA d'inscription
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isPricingInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-blue-200' : 'text-green-500'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl`
                    }`}
                  >
                    {selectedPlan === plan.name ? '✅ Sélectionné' : 'Choisir ce Plan'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
          >
            <p className="text-gray-600 mb-4 text-lg">
              💳 Paiement par Orange Money, Wave ou virement bancaire
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
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

      {/* Testimonials Section Élégante */}
      <section ref={testimonialsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⭐
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ils Nous Font{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Confiance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment nos clients transforment leur business
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
                className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group"
              >
                {/* Badge de résultat */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isTestimonialsInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  {testimonial.result}
                </motion.div>
                
                <div className="text-center mb-6">
                  <motion.div
                    className="text-6xl mb-4"
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
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.p
                  className="text-gray-600 mb-6 italic leading-relaxed text-center"
                  initial={{ opacity: 0 }}
                  animate={isTestimonialsInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  "{testimonial.text}"
                </motion.p>
                
                <div className="text-center">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.business}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section Spectaculaire */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Effets de fond animés */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 to-transparent"
          animate={{ x: [-100, 100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Particules flottantes */}
        {[...Array(15)].map((_, i) => (
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
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-6xl mb-8"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🚀
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Prêt à{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Doubler
              </span>{" "}
              Vos Ventes ?
            </motion.h2>
            
            <motion.p
              className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Rejoignez les centaines de commerçants sénégalais qui vendent maintenant 24h/24 
              grâce à leur vendeur virtuel
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
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Démarrer Maintenant 
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
                🗣️ Parler à un Expert
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
                souleymanefall176@gmail.com
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