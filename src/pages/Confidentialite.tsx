import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Confidentialite = () => {
  useScrollToTop();
  const sections = [
    {
      title: "1. Collecte des données personnelles",
      content: [
        "Nous collectons vos données personnelles uniquement lorsque vous nous les fournissez volontairement via nos formulaires de contact, demandes de devis, ou lors de la création d'un compte client.",
        "Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, nom de l'entreprise, et toute information que vous choisissez de partager dans vos messages.",
        "Nous ne collectons jamais de données sensibles (origine ethnique, opinions politiques, croyances religieuses, données de santé, etc.) sauf si strictement nécessaire pour nos services et avec votre consentement explicite."
      ]
    },
    {
      title: "2. Utilisation des données",
      content: [
        "Vos données sont utilisées exclusivement pour : répondre à vos demandes, fournir nos services, vous tenir informé de nos actualités (avec votre consentement), améliorer notre site et nos services.",
        "Nous n'utilisons jamais vos données à des fins commerciales non autorisées ou pour du spam.",
        "Nous pouvons analyser les données de navigation (anonymisées) pour améliorer l'expérience utilisateur et optimiser notre site.",
        "En aucun cas nous ne vendons, louons ou échangeons vos données personnelles avec des tiers à des fins commerciales."
      ]
    },
    {
      title: "3. Cookies et technologies similaires",
      content: [
        "Notre site utilise des cookies techniques nécessaires au bon fonctionnement (authentification, préférences).",
        "Nous utilisons des cookies analytiques (Google Analytics) pour comprendre l'utilisation de notre site. Ces données sont anonymisées.",
        "Vous pouvez désactiver les cookies dans votre navigateur, mais cela peut affecter certaines fonctionnalités du site.",
        "Nous respectons le choix 'Do Not Track' de votre navigateur lorsque cette option est activée."
      ]
    },
    {
      title: "4. Partage des données",
      content: [
        "Nous ne partageons vos données qu'avec nos prestataires techniques de confiance (hébergement, emailing) sous contrat de confidentialité.",
        "Nos prestataires sont situés en Union Européenne ou dans des pays reconnus comme offrant un niveau de protection adéquat.",
        "En cas de fusion, acquisition ou vente d'actifs, vos données pourraient être transférées, mais toujours sous les mêmes garanties de protection.",
        "Nous pouvons divulguer vos données si requis par la loi ou pour protéger nos droits légitimes."
      ]
    },
    {
      title: "5. Sécurité des données",
      content: [
        "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'altération, la divulgation ou l'accès non autorisé.",
        "Nos serveurs sont sécurisés et nos communications sont chiffrées (SSL/TLS).",
        "L'accès aux données personnelles est strictement limité aux employés qui en ont besoin pour leur travail.",
        "Nous effectuons des sauvegardes régulières et sécurisées de nos données.",
        "En cas de violation de données, nous nous engageons à vous informer dans les 72 heures conformément au RGPD."
      ]
    },
    {
      title: "6. Vos droits",
      content: [
        "Droit d'accès : vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.",
        "Droit de rectification : vous pouvez demander la correction de données inexactes ou incomplètes.",
        "Droit à l'effacement : vous pouvez demander la suppression de vos données personnelles.",
        "Droit à la portabilité : vous pouvez demander vos données dans un format structuré et lisible.",
        "Droit d'opposition : vous pouvez vous opposer au traitement de vos données pour des motifs légitimes.",
        "Droit de limitation : vous pouvez demander la limitation du traitement dans certaines circonstances.",
        "Pour exercer ces droits, contactez-nous à privacy@devflow.sn avec une preuve d'identité."
      ]
    },
    {
      title: "7. Conservation des données",
      content: [
        "Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées.",
        "Données clients : conservées pendant la durée de la relation commerciale + 3 ans après la fin du contrat.",
        "Données prospects : conservées maximum 3 ans après le dernier contact.",
        "Données de facturation : conservées 10 ans conformément aux obligations légales.",
        "À l'expiration des délais, vos données sont automatiquement supprimées ou anonymisées."
      ]
    },
    {
      title: "8. Transferts internationaux",
      content: [
        "Dans le cadre de nos services, certaines données peuvent être transférées vers des pays hors Union Européenne.",
        "Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types, certification Privacy Shield, décision d'adéquation).",
        "Nous nous assurons que le niveau de protection de vos données reste équivalent à celui offert en Union Européenne.",
        "Vous pouvez obtenir une copie des garanties mises en place en nous contactant."
      ]
    }
  ];

  const cookieTypes = [
    {
      name: "Cookies Techniques",
      description: "Nécessaires au fonctionnement du site",
      required: true,
      examples: ["Session utilisateur", "Préférences de langue", "Panier d'achat"]
    },
    {
      name: "Cookies Analytiques",
      description: "Nous aident à comprendre l'utilisation du site",
      required: false,
      examples: ["Google Analytics", "Statistiques de pages", "Parcours utilisateur"]
    },
    {
      name: "Cookies Fonctionnels",
      description: "Améliorent l'expérience utilisateur",
      required: false,
      examples: ["Chat en ligne", "Intégrations sociales", "Personnalisation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section avec background identique au Hero principal */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center relative overflow-hidden pt-24">
        {/* Background avec effets géométriques */}
        <div className="absolute inset-0">
          {/* Formes animées avec couleurs harmonieuses */}
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl"
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
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
                i % 3 === 0 ? 'bg-green-400/60' : 
                i % 3 === 1 ? 'bg-emerald-400/60' : 'bg-teal-400/60'
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
              🛡️
            </motion.div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent mb-6"
          >
            Politique de Confidentialité
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Nous respectons votre vie privée et nous engageons à protéger vos données personnelles 
            conformément au <span className="text-green-400 font-semibold"> RGPD</span> et aux 
            <span className="text-emerald-400 font-semibold"> lois en vigueur</span>.
          </motion.p>

          {/* Badge RGPD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 backdrop-blur-sm">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ✅
              </motion.div>
              <span className="text-green-300 font-semibold">Conforme RGPD</span>
            </div>
          </motion.div>

          {/* Stats avec couleurs coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24"
          >
            {[
              { icon: "🔒", label: "Données sécurisées", color: "text-green-400" },
              { icon: "👤", label: "Vos droits respectés", color: "text-emerald-400" },
              { icon: "🍪", label: "Cookies transparents", color: "text-teal-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.2 }}
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

      {/* RGPD Badge */}
      <section className="py-8 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 max-w-4xl mx-auto border border-green-200/50"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="text-2xl">🛡️</div>
              <div className="text-center">
                <div className="text-green-700 font-semibold">Conforme RGPD</div>
                <div className="text-green-600 text-sm">
                  Politique mise à jour en conformité avec le Règlement Général sur la Protection des Données
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Notre engagement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                DevFlow s'engage à respecter votre vie privée et à protéger vos données personnelles. 
                Cette politique décrit comment nous collectons, utilisons, stockons et protégeons vos informations 
                lorsque vous utilisez notre site web et nos services.
              </p>
            </motion.div>

            {/* Main Sections */}
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-600 leading-relaxed">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cookie Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                Détail des cookies utilisés
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {cookieTypes.map((cookie, index) => (
                  <motion.div
                    key={cookie.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl border-2 ${
                      cookie.required 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-semibold text-gray-800">{cookie.name}</h3>
                      {cookie.required && (
                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                          Requis
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {cookie.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xs font-medium text-gray-700 mb-2">Exemples :</h4>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Rights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Exercer vos droits ou nous contacter
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Pour exercer vos droits RGPD :
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Email :</strong> 
                      <a href="mailto:privacy@devflow.sn" className="text-blue-600 hover:text-blue-700 ml-1">
                        privacy@devflow.sn
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Courrier :</strong> DevFlow SARL, Service Protection des Données, Dakar, Sénégal
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Délai de réponse :</strong> Maximum 30 jours
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Réclamation :
                  </h4>
                  <p className="text-sm text-gray-600">
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire 
                    une réclamation auprès de la Commission de Protection des Données Personnelles 
                    du Sénégal ou de votre autorité de protection des données locale.
                  </p>
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
                Dernière mise à jour : 15 mars 2024 • Version 2.1
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Nous vous informerons de toute modification substantielle de cette politique
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Confidentialite;