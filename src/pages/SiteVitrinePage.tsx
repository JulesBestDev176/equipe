import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Monitor,
  Smartphone,
  Globe,
  Shield,
  Headphones,
  Zap,
  Users,
  Clock,
  Award,
  Code,
  Search,
  Palette,
  Lock,
  MessageCircle,
  Database,
  ClipboardList,
  Code2,
  Rocket,
  Phone,
  Mail,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const SiteVitrinePage = () => {
  useScrollToTop();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const otherServicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isProcessInView = useInView(processRef, {
    once: true,
    margin: "-100px",
  });
  const isOtherServicesInView = useInView(otherServicesRef, {
    once: true,
    margin: "-100px",
  });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

  const [selectedPlan, setSelectedPlan] = useState("Standard");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Landing Page",
      description:
        "Site en une seule page, parfait pour un portfolio ou la présentation d'une entreprise",
      features: [
        "Design moderne",
        "Responsive",
        "Formulaire de contact",
        "Optimisation SEO",
        "Hébergement inclus",
      ],
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      bgColor: "bg-blue-50",
      price: "150 000",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Site Vitrine",
      description:
        "Site en plusieurs pages pour une organisation (Services, Valeurs, Réalisations, Blog...)",
      features: [
        "5-8 pages",
        "Système de blog",
        "Galerie photos",
        "Multi-langues",
        "Analytics inclus",
      ],
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      bgColor: "bg-blue-20",
      price: "250 000",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Site E-commerce",
      description: "Site permettant d'acheter un bien ou un service en ligne",
      features: [
        "Catalogue produits",
        "Panier & paiement",
        "Gestion commandes",
        "Suivi livraisons",
        "Tableau de bord",
      ],
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      bgColor: "bg-blue-20",
      price: "400 000",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyse & Devis",
      description:
        "Nous analysons vos besoins et vous proposons une solution adaptée",
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      step: "2",
      title: "Design & Maquette",
      description: "Création des maquettes et validation du design avec vous",
      icon: <Palette className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      step: "3",
      title: "Développement",
      description: "Intégration et développement de votre site web",
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      step: "4",
      title: "Livraison & Formation",
      description: "Mise en ligne et formation pour gérer votre site",
      icon: <Rocket className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const testimonials = [
    {
      name: "Fatou Sow",
      business: "Boutique Mode",
      text: "Notre site e-commerce nous a permis de doubler nos ventes en 3 mois. L'équipe a été très professionnelle.",
      rating: 5,
      avatar: "👩🏾‍💼",
    },
    {
      name: "Mamadou Ba",
      business: "Restaurant",
      text: "Le site vitrine présente parfaitement notre restaurant. Nous recevons plus de réservations depuis le lancement.",
      rating: 5,
      avatar: "👨🏿‍🍳",
    },
    {
      name: "Awa Diallo",
      business: "Salon de Beauté",
      text: "Site magnifique et facile à gérer. Les clients trouvent facilement nos services et tarifs.",
      rating: 5,
      avatar: "👩🏾‍💄",
    },
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Code Optimisé",
      desc: "Technologies modernes",
    },
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "SEO Intégré",
      desc: "Référencement naturel",
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Design Sur Mesure",
      desc: "Unique à votre marque",
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Sécurisé",
      desc: "Protection avancée",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
      >
        {/* Animations de fond */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
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
              Créons Votre <span className="text-white">Site Web</span>
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
              <strong className="text-white">modernes et responsive</strong>,
              <strong className="text-white">
                {" "}
                faire grandir votre business
              </strong>
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
                    className="text-blue-400"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white text-center">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-300 text-center">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
              Nos Solutions Web
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Du site vitrine au e-commerce, nous créons la solution parfaite
              pour votre business
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 'bg-blue-400'} rounded-full opacity-0 group-hover:opacity-30`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br ${service.bgColor} backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full cursor-pointer`}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-sm`}
                  />

                  {/* Top Accent Line */}
                  <motion.div
                    className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                    initial={{ scaleX: 0 }}
                    animate={isServicesInView ? { scaleX: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col text-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                      }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Underline animation */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full mx-auto mb-4`}
                      initial={{ width: 0 }}
                      animate={isServicesInView ? { width: "4rem" } : {}}
                      transition={{
                        delay: index * 0.15 + 0.6,
                        duration: 0.8,
                      }}
                    />

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 mb-4 text-sm lg:text-base leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-sm text-gray-500">À partir de</span>
                      <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                        {service.price} FCFA
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8 text-left flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: index * 0.15 + featureIndex * 0.1 + 0.5,
                            duration: 0.4,
                          }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 group/item cursor-default"
                        >
                          <motion.div
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-sm`}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-white rounded-full"
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: featureIndex * 0.3,
                              }}
                            />
                          </motion.div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors text-sm lg:text-base">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Notre Processus
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              4 étapes simples pour transformer votre idée en site web
              professionnel
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

                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {step.description}
                </p>

                {/* Ligne de connexion */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-8 lg:top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -z-10"
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

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Nos Clients Témoignent
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez pourquoi ils nous font confiance
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
                className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl lg:text-6xl mb-4">
                    {testimonial.avatar}
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 italic text-center text-sm lg:text-base">
                  "{testimonial.text}"
                </p>

                <div className="text-center">
                  <h4 className="font-bold text-gray-800 text-base lg:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 text-sm lg:text-base">
                    {testimonial.business}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Autres Services */}
      <section ref={otherServicesRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isOtherServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
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

                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  Agent IA
                </h3>

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
              className="relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer group bg-blue-50 border border-white/50 shadow-xl hover:shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Database className="w-6 h-6 lg:w-8 lg:h-8" />
                </motion.div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  Applications
                </h3>

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Prêt à{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Lancer
              </span>{" "}
              Votre Projet ?
            </h2>

            <motion.p
              className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Contactez-nous dès aujourd'hui pour un devis gratuit et
              personnalisé
            </motion.p>

            {/* <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-base lg:text-lg font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center justify-center"
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
                📞 Nous Appeler
              </motion.button>
            </motion.div> */}

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

      <Footer />
    </div>
  );
};

export default SiteVitrinePage;
