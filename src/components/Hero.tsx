import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    {
      main: "Automatisons",
      sub: "votre business",
      icon: "🤖",
      color: "from-blue-400 to-indigo-500",
    },
    {
      main: "Créons",
      sub: "vos outils digitaux",
      icon: "🛠️",
      color: "from-indigo-400 to-purple-500",
    },
    {
      main: "Développons",
      sub: "votre succès",
      icon: "🚀",
      color: "from-purple-400 to-pink-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center relative overflow-hidden pt-24"
      // ☝️ Ajout de pt-20 pour compenser la hauteur du header fixe
    >
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

        {/* Particules flottantes avec couleurs coordonnées */}
        {[...Array(12)].map((_, i) => (
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

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo principal avec animation */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-4"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 40px rgba(99, 102, 241, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            DevFlow
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 font-medium"
          >
            🇸🇳 Innovation Sénégalaise • Solutions Mondiales
          </motion.p>
        </motion.div> */}

        {/* Texte rotatif avec icônes */}
        <div className="h-40 flex flex-col items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 30, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: 90 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-center"
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {texts[currentText].icon}
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
                {texts[currentText].main}
              </h2>
              <p
                className={`text-2xl md:text-3xl font-light bg-gradient-to-r ${texts[currentText].color} bg-clip-text text-transparent`}
              >
                {texts[currentText].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Équipe de développeurs passionnés en création de
          <span className="text-indigo-400 font-semibold"> sites web</span> et
          <span className="text-purple-400 font-semibold"> applications</span>,
          avec des agents IA capables d’agir depuis
          <span className="text-green-400 font-semibold"> WhatsApp</span> : envoyer des mails, fixer des rendez-vous, et plus encore.
        </motion.p>

        {/* Boutons CTA avec couleurs harmonieuses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🎯
              </motion.span>
              Démarrer un projet
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group"
          >
            <span className="flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              Découvrir nos services
            </span>
          </motion.button>
        </motion.div>

        {/* Stats avec couleurs coordonnées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24"
        >
          {[
            {
              icon: "📊",
              number: "100+",
              label: "Projets réalisés",
              color: "text-blue-400",
            },
            {
              icon: "⏱️",
              number: "3+",
              label: "Années d'expérience",
              color: "text-indigo-400",
            },
            {
              icon: "😊",
              number: "100%",
              label: "Clients satisfaits",
              color: "text-purple-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.2 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {stat.icon}
              </motion.div>
              <div
                className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}
              >
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 text-center cursor-pointer mt-3"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="text-sm mb-2 flex items-center gap-2">
              <span>Découvrir</span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </div>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
