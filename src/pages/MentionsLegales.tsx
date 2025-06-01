import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const MentionsLegales = () => {
  useScrollToTop();
  const sections = [
    {
      title: "1. Informations légales",
      content: [
        "Raison sociale : DevFlow SARL",
        "Siège social : Dakar, Sénégal",
        "NINEA : 123456789",
        "Téléphone : +221 77 123 45 67",
        "Email : contact@devflow.sn",
        "Directeur de publication : Souleymane Fall"
      ]
    },
    {
      title: "2. Hébergement",
      content: [
        "Site hébergé par : Vercel Inc.",
        "Adresse : 440 N Baywood Ave, San Jose, CA 95128, États-Unis",
        "Infrastructure : Amazon Web Services (AWS)",
        "CDN : Cloudflare Inc."
      ]
    },
    {
      title: "3. Propriété intellectuelle",
      content: [
        "L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur et appartient à DevFlow ou à ses partenaires.",
        "Toute reproduction, distribution, modification ou utilisation du contenu sans autorisation préalable écrite est strictement interdite.",
        "Les marques et logos présents sur le site sont des marques déposées de leurs propriétaires respectifs.",
        "Le code source des projets open source peut être utilisé selon les licences spécifiées dans chaque repository."
      ]
    },
    {
      title: "4. Responsabilité",
      content: [
        "DevFlow s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exhaustivité ou l'exactitude du contenu.",
        "DevFlow ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.",
        "L'utilisateur est seul responsable de l'utilisation qu'il fait des informations présentes sur le site.",
        "DevFlow se réserve le droit de modifier le contenu du site à tout moment sans préavis."
      ]
    },
    {
      title: "5. Liens externes",
      content: [
        "Ce site peut contenir des liens vers des sites externes. DevFlow n'exerce aucun contrôle sur ces sites et n'est pas responsable de leur contenu.",
        "L'inclusion de liens vers des sites tiers ne constitue pas une approbation de leur contenu par DevFlow.",
        "L'utilisateur accède aux sites externes sous sa seule responsabilité.",
        "DevFlow recommande de lire les conditions d'utilisation et politiques de confidentialité des sites visités."
      ]
    },
    {
      title: "6. Cookies et données personnelles",
      content: [
        "Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.",
        "Les données personnelles collectées sont traitées conformément à notre Politique de Confidentialité.",
        "L'utilisateur peut désactiver les cookies dans les paramètres de son navigateur.",
        "Pour plus d'informations, consultez notre page dédiée à la confidentialité."
      ]
    },
    {
      title: "7. Loi applicable",
      content: [
        "Les présentes mentions légales sont régies par le droit sénégalais.",
        "Tout litige relatif à l'utilisation du site sera de la compétence exclusive des tribunaux de Dakar.",
        "En cas de conflit, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.",
        "Les présentes mentions peuvent être modifiées à tout moment. La version en vigueur est celle accessible sur le site."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section avec background identique au Hero principal */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center relative overflow-hidden pt-24">
        {/* Background avec effets géométriques */}
        <div className="absolute inset-0">
          {/* Formes animées avec couleurs harmonieuses */}
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Particules flottantes avec couleurs coordonnées */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-emerald-400/60' : 
                i % 3 === 1 ? 'bg-teal-400/60' : 'bg-cyan-400/60'
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
          {/* Icône principale avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚖️
            </motion.div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent mb-6"
          >
            Mentions Légales
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Informations légales et conditions d'utilisation du site 
            <span className="text-emerald-400 font-semibold"> DevFlow</span> 
            conformément à la réglementation en vigueur.
          </motion.p>

          {/* Stats avec couleurs coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24"
          >
            {[
              { icon: "🏢", label: "DevFlow SARL", color: "text-emerald-400" },
              { icon: "🇸🇳", label: "Dakar, Sénégal", color: "text-teal-400" },
              { icon: "📞", label: "+221 77 123 45 67", color: "text-cyan-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="text-3xl mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className={`text-sm md:text-base ${stat.color} group-hover:text-white transition-colors`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 mb-8"
            >
              <p className="text-gray-600 leading-relaxed">
                Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
                pour la Confiance dans l'Économie Numérique, dite L.C.E.N., nous portons à la connaissance 
                des utilisateurs et visiteurs du site les informations suivantes :
              </p>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        {section.content.length > 1 && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        )}
                        <p className="text-gray-600 leading-relaxed">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Contact
              </h3>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">Par email :</strong>
                  <br />
                  <a href="mailto:legal@devflow.sn" className="text-blue-600 hover:text-blue-700">
                    legal@devflow.sn
                  </a>
                </div>
                <div>
                  <strong className="text-gray-800">Par téléphone :</strong>
                  <br />
                  <a href="tel:+221771234567" className="text-blue-600 hover:text-blue-700">
                    +221 77 123 45 67
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mt-8"
            >
              <p className="text-sm text-gray-500">
                Dernière mise à jour : 15 mars 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegales;