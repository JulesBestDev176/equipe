import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'Tous les articles', count: 12 },
    { id: 'automation', name: 'Automatisation', count: 4 },
    { id: 'ai', name: 'Intelligence Artificielle', count: 3 },
    { id: 'development', name: 'Développement', count: 3 },
    { id: 'design', name: 'Design & UX', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: "L'avenir de l'automatisation avec n8n : Guide complet 2024",
      excerpt: "Découvrez comment n8n révolutionne l'automatisation des processus métier et pourquoi c'est l'outil de choix pour les entreprises modernes.",
      content: "L'automatisation des processus métier n'a jamais été aussi accessible grâce à n8n, une plateforme open-source qui démocratise l'intégration de systèmes. Dans ce guide complet, nous explorerons les fonctionnalités avancées de n8n et comment elle se positionne comme l'outil de référence pour les entreprises modernes.\n\n## Qu'est-ce que n8n ?\n\nn8n est une plateforme d'automatisation workflow-based qui permet de connecter différentes applications et services sans écrire de code. Contrairement à d'autres solutions propriétaires comme Zapier, n8n offre une transparence totale et un contrôle complet sur vos données.\n\n## Avantages clés de n8n\n\n### 1. Open Source et Self-hosted\nVous gardez le contrôle total sur vos données sensibles en hébergeant n8n sur vos propres serveurs.\n\n### 2. Interface visuelle intuitive\nCréez des workflows complexes grâce à une interface drag-and-drop moderne et intuitive.\n\n### 3. Connecteurs extensifs\nPlus de 200 intégrations natives avec les services les plus populaires (Slack, Gmail, Notion, etc.).\n\n## Cas d'usage concrets\n\n- **E-commerce** : Synchronisation automatique des commandes entre boutique et CRM\n- **Marketing** : Automatisation des campagnes email basées sur le comportement utilisateur\n- **Support client** : Création automatique de tickets depuis les réseaux sociaux\n\nL'avenir de l'automatisation appartient aux outils qui allient simplicité d'usage et puissance technique. n8n répond parfaitement à cette équation.",
      category: 'automation',
      author: "Souleymane Fall",
      date: "15 Mars 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=400",
      featured: true,
      tags: ['n8n', 'automatisation', 'workflow']
    },
    {
      id: 2,
      title: "React 18 et ses nouvelles fonctionnalités révolutionnaires",
      excerpt: "Explorez les innovations de React 18 : Concurrent Features, Suspense amélioré et leur impact sur les performances.",
      content: "React 18 marque une nouvelle ère dans le développement frontend avec l'introduction des Concurrent Features, une révolution dans la gestion du rendu et de l'état.\n\n## Les Concurrent Features\n\nLes fonctionnalités concurrentes permettent à React d'interrompre, de suspendre et de reprendre le rendu selon les priorités définies. Cela améliore drastiquement l'expérience utilisateur.\n\n### Automatic Batching\n\nReact 18 groupe automatiquement les mises à jour d'état pour de meilleures performances, même dans les promesses et timeouts.\n\n```jsx\n// Avant React 18 : 2 re-renders\n// Avec React 18 : 1 seul re-render\nsetTimeout(() => {\n  setCount(count => count + 1);\n  setFlag(flag => !flag);\n}, 1000);\n```\n\n### Suspense amélioré\n\nSuspense supporte maintenant le Server-Side Rendering et offre un contrôle granulaire sur le chargement des composants.\n\n## Nouvelles APIs\n\n- **useId()** : Génère des IDs uniques côté client et serveur\n- **useDeferredValue()** : Diffère les mises à jour non critiques\n- **useTransition()** : Marque les mises à jour comme non urgentes\n\nCes innovations placent React à l'avant-garde du développement web moderne.",
      category: 'development',
      author: "Aliou Ndour",
      date: "12 Mars 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&h=400",
      featured: false,
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 3,
      title: "Intelligence Artificielle et développement web : tendances 2024",
      excerpt: "Comment l'IA transforme le développement web moderne et les outils que vous devez connaître absolument.",
      content: "L'Intelligence Artificielle révolutionne le développement web en 2024, transformant la façon dont nous concevons, développons et maintenons les applications.\n\n## L'IA au service du développement\n\n### Code Generation\nLes outils comme GitHub Copilot et ChatGPT transforment l'écriture de code :\n- Génération automatique de fonctions\n- Suggestion de patterns optimisés\n- Documentation automatique\n\n### Testing et QA\nL'IA révolutionne les tests :\n- Tests automatisés intelligents\n- Détection proactive de bugs\n- Optimisation des performances\n\n## Outils incontournables 2024\n\n### 1. GitHub Copilot\nAssistant IA intégré à votre IDE pour une productivité décuplée.\n\n### 2. Vercel v0\nGénération d'interfaces utilisateur à partir de descriptions textuelles.\n\n### 3. Framer AI\nCréation de prototypes interactifs alimentés par l'IA.\n\n## Impact sur l'UX\n\nL'IA permet de créer des expériences personnalisées :\n- Recommandations contextuelles\n- Chatbots conversationnels avancés\n- Interfaces adaptatives\n\n## L'avenir du développement\n\nNous assistons à l'émergence d'un nouveau paradigme où l'IA devient un partenaire de développement, augmentant les capacités humaines plutôt que de les remplacer.",
      category: 'ai',
      author: "Kissima Tandia",
      date: "10 Mars 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400",
      featured: true,
      tags: ['IA', 'Machine Learning', 'Développement']
    },
    {
      id: 4,
      title: "Design System moderne : créer une cohérence visuelle parfaite",
      excerpt: "Guide pratique pour construire un design system scalable avec les meilleures pratiques 2024.",
      category: 'design',
      author: "Souleymane Fall",
      date: "8 Mars 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&w=800&h=400",
      featured: false,
      tags: ['Design System', 'UI/UX', 'Figma']
    },
    {
      id: 5,
      title: "API REST vs GraphQL : quel choix pour votre projet ?",
      excerpt: "Comparaison détaillée entre REST et GraphQL avec des exemples concrets et des recommandations.",
      category: 'development',
      author: "Aliou Ndour",
      date: "5 Mars 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=400",
      featured: false,
      tags: ['API', 'GraphQL', 'Backend']
    },
    {
      id: 6,
      title: "Optimisation des performances web : techniques avancées",
      excerpt: "Techniques expertes pour optimiser les performances de vos applications web et améliorer l'expérience utilisateur.",
      category: 'development',
      author: "Kissima Tandia",
      date: "2 Mars 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
      featured: false,
      tags: ['Performance', 'Optimisation', 'Web']
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Header/>
      {/* Hero Section - Style identique aux autres pages */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center relative overflow-hidden pt-24">
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
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 4 === 0 ? 'bg-blue-400/60' : 
                i % 4 === 1 ? 'bg-indigo-400/60' : 
                i % 4 === 2 ? 'bg-purple-400/60' : 'bg-pink-400/60'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-0">
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
              📚
            </motion.div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6"
          >
            Blog Tech DevFlow
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Explorez les dernières tendances en 
            <span className="text-blue-400 font-semibold"> développement web</span>, 
            <span className="text-indigo-400 font-semibold"> automatisation</span> et 
            <span className="text-purple-400 font-semibold"> intelligence artificielle</span> avec nos experts.
          </motion.p>

          {/* Stats avec couleurs coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
          >
            {[
              { icon: "📖", label: "Articles de qualité", number: "50+", color: "text-blue-400" },
              { icon: "👥", label: "Experts DevFlow", number: "8", color: "text-indigo-400" },
              { icon: "🔄", label: "Mise à jour weekly", number: "3x", color: "text-purple-400" },
              { icon: "🌍", label: "Lecteurs actifs", number: "2K+", color: "text-pink-400" }
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
                <div className={`text-2xl font-bold ${stat.color} group-hover:text-white transition-colors mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <span>Découvrir les articles</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <span>📬</span>
              <span>Newsletter</span>
            </motion.button>
          </motion.div>

          
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-800 mb-12 text-center"
            >
              Articles à la une
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                        À la une
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer"
                        onClick={() => setSelectedArticle(article)}>
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedArticle(article)}
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      >
                        Lire l'article →
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories & Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-800 shadow-md border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
                      onClick={() => setSelectedArticle(article)}>
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-gray-400 text-xs">{article.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Restez informé des dernières tendances tech
            </h2>
            <p className="text-gray-600 mb-8">
              Recevez nos meilleurs articles directement dans votre boîte mail. 
              Pas de spam, juste du contenu de qualité.
            </p>
            
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
              >
                S'abonner
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Blog;