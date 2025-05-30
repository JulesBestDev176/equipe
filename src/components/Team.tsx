
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Souleymane Fall",
      role: "Développeur Frontend",
      specialties: ["Backend", "Automatisation"],
      description: "Expert en interfaces utilisateur modernes et architectures backend robustes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
      skills: ["React", "Node.js", "TypeScript", "n8n"]
    },
    {
      name: "Aliou Ndour",
      role: "Développeur Backend",
      specialties: ["Frontend", "Automatisation"],
      description: "Spécialiste des systèmes backend performants et des processus automatisés.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
      skills: ["Python", "Django", "PostgreSQL", "Docker"]
    },
    {
      name: "Kissima Abdousalam Tandia",
      role: "Expert Automatisation",
      specialties: ["Frontend", "Backend"],
      description: "Architecte de solutions d'automatisation et développeur full-stack polyvalent.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400",
      skills: ["n8n", "Zapier", "Vue.js", "MongoDB"]
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée et expérimentée, prête à transformer vos idées en réalité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center group"
            >
              <div className="relative mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <div className="flex justify-center gap-2 mb-4">
                {member.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{member.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
