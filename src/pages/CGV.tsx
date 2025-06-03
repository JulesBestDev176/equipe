import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const CGV = () => {
  useScrollToTop();
  const sections = [
    {
      title: "1. Objet et champ d'application",
      content: [
        "Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre DevFlow SARL et ses clients dans le cadre de la vente de services de développement web, d'automatisation et de maintenance.",
        "Toute commande implique l'acceptation pleine et entière des présentes CGV, qui prévalent sur toutes autres conditions générales ou particulières du client.",
        "DevFlow se réserve le droit de modifier ces CGV à tout moment. Les conditions applicables sont celles en vigueur à la date de signature du contrat.",
        "Ces conditions s'appliquent à tous nos services : développement de sites web, applications, e-commerce, automatisation n8n, maintenance et support."
      ]
    },
    {
  title: "2. Services proposés",
  content: [
    "Création de sites web : Présentez votre activité en ligne avec un site clair, moderne et adapté à tous les écrans.",
    "Applications web sur mesure : Gérez facilement votre activité grâce à des outils personnalisés, simples à utiliser et pensés pour vos besoins.",
    "Boutique en ligne : Vendez vos produits sur Internet avec une boutique sécurisée, facile à gérer et accessible à vos clients.",
    "Automatisation intelligente : Simplifiez vos tâches quotidiennes (emails, rendez-vous, messages WhatsApp, etc.) grâce à un agent intelligent qui automatise pour vous.",
    "Maintenance et support : Nous assurons la mise à jour, la sécurité et le bon fonctionnement de votre site ou application.",
    "Conseil et formation : Bénéficiez d'un accompagnement personnalisé pour définir vos besoins numériques et former vos équipes à l'utilisation des outils."
  ]
},
    {
      title: "3. Processus de commande",
      content: [
        "Toute prestation débute par une consultation gratuite pour analyser vos besoins.",
        "Un devis détaillé est établi précisant les spécifications techniques, délais et tarifs.",
        "La commande est confirmée par la signature du devis et le versement de l'acompte (30% du montant total).",
        "Un contrat détaillé est ensuite établi précisant les modalités techniques et juridiques.",
        "Le client dispose de 15 jours pour valider les spécifications avant le début des travaux.",
        "Toute modification en cours de projet fait l'objet d'un avenant tarifé."
      ]
    },
    {
      title: "4. Tarifs et modalités de paiement",
      content: [
        "Paiements acceptés : virement bancaire, PayPal, Stripe, Orange Money, Wave (selon localisation).",
        "Retard de paiement : pénalités de 3% par mois de retard + frais de recouvrement.",
        "Les prix peuvent être révisés annuellement avec un préavis de 2 mois.",
        "Remises possibles : paiement comptant (-5%), clients fidèles, projets volumineux."
      ]
    },
    {
      title: "5. Délais et livraison",
      content: [
        "Les délais sont indicatifs et précisés dans chaque contrat. Ils courent à partir de la réception de l'acompte et de tous les éléments nécessaires.",
        "Site vitrine : 1-2 semaines, E-commerce : 3-4 semaines, Application sur mesure : 8-12 semaines.",
        "Les retards dus au client (validation tardive, fourniture d'éléments) prolongent automatiquement les délais.",
        "DevFlow s'engage à tenir informé le client de l'avancement et de tout risque de retard.",
        "En cas de retard imputable à DevFlow, une pénalité de 1% du montant total par semaine de retard sera appliquée (maximum 10%).",
        "La livraison s'effectue par mise à disposition sur nos serveurs de test puis transfert sur l'hébergement de production."
      ]
    },
    {
      title: "6. Obligations du client",
      content: [
        "Fournir tous les éléments nécessaires (contenus, images, accès, etc.) dans les délais convenus.",
        "Valider les maquettes et spécifications dans les délais impartis (défaut = validation tacite).",
        "Effectuer les paiements aux échéances prévues.",
        "Respecter les droits de propriété intellectuelle dans les contenus fournis.",
        "Communiquer rapidement tout changement d'exigences ou de spécifications.",
        "Assurer la maintenance de ses propres systèmes (serveurs, domaines, emails) si non pris en charge par DevFlow."
      ]
    },
    {
      title: "7. Propriété intellectuelle",
      content: [
        "DevFlow cède au client les droits d'utilisation du code source développé spécifiquement pour son projet.",
        "Les frameworks, bibliothèques et outils tiers restent soumis à leurs licences respectives.",
        "DevFlow conserve les droits sur ses méthodes, savoir-faire et outils développés en interne.",
        "Le client garantit détenir tous les droits sur les contenus fournis (textes, images, logos).",
        "DevFlow se réserve le droit d'utiliser le projet à des fins de référence et de promotion (avec accord du client).",
        "Toute violation de propriété intellectuelle par le client dégage DevFlow de toute responsabilité."
      ]
    },
    {
      title: "8. Garanties et maintenance",
      content: [
        "Garantie légale : correction gratuite des bugs pendant 3 mois après livraison.",
        "Garantie technique : bon fonctionnement selon spécifications pendant 6 mois.",
        "Maintenance corrective : correction des dysfonctionnements (hors évolutions).",
        "Maintenance évolutive : améliorations et nouvelles fonctionnalités (facturées séparément).",
        "Support technique inclus pendant les 3 premiers mois, puis selon contrat de maintenance.",
        "Sauvegardes et sécurité : responsabilité du client sauf contrat de maintenance spécifique.",
        "Mise à jour des technologies : recommandées annuellement pour la sécurité et les performances."
      ]
    },
    {
      title: "9. Responsabilité et limitations",
      content: [
        "DevFlow s'engage à livrer un produit conforme aux spécifications validées par le client.",
        "La responsabilité de DevFlow est limitée au montant du contrat en cours.",
        "DevFlow ne peut être tenu responsable des dommages indirects (perte d'exploitation, manque à gagner).",
        "Les délais de disponibilité des sites web dépendent de l'hébergeur choisi.",
        "DevFlow n'est pas responsable des contenus publiés par le client sur son site.",
        "Force majeure : tout événement imprévisible et insurmontable suspend les obligations contractuelles.",
        "Le client doit signaler tout dysfonctionnement dans les 48h pour bénéficier de la garantie."
      ]
    },
    {
      title: "10. Résiliation",
      content: [
        "Résiliation à l'initiative du client : possible moyennant préavis de 30 jours et paiement des prestations déjà réalisées.",
        "Résiliation pour faute : en cas de non-paiement, manquement grave aux obligations contractuelles.",
        "Résiliation de plein droit : liquidation judiciaire, cessation d'activité d'une des parties.",
        "Conséquences : restitution des éléments fournis, facturation du travail accompli, transfert des codes sources si soldé.",
        "Les licences et accès tiers (hébergement, domaines) restent à la charge du client.",
        "Clause de non-concurrence : DevFlow peut accepter des projets similaires sans restriction."
      ]
    },
    {
      title: "11. Protection des données",
      content: [
        "DevFlow s'engage à respecter le RGPD et les lois sur la protection des données personnelles.",
        "Les données clients sont stockées sur des serveurs sécurisés et ne sont jamais communiquées à des tiers.",
        "Droit d'accès, rectification et suppression : contactez privacy@devflow.sn.",
        "Conservation des données : durée de la relation contractuelle + 3 ans.",
        "Transferts internationaux encadrés par des garanties appropriées.",
        "Notification de violation de données dans les 72h si impact sur les droits du client."
      ]
    },
    {
      title: "12. Dispositions générales",
      content: [
        "Droit applicable : droit sénégalais pour les clients en Afrique, droit français pour les clients en Europe.",
        "Juridiction compétente : tribunaux de Dakar (Sénégal) ou selon la localisation du client.",
        "Médiation : en cas de litige, tentative de résolution amiable obligatoire avant action judiciaire.",
        "Nullité partielle : si une clause est déclarée nulle, les autres restent applicables.",
        "Évolution des CGV : notification par email 30 jours avant entrée en vigueur.",
        "Documents contractuels : devis, contrat, CGV, spécifications techniques (par ordre de priorité)."
      ]
    }
  ];

  const pricingInfo = [
  {
    service: "Site Vitrine",
    startingPrice: "150 000 FCFA",
    timeline: "1-2 semaines",
    includes: [
      "Design adapté à tous les écrans",
      "Site facile à gérer",
      "Référencement basique sur Google",
      "Support pendant 3 mois"
    ]
  },
  {
    service: "E-commerce",
    startingPrice: "350 000 FCFA",
    timeline: "3-5 semaines",
    includes: [
      "Catalogue produits complet",
      "Paiement en ligne sécurisé",
      "Suivi des stocks",
      "Formation à l'utilisation"
    ]
  },
  {
    service: "Application Web",
    startingPrice: "500 000 FCFA",
    timeline: "8-12 semaines",
    includes: [
      "Fonctionnalités sur mesure",
      "Système fiable et sécurisé",
      "Interface simple et moderne",
      "Documentation fournie"
    ]
  },
  {
    service: "Automatisation IA",
    startingPrice: "200 000 FCFA",
    timeline: "1-2 semaines",
    includes: [
      "Tâches automatisées (emails, WhatsApp, etc.)",
      "Connexion à vos outils existants",
      "Formation simple",
      "Suivi et ajustements"
    ]
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
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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
                i % 3 === 0 ? 'bg-blue-400/60' : 
                i % 3 === 1 ? 'bg-indigo-400/60' : 'bg-purple-400/60'
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
              📋
            </motion.div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6"
          >
            Conditions Générales de Vente
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Conditions contractuelles régissant nos services de 
            <span className="text-blue-400 font-semibold"> développement web</span>, 
            <span className="text-indigo-400 font-semibold"> automatisation</span> et 
            <span className="text-purple-400 font-semibold"> maintenance technique</span>.
          </motion.p>

          {/* Stats avec couleurs coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24"
          >
            {[
              { icon: "⚖️", label: "Conformité légale", color: "text-blue-400" },
              { icon: "🤝", label: "Transparence totale", color: "text-indigo-400" },
              { icon: "📝", label: "Dernière mise à jour", color: "text-purple-400" }
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

      {/* Pricing Overview */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Aperçu de nos services et tarifs
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingInfo.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.service}</h3>
                <div className="text-base lg:text-xl  font-bold text-blue-600 mb-2">À partir de {item.startingPrice}</div>
                <div className="text-sm text-gray-500 mb-4">Livraison : {item.timeline}</div>
                
                <ul className="space-y-2">
                  {item.includes.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CGV Content */}
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
                Préambule
              </h2>
              <p className="text-gray-600 leading-relaxed">
                DevFlow SARL, société de développement web et d'automatisation, met à disposition 
                de ses clients des services de haute qualité. Les présentes conditions générales 
                de vente définissent les modalités selon lesquelles DevFlow fournit ses prestations.
              </p>
            </motion.div>

            {/* Main Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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
                        transition={{ delay: index * 0.05 + itemIndex * 0.02 }}
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

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Contact et informations légales
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">DevFlow SARL</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Siège social :</strong> Dakar, Sénégal</p>
                    <p><strong>NINEA :</strong> 123456789</p>
                    <p><strong>Email :</strong> 
                      <a href="mailto:contact@devflow.sn" className="text-blue-600 hover:text-blue-700 ml-1">
                        contact@devflow.sn
                      </a>
                    </p>
                    <p><strong>Téléphone :</strong> 
                      <a href="tel:+221771234567" className="text-blue-600 hover:text-blue-700 ml-1">
                        +221 77 123 45 67
                      </a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Service juridique</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Questions contractuelles :</strong> 
                      <a href="mailto:legal@devflow.sn" className="text-blue-600 hover:text-blue-700 ml-1">
                        legal@devflow.sn
                      </a>
                    </p>
                    <p><strong>Litiges :</strong> Médiation obligatoire avant action</p>
                    <p><strong>Juridiction :</strong> Tribunaux de Dakar</p>
                    <p><strong>Droit applicable :</strong> Droit sénégalais</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Acceptance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Acceptation des conditions</h4>
                  <p className="text-sm text-gray-600">
                    En signant un devis ou contrat avec DevFlow, le client reconnaît avoir pris 
                    connaissance des présentes CGV et les accepte sans réserve. Ces conditions 
                    prévalent sur toutes autres conditions du client.
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
                Version 3.2 • Dernière mise à jour : 15 mars 2024
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Ces conditions peuvent être modifiées avec un préavis de 30 jours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGV;