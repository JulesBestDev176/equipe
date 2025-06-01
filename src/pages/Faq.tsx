import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const FAQ = () => {
  useScrollToTop();
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [openItems, setOpenItems] = useState(new Set([1])); // Premier item ouvert par défaut

  const categories = [
    { id: 'general', name: 'Questions générales', icon: '💡' },
    { id: 'services', name: 'Services & Tarifs', icon: '💼' },
    { id: 'process', name: 'Processus de travail', icon: '⚙️' },
    { id: 'technical', name: 'Questions techniques', icon: '🔧' },
    { id: 'support', name: 'Support & Maintenance', icon: '🛠️' }
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: "Qu'est-ce que DevFlow et quels services proposez-vous ?",
        answer: "DevFlow est une agence spécialisée dans le développement web moderne et l'automatisation. Nous proposons la création de sites web, d'applications web, de solutions e-commerce, et l'automatisation de processus métier avec des outils comme n8n. Notre équipe d'experts vous accompagne de la conception à la mise en ligne de vos projets digitaux."
      },
      {
        id: 2,
        question: "Dans quels secteurs d'activité intervenez-vous ?",
        answer: "Nous travaillons avec des entreprises de tous secteurs : e-commerce, santé, finance, éducation, industrie, services, etc. Notre approche modulaire nous permet de nous adapter aux spécificités de chaque domaine d'activité et de proposer des solutions sur mesure."
      },
      {
        id: 3,
        question: "Travaillez-vous avec des startups et des PME ?",
        answer: "Absolument ! Nous accompagnons aussi bien les startups que les PME et les grandes entreprises. Nous avons des solutions adaptées à chaque budget et chaque niveau de maturité digitale. Nous proposons également des formules de paiement flexibles pour les jeunes entreprises."
      },
      {
        id: 4,
        question: "Où êtes-vous situés et travaillez-vous à distance ?",
        answer: "Nous sommes basés à Dakar, Sénégal, mais nous travaillons avec des clients du monde entier. Grâce aux outils de collaboration moderne, nous assurons un suivi de qualité en remote. Nous nous déplaçons également pour les projets importants en Afrique de l'Ouest."
      }
    ],
    services: [
      {
        id: 5,
        question: "Quels sont vos tarifs pour un site web ?",
        answer: "Nos tarifs varient selon la complexité du projet. Un site vitrine simple commence à partir de 500€, un site e-commerce à partir de 1500€, et une application web sur mesure à partir de 3000€. Nous proposons toujours un devis gratuit après analyse de vos besoins spécifiques."
      },
      {
        id: 6,
        question: "Proposez-vous des solutions d'automatisation pour les petites entreprises ?",
        answer: "Oui, nous avons développé des packages d'automatisation spécialement conçus pour les PME. À partir de 300€, nous pouvons automatiser vos processus répétitifs : gestion des leads, facturation, réseaux sociaux, etc. L'automatisation n'est plus réservée aux grandes entreprises !"
      },
      {
        id: 7,
        question: "Incluez-vous l'hébergement et la maintenance ?",
        answer: "Nous proposons des solutions d'hébergement performantes et sécurisées à partir de 15€/mois. Nos contrats de maintenance incluent les mises à jour de sécurité, les sauvegardes automatiques, le monitoring 24/7, et un support technique prioritaire."
      },
      {
        id: 8,
        question: "Acceptez-vous les paiements en plusieurs fois ?",
        answer: "Oui, nous proposons un échelonnement des paiements pour faciliter la réalisation de votre projet. Généralement : 30% à la commande, 40% à mi-parcours, et 30% à la livraison. Pour les gros projets, nous pouvons étudier d'autres modalités de paiement."
      }
    ],
    process: [
      {
        id: 9,
        question: "Comment se déroule un projet de A à Z ?",
        answer: "Notre processus en 6 étapes : 1) Consultation gratuite et analyse de vos besoins, 2) Proposition technique et devis détaillé, 3) Signature du contrat et paiement de l'acompte, 4) Phase de développement avec points réguliers, 5) Tests et validation, 6) Mise en ligne et formation. Chaque étape est documentée et validée avec vous."
      },
      {
        id: 10,
        question: "Combien de temps prend la réalisation d'un projet ?",
        answer: "Les délais dépendent de la complexité : 2-3 semaines pour un site vitrine, 4-6 semaines pour un e-commerce, 8-12 semaines pour une application sur mesure. Nous nous engageons sur des délais précis dès la signature du contrat et fournissons un planning détaillé."
      },
      {
        id: 11,
        question: "Puis-je suivre l'avancement de mon projet ?",
        answer: "Bien sûr ! Nous utilisons des outils de gestion de projet collaboratifs où vous pouvez suivre l'avancement en temps réel. Vous recevez également des rapports hebdomadaires et avez accès à un environnement de développement pour tester les fonctionnalités au fur et à mesure."
      },
      {
        id: 12,
        question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
        answer: "Votre satisfaction est notre priorité. Nous incluons jusqu'à 3 révisions majeures dans nos contrats. Si malgré nos efforts le résultat ne vous convient pas, nous proposons soit un remboursement partiel, soit la reprise du projet selon les termes définis dans notre contrat."
      }
    ],
    technical: [
      {
        id: 13,
        question: "Quelles technologies utilisez-vous pour le développement ?",
        answer: "Nous utilisons des technologies modernes et éprouvées : React, Vue.js, Next.js pour le frontend ; Node.js, Python, Django pour le backend ; PostgreSQL, MongoDB pour les bases de données ; AWS, Vercel pour l'hébergement. Nous choisissons la stack la plus adaptée à votre projet."
      },
      {
        id: 14,
        question: "Mes données sont-elles sécurisées ?",
        answer: "La sécurité est au cœur de nos préoccupations. Nous appliquons les meilleures pratiques : chiffrement des données, authentification forte, sauvegardes automatiques, certificats SSL, conformité RGPD. Tous nos développements respectent les standards de sécurité internationaux."
      },
      {
        id: 15,
        question: "Mon site sera-t-il responsive et optimisé pour le mobile ?",
        answer: "Tous nos sites sont responsive et optimisés mobile-first. Nous testons sur tous les appareils et navigateurs. Nous optimisons également les performances (vitesse de chargement, SEO technique) pour assurer une excellente expérience utilisateur sur tous les supports."
      },
      {
        id: 16,
        question: "Pouvez-vous migrer mon site existant ?",
        answer: "Oui, nous gérons la migration complète de votre site existant vers une nouvelle plateforme. Nous assurons la conservation de vos données, la redirection des URLs, et l'optimisation du SEO. La migration se fait sans interruption de service grâce à notre processus éprouvé."
      }
    ],
    support: [
      {
        id: 17,
        question: "Quel support proposez-vous après la mise en ligne ?",
        answer: "Nous offrons différents niveaux de support : support de base (résolution de bugs), support standard (mises à jour + monitoring), support premium (évolutions + support prioritaire). Tous nos clients bénéficient d'au moins 3 mois de support gratuit après la livraison."
      },
      {
        id: 18,
        question: "Comment puis-je vous contacter en cas d'urgence ?",
        answer: "Pour les urgences (site down, problème de sécurité), nous avons une hotline disponible 24/7 pour nos clients sous contrat de maintenance premium. Les autres clients peuvent nous joindre par email et nous nous engageons à répondre sous 4h en jours ouvrés."
      },
      {
        id: 19,
        question: "Proposez-vous des formations pour gérer mon site ?",
        answer: "Oui, nous incluons systématiquement une formation à la livraison du projet. Nous proposons aussi des formations approfondies sur demande : gestion de contenu, administration technique, marketing digital. Les formations peuvent se faire en présentiel ou en visioconférence."
      },
      {
        id: 20,
        question: "Que faire si mon site est piraté ou infecté ?",
        answer: "Nos contrats de maintenance incluent la surveillance sécuritaire et la résolution des incidents. En cas de piratage, nous intervenons dans les 2h pour sécuriser le site, nettoyer les infections, et restaurer une version saine. Nous analysons ensuite les failles pour éviter toute récidive."
      }
    ]
  };

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section avec background identique au Hero principal */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center relative overflow-hidden pt-24">
        {/* Background avec effets géométriques */}
        <div className="absolute inset-0">
          {/* Formes animées avec couleurs harmonieuses */}
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl"
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
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"
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

          {/* Particules flottantes en forme de points d'interrogation */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-yellow-400/60' : 
                i % 3 === 1 ? 'bg-orange-400/60' : 'bg-red-400/60'
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
              💡
            </motion.div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent mb-6"
          >
            Questions Fréquentes
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Trouvez rapidement les réponses à vos questions sur nos 
            <span className="text-yellow-400 font-semibold"> services</span>, 
            notre <span className="text-orange-400 font-semibold"> processus de travail</span> et 
            nos <span className="text-red-400 font-semibold"> solutions techniques</span>.
          </motion.p>

          {/* Barre de recherche animée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="max-w-2xl mx-auto relative mb-12"
          >
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-600 bg-slate-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <motion.div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              🔍
            </motion.div>
          </motion.div>

          {/* Stats avec couleurs coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24"
          >
            {[
              { icon: "❓", label: "20+ questions", color: "text-yellow-400" },
              { icon: "⚙️", label: "5 catégories", color: "text-orange-400" },
              { icon: "⚡", label: "Réponses rapides", color: "text-red-400" }
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

      {/* Categories */}
      <section className="py-8 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-800 shadow-md border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {faqs[selectedCategory].map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden"
                  >
                    <motion.button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                      whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-blue-500 text-xl font-bold"
                      >
                        ↓
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {openItems.has(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est là pour répondre à toutes vos questions spécifiques. 
              Contactez-nous pour un échange personnalisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-shadow"
              >
                Nous contacter
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl hover:shadow-lg transition-shadow border border-gray-200"
              >
                Demander un devis
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;