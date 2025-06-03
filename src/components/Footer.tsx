import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MailCheck, MapPin, Music2, Phone, PhoneCall, Twitter } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);


  const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  
  // Validation côté client
  if (!newsletterEmail || !newsletterEmail.includes('@')) {
    setNewsletterStatus('error');
    console.warn('⚠️ Email newsletter invalide');
    return;
  }

  setIsSubmittingNewsletter(true);
  
  try {
    console.log('📧 Abonnement newsletter...', newsletterEmail);
    
    const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/newsletter/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email: newsletterEmail }),
    });

    const data = await response.json();
    console.log('📥 Réponse newsletter:', data);

    if (response.ok && data.success) {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      
      console.log('✅ Abonnement newsletter réussi');
      
      // Analytics/tracking optionnel
      if (window.gtag) {
        window.gtag('event', 'newsletter_signup', {
          event_category: 'Newsletter',
          event_label: 'Footer Signup'
        });
      }
    } else {
      // Gestion des erreurs spécifiques
      if (response.status === 409) {
        // Email déjà abonné
        setNewsletterStatus('already_subscribed');
        console.log('ℹ️ Email déjà abonné');
      } else {
        setNewsletterStatus('error');
        console.error('❌ Erreur newsletter:', data.message);
      }
    }
  } catch (error) {
    setNewsletterStatus('error');
    console.error('❌ Erreur réseau newsletter:', error);
  } finally {
    setIsSubmittingNewsletter(false);
    
    // Auto-clear du status après 5 secondes
    setTimeout(() => {
      setNewsletterStatus(null);
    }, 5000);
  }
};

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Navigation",
      items: [
        { label: "Accueil", action: () => scrollToSection("accueil") },
        { label: "Services", action: () => scrollToSection("services") },
        { label: "Projets", action: () => scrollToSection("projets") },
        { label: "Équipe", action: () => scrollToSection("equipe") },
        { label: "Contact", action: () => scrollToSection("contact") },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Automatisation", href: "#" },
        { label: "Développement Web", href: "#" },
        { label: "Applications Mobile", href: "#" },
        { label: "E-commerce", href: "#" },
      ],
    },
    // {
    //   title: 'Technologies',
    //   items: [
    //     { label: 'React & Next.js', href: '#' },
    //     { label: 'Node.js & Express', href: '#' },
    //     { label: 'Vue.js & Nuxt', href: '#' },
    //     { label: 'Python & Django', href: '#' },
    //     { label: 'Cloud & DevOps', href: '#' }
    //   ]
    // },
    {
      title: "Ressources",
      items: [
        { label: "Blog Tech", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Support", href: "/support" },
      ],
    },
  ];

 

const socialLinks = [
  {
    icon: <Facebook className="w-5 h-5 text-blue-600" />,
    label: "Facebook",
    href: "#",
    gradient: "bg-white",
    hoverColor: "hover:shadow-gray-500/30",
  },
  {
    icon: <Instagram className="w-5 h-5 text-pink-500" />,
    label: "Instagram",
    href: "#",
    gradient: "bg-white",
    hoverColor: "hover:shadow-pink-500/30",
  },
  {
    icon: <Music2 className="w-5 h-5 text-black" />,
    label: "TikTok",
    href: "#",
    gradient: "bg-white",
    hoverColor: "hover:shadow-neutral-500/30",
  },
  {
    icon: <Twitter className="w-5 h-5 text-sky-500" />,
    label: "Twitter",
    href: "#",
    gradient: "bg-white",
    hoverColor: "hover:shadow-sky-500/30",
  },
  {
    icon: <Phone className="w-5 h-5 text-green-500" />,
    label: "WhatsApp",
    href: "#",
    gradient: "bg-white",
    hoverColor: "hover:shadow-green-500/30",
  },
  {
    icon: <Linkedin className="w-5 h-5 text-blue-700" />,
    label: "LinkedIn",
    href: "#",
    gradient: "bg-white",
    hoverColor: "hover:shadow-blue-500/30",
  },
  {
    icon: <Mail className="w-5 h-5 text-red-500" />,
    label: "Email",
    href: "mailto:souleymanefall176@gmail.com",
    gradient: "bg-white",
    hoverColor: "hover:shadow-purple-500/30",
  },
];


  // const stats = [
  //   { number: "150+", label: "Projets réalisés", icon: "🚀" },
  //   { number: "3+", label: "Années d'expérience", icon: "⏰" },
  //   { number: "100%", label: "Clients satisfaits", icon: "🎯" },
  //   { number: "24/7", label: "Support disponible", icon: "💬" },
  // ];

  return (
    <footer className="relative bg-slate-950 overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234F46E5\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-b border-slate-800/50 py-16"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    className="text-4xl mb-2"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-6 cursor-pointer"
                onClick={scrollToTop}
              >
                DevFlow
              </motion.h3>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Votre partenaire de confiance pour la transformation digitale.
                Nous automatisons, créons et innovons pour propulser votre
                entreprise vers l'excellence technologique.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-xl text-white shadow-lg transition-all duration-300 ${social.hoverColor}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>HLM Fass, Dakar, Sénégal</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-blue-500" />
                  <span>+221 77 715 10 61</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailCheck className="w-5 h-5 text-blue-500" />
                  <span>souleymanefall176@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + sectionIndex * 0.1 }}
                className="lg:col-span-1"
              >
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-blue-400"
                  >
                    ✦
                  </motion.span>
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.6 + sectionIndex * 0.1 + itemIndex * 0.05,
                      }}
                    >
                      {item.action ? (
                        <motion.button
                          onClick={item.action}
                          whileHover={{ x: 5, color: "#60A5FA" }}
                          className="text-gray-400 hover:text-blue-400 transition-all duration-200 text-left"
                        >
                          {item.label}
                        </motion.button>
                      ) : (
                        <Link to={item.href}>
                          <motion.div
                            whileHover={{ x: 5, color: "#60A5FA" }}
                            className="text-gray-400 hover:text-blue-400 transition-all duration-200 text-left block cursor-pointer"
                          >
                            {item.label}
                          </motion.div>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-slate-800/50 py-12"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h4
                className="text-2xl font-bold text-white mb-4"
                whileHover={{ scale: 1.02 }}
              >
                🚀 Restez à la pointe de l'innovation
              </motion.h4>
              <p className="text-gray-400 mb-8">
                Recevez nos dernières actualités, tips techniques et offres
                exclusives
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type="email"
    value={newsletterEmail}
    onChange={(e) => setNewsletterEmail(e.target.value)}
    placeholder="votre@email.com"
    required
    disabled={isSubmittingNewsletter}
    className={`flex-1 px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-600/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
      isSubmittingNewsletter ? 'opacity-70 cursor-not-allowed' : ''
    }`}
  />
  <motion.button
    type="submit"
    disabled={isSubmittingNewsletter || !newsletterEmail}
    whileHover={{
      scale: (!isSubmittingNewsletter && newsletterEmail) ? 1.05 : 1,
      boxShadow: (!isSubmittingNewsletter && newsletterEmail) ? "0 10px 25px rgba(59, 130, 246, 0.3)" : "none",
    }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 ${
      isSubmittingNewsletter || !newsletterEmail 
        ? 'opacity-70 cursor-not-allowed' 
        : 'hover:shadow-lg'
    }`}
  >
    {isSubmittingNewsletter ? (
      <span className="flex items-center gap-2">
        <motion.div
          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        Abonnement...
      </span>
    ) : (
      'S\'abonner'
    )}
  </motion.button>
</form>
{newsletterStatus === 'success' && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
  >
    <span className="text-green-400 flex items-center justify-center gap-2">
      ✅ <span>Abonnement réussi ! Vérifiez votre email de confirmation.</span>
    </span>
  </motion.div>
)}

{newsletterStatus === 'already_subscribed' && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg"
  >
    <span className="text-yellow-400 flex items-center justify-center gap-2">
      ℹ️ <span>Cet email est déjà abonné à notre newsletter.</span>
    </span>
  </motion.div>
)}

{newsletterStatus === 'error' && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
  >
    <span className="text-red-400 flex items-center justify-center gap-2">
      ❌ <span>Erreur lors de l'abonnement. Veuillez réessayer.</span>
    </span>
  </motion.div>
)}
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="border-t border-slate-800/50 py-8"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
                <span>
                  © {new Date().getFullYear()} DevFlow – Tous droits réservés
                </span>
                <div className="flex gap-4 text-sm">
                  <motion.div
                    whileHover={{ color: "#60A5FA" }}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <Link to="/mentions-legales">Mentions légales</Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ color: "#60A5FA" }}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <Link to="/confidentialite">Confidentialité</Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ color: "#60A5FA" }}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <Link to="/cgv">CGV</Link>
                  </motion.div>
                </div>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="relative z-10 text-xl"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↑
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl opacity-20"
          >
            💻
          </motion.div>
        </div>

        <div className="absolute bottom-32 left-20 pointer-events-none">
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="text-3xl opacity-20"
          >
            🚀
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="text-6xl"
          >
            ⚡
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
