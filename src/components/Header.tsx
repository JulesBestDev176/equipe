import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Hook pour le scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Detection de la section active seulement sur la page d'accueil
      if (location.pathname === "/") {
        const sections = ["accueil", "services", "equipe", "projets", "contact"];
        const scrollPosition = scrollY + 150;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection("");
      }
    };

    handleScroll(); // Appel initial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    // Si on est déjà sur la page d'accueil
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Si on est sur une autre page, rediriger vers l'accueil avec le hash
      navigate(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  // Gérer la navigation avec hash au chargement de la page
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.slice(1); // Enlever le #
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }, 100); // Petit délai pour s'assurer que la page est chargée
    }
  }, [location]);

  const navItems = [
    { id: "accueil", label: "Accueil", icon: "🏠" },
    { id: "services", label: "Services", icon: "⚡" },
    { id: "projets", label: "Projets", icon: "🚀" },
    { id: "equipe", label: "Équipe", icon: "👥" },
    { id: "contact", label: "Contact", icon: "📞" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo avec effet */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <h1
                  className={`relative text-2xl md:text-3xl font-black transition-all duration-300 ${
                    isScrolled
                      ? "text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"
                      : "text-white"
                  }`}
                >
                  DevFlow
                </h1>
              </div>
            </motion.div>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.id && location.pathname === "/"
                      ? isScrolled
                        ? "text-blue-600 bg-blue-50"
                        : "text-cyan-400 bg-white/10"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background glow pour section active */}
                  {activeSection === item.id && location.pathname === "/" && (
                    <motion.div
                      layoutId="activeBackground"
                      className={`absolute inset-0 rounded-xl ${
                        isScrolled
                          ? "bg-gradient-to-r from-blue-600/10 to-cyan-600/10"
                          : "bg-gradient-to-r from-white/20 to-cyan-400/20"
                      }`}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative flex items-center gap-2">
                    {item.label}
                  </span>

                  {/* Indicateur actif */}
                  {activeSection === item.id && location.pathname === "/" && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                        isScrolled ? "bg-blue-600" : "bg-cyan-400"
                      }`}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button avec effet */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="hidden lg:block relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl">
                Démarrer un projet
              </div>
            </motion.button>

            {/* Mobile menu button avec animation */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-gray-100 backdrop-blur-sm border border-gray-200"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white"
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 2 : -2,
                  }}
                />
                <motion.span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white"
                  }`}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scale: isMobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white"
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -2 : 2,
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Barre de progression améliorée */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 to-gray-200"
          style={{
            opacity: isScrolled ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shadow-lg"
            style={{
              scaleX,
              transformOrigin: "0%",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
            }}
          />
        </motion.div>
      </motion.header>

      {/* Mobile Menu avec animations fluides */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                          activeSection === item.id && location.pathname === "/"
                            ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 border border-blue-200"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                        {activeSection === item.id && location.pathname === "/" && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 rounded-full bg-blue-400"
                          />
                        )}
                      </motion.button>
                    ))}

                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => scrollToSection("contact")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-6 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg"
                    >
                      🚀 Démarrer un projet
                    </motion.button>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;