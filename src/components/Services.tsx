
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Automatisation avec n8n",
      description: "Automatisez vos processus métier avec des workflows intelligents et personnalisés.",
      icon: "🤖",
      features: ["Workflows sur mesure", "Intégrations API", "Monitoring en temps réel"]
    },
    {
      title: "Sites Web Vitrine",
      description: "Créez une présence en ligne professionnelle qui convertit vos visiteurs en clients.",
      icon: "🌐",
      features: ["Design responsive", "SEO optimisé", "Performance optimale"]
    },
    {
      title: "Applications Web",
      description: "Développement d'applications web sur mesure pour vos besoins spécifiques.",
      icon: "⚡",
      features: ["Interface intuitive", "Backend robuste", "Sécurité renforcée"]
    },
    {
      title: "E-commerce",
      description: "Solutions e-commerce complètes pour vendre en ligne efficacement.",
      icon: "🛒",
      features: ["Paiement sécurisé", "Gestion des stocks", "Analytics avancées"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons une gamme complète de services pour digitaliser et automatiser votre entreprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
