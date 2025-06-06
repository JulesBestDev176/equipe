import { motion, useInView, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { useContactForm } from "../hooks/useContactForm";
import FallbackContact from "../components/FallbackContact";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Twitter,
} from "lucide-react";

// Ajout de la déclaration pour window.gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Utiliser le hook personnalisé pour la gestion du formulaire
  const {
    formData,
    formState: { isSubmitting, submitStatus, errors, showFallback },
    handleChange,
    submitForm,
    closeFallback,
  } = useContactForm();

  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Declare motion values for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Mouse move handler for interactive effects (disabled on mobile)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) return; // Disable on mobile

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (e.clientX - centerX) / 50;
    const y = (e.clientY - centerY) / 50;

    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    rotateX.set(-y);
    rotateY.set(x);
  };

  const budgetOptions = [
    { value: "2k-5k", label: "2k - 5k €" },
    { value: "5k-10k", label: "5k - 10k €" },
    { value: "10k-25k", label: "10k - 25k €" },
    { value: "25k-50k", label: "25k - 50k €" },
    { value: "50k+", label: "50k+ €" },
  ];

  const timelineOptions = [
    { value: "asap", label: "Dès que possible" },
    { value: "1month", label: "1 mois" },
    { value: "2-3months", label: "2-3 mois" },
    { value: "3-6months", label: "3-6 mois" },
    { value: "6months+", label: "6+ mois" },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Localisation",
      value: "HLM Fass, Dakar, Sénégal",
      subValue: "Afrique de l'Ouest",
      gradient: "from-blue-600 to-cyan-600",
      action: "Voir sur la carte",
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Téléphone",
      value: "+221 77 715 10 61",
      subValue: "Disponible 9h-18h WAT",
      gradient: "from-blue-600 to-cyan-600",
      action: "Appeler maintenant",
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email",
      value: "souleymanefall176@gmail.com",
      subValue: "Réponse sous 2h",
      gradient: "from-blue-600 to-cyan-600",
      action: "Envoyer un email",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "WhatsApp",
      value: "+221 77 715 10 61",
      subValue: "Chat en temps réel",
      gradient: "from-green-600 to-emerald-600",
      action: "Ouvrir WhatsApp",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-100/30 to-cyan-100/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Interactive cursor glow - hidden on mobile */}
        <motion.div
          className="absolute pointer-events-none w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full filter blur-3xl hidden md:block"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234F46E5\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight"
            style={{ rotateX, rotateY }}
            whileHover={{ scale: 1.02 }}
          >
            Créons Ensemble
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transformons votre vision en réalité digitale avec
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text font-semibold">
              {" "}
              l'innovation comme moteur
            </span>
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-500 text-xs sm:text-sm px-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Réponse garantie sous 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">🏆</span>
              <span>150+ projets réussis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">⭐</span>
              <span>100% satisfaction client</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
              {/* Enhanced form glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-cyan-50/50 rounded-2xl sm:rounded-3xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10 space-y-4 sm:space-y-6">
                <motion.div
                  className="text-center mb-6 sm:mb-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2 sm:gap-3">
                    {/* <motion.span
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xl sm:text-2xl"
                    >
                      🚀
                    </motion.span> */}
                    <span className="leading-tight">
                      Démarrons votre projet
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Partagez votre vision, nous la réalisons
                  </p>
                </motion.div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                        errors.name
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      }`}
                      placeholder="Votre nom complet *"
                    />
                    {focusedField === "name" && !errors.name && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                      />
                    )}
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1"
                      >
                        <span>⚠️</span> {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                        errors.company
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      }`}
                      placeholder="Votre entreprise"
                    />
                    {focusedField === "company" && !errors.company && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                      />
                    )}
                    {errors.company && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1"
                      >
                        <span>⚠️</span> {errors.company}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      }`}
                      placeholder="votre@email.com *"
                    />
                    {focusedField === "email" && !errors.email && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                      />
                    )}
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1"
                      >
                        <span>⚠️</span> {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      }`}
                      placeholder="Votre téléphone"
                    />
                    {focusedField === "phone" && !errors.phone && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                      />
                    )}
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1"
                      >
                        <span>⚠️</span> {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="" className="bg-white">
                      Budget estimé
                    </option>
                    {budgetOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </motion.select>

                  <motion.select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="" className="bg-white">
                      Délai souhaité
                    </option>
                    {timelineOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </motion.select>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base ${
                      errors.message
                        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    }`}
                    placeholder="Décrivez votre projet en détail (objectifs, fonctionnalités, cible...) *"
                    required
                    rows={5}
                  />
                  {focusedField === "message" && !errors.message && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                    />
                  )}
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1"
                    >
                      <span>⚠️</span> {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Enhanced Submit Button */}
                <motion.button
                  onClick={submitForm}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg overflow-hidden disabled:opacity-70 shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        {/* <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          🚀
                        </motion.span> */}
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-center p-3 sm:p-4 bg-emerald-50 border border-emerald-200 rounded-xl sm:rounded-2xl"
                  >
                    <span className="text-emerald-600 font-medium text-sm sm:text-base">
                      ✅ Message envoyé avec succès ! Nous vous répondrons sous
                      2h.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && !showFallback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-center p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl"
                  >
                    <span className="text-red-600 font-medium text-sm sm:text-base">
                      ❌{" "}
                      {errors.general ||
                        "Erreur lors de l'envoi. Veuillez réessayer."}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <motion.div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${info.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-2xl`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        {info.icon}
                      </motion.div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-medium text-xs sm:text-sm break-all">
                          {info.value}
                        </p>
                        <p className="text-gray-500 text-xs">{info.subValue}</p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${info.gradient} text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block`}
                    >
                      {info.action}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Social Links */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                {/* <span>🌟</span> */}
                Suivez-nous
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  {
                    icon: <Facebook className="w-5 h-5 text-blue-600" />,
                    label: "Facebook",
                    handle: "@devflow",
                  },
                  {
                    icon: <Instagram className="w-5 h-5 text-pink-500" />,
                    label: "Instagram",
                    handle: "@devflow",
                  },
                  {
                    icon: <Music2 className="w-5 h-5 text-black" />,
                    label: "TikTok",
                    handle: "@devflow",
                  },
                  {
                    icon: <Twitter className="w-5 h-5 text-sky-500" />,
                    label: "Twitter",
                    handle: "@devflow",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg sm:rounded-xl text-gray-800 shadow"
                  >
                    {social.icon}
                    <div>
                      <div className="font-semibold text-sm">
                        {social.label}
                      </div>
                      <div className="text-xs opacity-70">{social.handle}</div>
                    </div>
                  </motion.a>
                ))}

                {/* LinkedIn en pleine largeur */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="col-span-1 sm:col-span-2 flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg sm:rounded-xl text-gray-800 shadow"
                >
                  <Linkedin className="w-5 h-5 text-blue-700" />
                  <div>
                    <div className="font-semibold text-sm">LinkedIn</div>
                    <div className="text-xs opacity-70">@devflow</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Enhanced Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                {/* <span>⚡</span> */}
                Nos engagements
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    label: "Première réponse",
                    value: "< 2h",
                    color: "text-blue-600",
                    icon: "💬",
                  },
                  {
                    label: "Devis personnalisé",
                    value: "< 24h",
                    color: "text-blue-600",
                    icon: "📊",
                  },
                  {
                    label: "Démarrage projet",
                    value: "< 1 semaine",
                    color: "text-blue-600",
                    icon: "🚀",
                  },
                  {
                    label: "Support technique",
                    value: "24/7",
                    color: "text-blue-600",
                    icon: "🛠️",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg"
                    whileHover={{ backgroundColor: "rgb(243 244 246)" }}
                  >
                    <span className="text-gray-700 flex items-center gap-2 text-xs sm:text-sm">
                      {/* <span className="text-sm sm:text-base">{stat.icon}</span> */}
                      {stat.label}
                    </span>
                    <span
                      className={`font-bold text-xs sm:text-sm ${stat.color}`}
                    >
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="lg:hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                Prêt à commencer ?
              </h4>
              <p className="text-sm sm:text-base mb-4 opacity-90">
                Remplissez le formulaire ci-dessus ou contactez-nous directement
                !
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <motion.a
                  href="tel:+221777151061"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg py-2 px-4 text-sm font-medium"
                >
                  📞 Appeler maintenant
                </motion.a>
                <motion.a
                  href="https://wa.me/221777151061"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg py-2 px-4 text-sm font-medium"
                >
                  💬 WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center lg:hidden"
        >
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Basé à Dakar, Sénégal
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Nous servons des clients dans toute l'Afrique de l'Ouest et
              au-delà
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span className="bg-white px-3 py-1 rounded-full">
                🌍 International
              </span>
              <span className="bg-white px-3 py-1 rounded-full">🇸🇳 Local</span>
              <span className="bg-white px-3 py-1 rounded-full">
                💬 Français/English
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Composant de fallback */}
      <FallbackContact
        formData={formData}
        onClose={closeFallback}
        show={showFallback}
      />
    </section>
  );
};

export default Contact;
