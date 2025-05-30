
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-blue-400 mb-4 cursor-pointer"
              onClick={() => scrollToSection('accueil')}
            >
              JulesDev
            </motion.h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire de confiance pour la transformation digitale. Nous automatisons, créons et innovons pour votre succès.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="text-sm">💼</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <span className="text-sm">🐱</span>
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'Services', 'Projets', 'Équipe', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item.toLowerCase().replace('é', 'e').replace('è', 'e'))}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 HLM Fass, Sénégal</p>
              <p>📞 +221 77 715 10 61</p>
              <p>✉️ souleymanefall176@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} JulesDev – Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
