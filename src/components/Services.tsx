import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Agent IA & Automatisation",
      description:
        "Un assistant intelligent qui répond à vos clients, prend les commandes et gère votre business pendant que vous vous reposez. Tout se passe sur WhatsApp.",
      icon: "🤖",
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      bgGradient: "from-blue-50 to-indigo-50",
      features: [
        "Réceptionniste virtuelle 24h/24",
        "Prospection automatique de clients",
        "Commandes vocales WhatsApp",
        "Envoi automatique d'emails",
        "Programmation de rendez-vous",
      ],
      color: "blue",
      accentColor: "bg-blue-500",
      link: '/automatisation',
    },
    {
      id: 2,
      title: "Solutions Web Professionnelles",
      description:
        "Des sites web modernes et responsive pour faire grandir votre business. Du simple site vitrine au e-commerce complet, nous créons la solution parfaite.",
      icon: "🌐",
      gradient: "from-emerald-500 via-emerald-600 to-teal-700",
      bgGradient: "from-emerald-50 to-teal-50",
      features: [
        "Sites vitrines & e-commerce", 
        "SEO intégré & référencement naturel", 
        "Design responsive sur mesure",
        "Sécurisé avec protection avancée"
      ],
      color: "emerald",
      accentColor: "bg-emerald-500",
      link: '/site-web',
    },
    {
      id: 3,
      title: "Applications",
      description:
        "Des applications sur mesure pour tous vos besoins : web, mobile ou desktop. Solutions complètes adaptées à votre activité et vos utilisateurs.",
      icon: "💻",
      gradient: "from-purple-500 via-purple-600 to-violet-700",
      bgGradient: "from-purple-50 to-violet-50",
      features: [
        "Applications Web progressives (PWA)",
        "Applications Mobile (iOS/Android)",
        "Applications Desktop (Windows/Mac/Linux)",
        "Interfaces utilisateur modernes",
        "Synchronisation multi-plateforme"
      ],
      color: "purple",
      accentColor: "bg-purple-500",
      link: '/applications',
    }
  ];

  const stats = [
    {
      icon: "⚡",
      number: "95%",
      label: "Performance",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎯",
      number: "100%",
      label: "Satisfaction",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "⏱️",
      number: "24h",
      label: "Support",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: "🚀",
      number: "50+",
      label: "Projets",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/3 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Nos Services
          </motion.h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Solutions technologiques complètes pour transformer votre entreprise
            et
            <span className="text-blue-600 font-semibold">
              {" "}
              accélérer votre croissance digitale
            </span>
          </p>
        </motion.div>

        {/* Services Grid - 3 services en ligne */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80,
                }}
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
                      className={`absolute w-2 h-2 ${service.accentColor} rounded-full opacity-0 group-hover:opacity-30`}
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
                  className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full`}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-sm`}
                  />

                  {/* Top Accent Line */}
                  <motion.div
                    className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="text-4xl p-3 bg-white/80 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
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

                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold text-gray-800 mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.15 + 0.3 }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "4rem" } : {}}
                          transition={{
                            delay: index * 0.15 + 0.6,
                            duration: 0.8,
                          }}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 leading-relaxed mb-6 flex-grow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link to={service.link} className="block mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.8 }}
                      >
                        <span className="relative z-10">Découvrir ce service</span>
                        <motion.div
                          className="absolute inset-0 bg-white/15"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deuxième ligne - 2 services centrés */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: (index + 3) * 0.15,
                  type: "spring",
                  stiffness: 80,
                }}
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
                      className={`absolute w-2 h-2 ${service.accentColor} rounded-full opacity-0 group-hover:opacity-30`}
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
                  className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full`}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-sm`}
                  />

                  {/* Top Accent Line */}
                  <motion.div
                    className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: (index + 3) * 0.15 + 0.5, duration: 0.8 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="text-4xl p-3 bg-white/80 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
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

                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold text-gray-800 mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index + 3) * 0.15 + 0.3 }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "4rem" } : {}}
                          transition={{
                            delay: (index + 3) * 0.15 + 0.6,
                            duration: 0.8,
                          }}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 leading-relaxed mb-6 flex-grow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: (index + 3) * 0.15 + 0.4 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: (index + 3) * 0.15 + featureIndex * 0.1 + 0.5,
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
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-800 transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link to={service.link} className="block mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: (index + 3) * 0.15 + 0.8 }}
                      >
                        <span className="relative z-10">Découvrir ce service</span>
                        <motion.div
                          className="absolute inset-0 bg-white/15"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 mb-16 overflow-hidden relative"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-blue-200/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          <motion.h3
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            Pourquoi choisir
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              DevFlow
            </span>{" "}
            ?
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="text-center group cursor-pointer relative"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                />

                <motion.div
                  className="text-4xl mb-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md mx-auto w-fit relative z-10 group-hover:shadow-lg transition-shadow duration-300"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    },
                    hover: { duration: 0.4 },
                  }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 1 + index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.number}
                </motion.div>

                <motion.div
                  className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 + 0.4 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center relative"
        >
          {/* Floating elements around CTA */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white text-lg font-bold rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 z-10"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="relative z-10 flex items-center gap-4">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                💡
              </motion.span>

              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                Discuter de votre projet
              </motion.span>

              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>

            {/* Multiple animated backgrounds */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1 }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          <motion.p
            className="text-gray-600 mt-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.span
              className="inline-block mx-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              ✅ Consultation gratuite
            </motion.span>
            <motion.span
              className="inline-block mx-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ✅ Devis sous 24h
            </motion.span>
            <motion.span
              className="inline-block mx-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✅ Support inclus
            </motion.span>
          </motion.p>
        </motion.div>
    </section>
  );
};

export default Services;