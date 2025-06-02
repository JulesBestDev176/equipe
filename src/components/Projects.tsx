import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "EcoShop Platform",
      category: "E-commerce",
      description: "Plateforme e-commerce révolutionnaire avec IA intégrée pour recommandations personnalisées et gestion automatisée des stocks.",
      detailedDescription: "Une plateforme e-commerce complète qui utilise l'intelligence artificielle pour personnaliser l'expérience utilisateur. Le système analyse le comportement d'achat pour proposer des recommandations pertinentes et optimise automatiquement la gestion des stocks en prédisant les tendances de vente.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "TensorFlow", "Stripe", "MongoDB"],
      stats: { conversion: "+150%", performance: "98/100", users: "50k+" },
      gradient: "from-emerald-500 to-teal-600",
      link: "#",
      featured: true,
      features: ["IA de recommandation", "Paiement sécurisé", "Analytics avancées", "API REST"],
      github: "https://github.com/example/ecoshop",
      lien: "https://ecoshop-demo.com",
      size: "large", // large card
      duration: "8 semaines"
    },
    {
      id: 2,
      title: "AutoFlow CRM",
      category: "Automatisation",
      description: "Système CRM intelligent avec workflows n8n automatisés.",
      detailedDescription: "Solution CRM complète qui automatise les processus de vente grâce à des workflows intelligents. L'analyse prédictive permet d'identifier les prospects les plus prometteurs et d'optimiser les stratégies commerciales.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      technologies: ["Vue.js", "Express", "n8n", "PostgreSQL"],
      stats: { efficiency: "+200%", automation: "95%" },
      gradient: "from-blue-500 to-indigo-600",
      link: "#",
      featured: false,
      features: ["Workflows automatisés", "Analyse prédictive", "Intégrations multiples", "Dashboard temps réel"],
      github: "https://github.com/example/autoflow",
      lien: "https://autoflow-demo.com",
      size: "medium",
      duration: "6 semaines"
    },
    {
      id: 3,
      title: "MediConnect",
      category: "Santé",
      description: "Application médicale avec téléconsultation et gestion des rendez-vous.",
      detailedDescription: "Plateforme de télémédecine complète permettant aux patients de consulter leurs médecins à distance, de gérer leurs rendez-vous et de suivre leur état de santé. Conforme aux normes HIPAA pour la sécurité des données médicales.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Firebase", "WebRTC"],
      stats: { patients: "10k+", satisfaction: "98%" },
      gradient: "from-pink-500 to-rose-600",
      link: "#",
      featured: false,
      features: ["Téléconsultation HD", "Gestion RDV", "Dossier médical"],
      github: "https://github.com/example/mediconnect",
      lien: "https://mediconnect-demo.com",
      size: "small",
      duration: "4 semaines"
    },
    {
      id: 4,
      title: "SmartInvoice AI",
      category: "FinTech",
      description: "Solution de facturation intelligente avec reconnaissance OCR et prédictions de paiement basées sur l'IA.",
      detailedDescription: "Système de facturation intelligent qui automatise la création et le suivi des factures. Utilise l'OCR pour extraire les données des documents et prédit les délais de paiement pour optimiser la trésorerie.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "OpenAI", "Prisma", "Stripe"],
      stats: { accuracy: "99.2%", speed: "+500%", savings: "40%" },
      gradient: "from-orange-500 to-amber-600",
      link: "#",
      featured: true,
      features: ["OCR avancé", "Prédictions IA", "Intégration bancaire", "Reporting"],
      github: "https://github.com/example/smartinvoice",
      demo: "https://smartinvoice-demo.com",
      size: "large",
      duration: "10 semaines"
    },
    {
      id: 5,
      title: "Neural Analytics",
      category: "Data Science",
      description: "Plateforme d'analyse de données avec machine learning.",
      detailedDescription: "Plateforme d'analyse de données avancée qui utilise le machine learning pour générer des insights business en temps réel. Traite de grandes quantités de données pour identifier des tendances et des opportunités.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "TensorFlow", "D3.js"],
      stats: { insights: "1000+", precision: "94%" },
      gradient: "from-purple-500 to-violet-600",
      link: "#",
      featured: false,
      features: ["ML en temps réel", "Visualisation avancée", "Big Data"],
      github: "https://github.com/example/neural-analytics",
      lien: "https://neural-analytics-demo.com",
      size: "medium",
      duration: "7 semaines"
    },
    {
      id: 6,
      title: "VR Showroom",
      category: "VR/AR",
      description: "Showroom virtuel immersif pour présentation de produits.",
      detailedDescription: "Expérience de réalité virtuelle immersive permettant aux clients de découvrir des produits dans un environnement 3D interactif. Compatible avec les casques VR et navigateurs web via WebXR.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&w=800&h=600",
      technologies: ["Three.js", "WebGL", "WebXR"],
      stats: { engagement: "+400%", performance: "60fps" },
      gradient: "from-cyan-500 to-blue-600",
      link: "#",
      featured: false,
      features: ["WebXR natif", "Interactions 3D", "Multi-plateforme"],
      github: "https://github.com/example/vr-showroom",
      lien: "https://vr-showroom-demo.com",
      size: "small",
      duration: "5 semaines"
    }
  ];

  const categories = ['all', 'E-commerce', 'Automatisation', 'Santé', 'FinTech', 'Data Science', 'VR/AR'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(useTransform(mouseY, [-200, 200], [3, -3]), { 
      stiffness: 400, 
      damping: 30 
    });
    const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-3, 3]), { 
      stiffness: 400, 
      damping: 30 
    });

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 15);
      mouseY.set((e.clientY - centerY) / 15);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    // Définir les classes selon la taille
    const getCardClasses = (size) => {
      switch (size) {
        case 'large':
          return 'lg:col-span-2 lg:row-span-2';
        case 'medium':
          return 'lg:col-span-1 lg:row-span-2';
        case 'small':
        default:
          return 'lg:col-span-1 lg:row-span-1';
      }
    };

    const getImageHeight = (size) => {
      switch (size) {
        case 'large':
          return 'h-64 lg:h-80';
        case 'medium':
          return 'h-48 lg:h-64';
        case 'small':
        default:
          return 'h-40 lg:h-48';
      }
    };

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        exit={{ opacity: 0, y: 60, scale: 0.9 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setSelectedProject(project)}
        className={`group relative cursor-pointer ${getCardClasses(project.size)}`}
      >
        {/* Glow Effect */}
        <motion.div
          className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-700`}
          whileHover={{ scale: 1.02 }}
        />

        {/* Main Card */}
        <motion.div 
          className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden h-full hover:border-slate-600/50 transition-all duration-500"
          whileHover={{ 
            y: -6,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Image Section */}
          <div className={`relative ${getImageHeight(project.size)} overflow-hidden`}>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Image Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`} />
            
            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <motion.div 
                className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {project.category}
              </motion.div>

              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-lg">★</span>
                </motion.div>
              )}
            </div>

            {/* Duration Badge */}
            <motion.div 
              className="absolute bottom-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {project.duration}
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              className="absolute bottom-4 left-4 flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs border border-white/20 hover:bg-white/30 transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.1 + 0.5 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <motion.span 
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs border border-white/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  +{project.technologies.length - 3}
                </motion.span>
              )}
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <motion.h3 
              className={`text-xl lg:text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:${project.gradient} group-hover:bg-clip-text  transition-all duration-500`}
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>
            
            <p className={`text-gray-400 text-sm leading-relaxed mb-4 ${project.size === 'large' ? 'lg:text-base' : ''}`}>
              {project.description}
            </p>

            {/* Stats Grid */}
            <motion.div 
              className={`grid ${Object.keys(project.stats).length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-3 mb-4`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {Object.entries(project.stats).map(([key, value], statIndex) => (
                <motion.div 
                  key={key} 
                  className="text-center p-3 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-colors duration-300 border border-slate-700/30"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div 
                    className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: (index * 0.1) + (statIndex * 0.1) + 0.6, type: "spring", stiffness: 200 }}
                  >
                    {String(value)}
                  </motion.div>
                  <div className="text-xs text-gray-500 uppercase font-medium">{key}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Button */}
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              <motion.button 
                className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl text-sm hover:shadow-lg transition-shadow duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Découvrir le projet
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projets" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/3 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl  font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Nos Projets
          </motion.h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
            Découvrez notre portfolio de solutions innovantes conçues avec les technologies les plus avancées
          </p>

          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/70 text-gray-400 hover:bg-slate-700/70 hover:text-white border border-slate-600/50 hover:border-slate-500/50'
                }`}
              >
                {category === 'all' ? 'Tous les projets' : category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid - Masonry Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900/98 backdrop-blur-xl rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <span className={`text-lg bg-gradient-to-r ${selectedProject.gradient} bg-clip-text text-transparent font-semibold`}>
                    {selectedProject.category}
                  </span>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white text-2xl w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-colors"
                >
                  ×
                </motion.button>
              </div>
              
              {/* Modal Image */}
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Description</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Fonctionnalités clés</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div 
                        key={feature} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-colors"
                      >
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${selectedProject.gradient}`} />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span 
                        key={tech} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-slate-800/70 rounded-xl text-gray-300 font-medium border border-slate-700/50 hover:border-slate-600/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {/* <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-center transition-colors shadow-lg"
                  >
                    Code source
                  </motion.a> */}
                  <motion.a
                    href={selectedProject.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 py-4 bg-gradient-to-r ${selectedProject.gradient} text-white font-semibold rounded-xl text-center shadow-lg`}
                  >
                    Visiter le site
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;