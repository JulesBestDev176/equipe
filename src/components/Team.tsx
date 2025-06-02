import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
  {
    id: 1,
    name: "Souleymane Fall",
    role: "Développeur Frontend",
    specialties: ["Frontend", "Backend", "Automatisation"],
    description: "Développeur frontend créatif, Souleymane excelle dans la conception d’interfaces modernes et performantes. Grâce à sa maîtrise du backend et de l’automatisation, il collabore étroitement avec l’équipe pour assurer une continuité fluide entre les couches de l’application.",
    image: "./assets/teams/jules.jpg",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: 2,
    name: "Aliou Ndour",
    role: "Développeur Backend",
    specialties: ["Backend", "Frontend", "Automatisation"],
    description: "Aliou est un développeur backend rigoureux qui construit des APIs robustes et sécurisées. Son aisance sur le frontend et son intérêt pour l’automatisation font de lui un élément clé pour assurer la polyvalence et la cohérence technique de l’équipe.",
    image: "./assets/teams/aliou.jpg",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    name: "Kissima Abdou Salam Tandia",
    role: "Expert Automatisation",
    specialties: ["Automatisation", "Frontend", "Backend"],
    description: "Kissima est le moteur de l’automatisation des workflows de l’équipe. Grâce à sa double compétence en développement web et intégration intelligente, il intervient aisément sur les autres volets techniques pour garantir l’efficacité globale du projet.",
    image: "./assets/teams/kissima.jpg",
    gradient: "from-emerald-600 to-teal-600",
  }
];



  const TeamCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      className="group relative h-full"
    >
      {/* Subtle Background Glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
      />

      {/* Main Card */}
      <div className="relative h-full bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
        {/* Header with Gradient */}
        <div
          className={`relative h-24 bg-gradient-to-br ${member.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 right-4 w-12 h-12 border border-white/40 rounded-full" />
            <div className="absolute bottom-2 left-4 w-6 h-6 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-12 px-6 pb-6 flex flex-col flex-grow">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
            </div>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p
              className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
            >
              {member.role}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {member.specialties.map((specialty) => (
              <span
                key={specialty}
                className={`px-3 py-1 bg-gradient-to-r ${member.gradient} text-white text-xs font-medium rounded-full shadow-sm`}
              >
                {specialty}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};


  return (
    <section id="equipe" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Notre Équipe
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une équipe passionnée et expérimentée, prête à transformer vos idées en 
            <span className="text-blue-600 font-semibold"> solutions innovantes</span>
          </p>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-12 mt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-gray-500">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-500">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">100%</div>
              <div className="text-sm text-gray-500">Satisfaction client</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;