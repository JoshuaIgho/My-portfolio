import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, 
  FaDocker, FaAws, FaDatabase, FaPython 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiExpress, SiMongodb, 
  SiPostgresql, SiRedis, SiNextdotjs, SiVercel,
  SiJavascript, SiReact
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: FaReact,
      color: "blue",
      skills: [
        { name: 'React.js', icon: FaReact },
        { name: 'JavaScript (ES6+)', icon: FaJs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3/SASS', icon: FaCss3Alt },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Responsive Design', icon: FaReact }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: FaNodeJs,
      color: "green",
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'REST APIs', icon: FaDatabase },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Redis', icon: SiRedis },
        { name: 'Authentication (JWT)', icon: FaNodeJs },
        { name: 'API Integration', icon: FaDatabase }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: FaGithub,
      color: "purple",
      skills: [
        { name: 'Git & GitHub', icon: FaGithub },
        { name: 'Docker', icon: FaDocker },
        { name: 'AWS', icon: FaAws },
        { name: 'Vercel', icon: SiVercel },
        { name: 'VS Code', icon: FaCode },
        { name: 'Postman', icon: FaDatabase },
        { name: 'Linux/Unix', icon: FaPython },
        { name: 'CI/CD', icon: FaGithub }
      ]
    }
  };

  const additionalSkills = [
    'REST APIs', 'GraphQL', 'JWT Authentication', 'OAuth', 'Stripe Integration',
    'Payment Gateways', 'Responsive Design', 'Agile/Scrum', 'Git Version Control',
    'CI/CD Pipelines', 'Unit Testing', 'SEO Optimization', 'Web Performance',
    'Accessibility (WCAG)', 'Web Security', 'Database Design'
  ];

  const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="group"
      >
        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700">
          <div className="text-xl text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
            {Icon && <Icon />}
          </div>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
          </p>
        </div>
      </motion.div>
    );
  };

  const CategorySection = ({ category, data, delay }) => {
    const CategoryIcon = data.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <CategoryIcon className="text-xl text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {data.title}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="section-heading">Technical Skills</h2>
            <p className="section-subheading">
              Technologies and tools I use to build amazing products
            </p>
          </div>

          {/* Skill Categories */}
          <div className="mb-16">
            <CategorySection 
              category="frontend" 
              data={skillCategories.frontend} 
              delay={0} 
            />
            <CategorySection 
              category="backend" 
              data={skillCategories.backend} 
              delay={0.2} 
            />
            <CategorySection 
              category="tools" 
              data={skillCategories.tools} 
              delay={0.4} 
            />
          </div>

          {/* Additional Skills Tags - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden md:block relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl mb-3 shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Additional Expertise
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Constantly expanding my technical toolkit
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((tech, index) => {
                  const colors = [
                    'from-blue-500 to-cyan-500',
                    'from-purple-500 to-pink-500',
                    'from-green-500 to-emerald-500',
                    'from-orange-500 to-red-500',
                    'from-indigo-500 to-blue-500',
                    'from-pink-500 to-rose-500',
                  ];
                  const colorClass = colors[index % colors.length];
                  
                  return (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.7 + index * 0.03,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`group relative px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-700 overflow-hidden`}
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};

const FaCode = () => <span>💻</span>;

export default Skills;