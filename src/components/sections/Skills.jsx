import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, 
  FaDocker, FaAws, FaDatabase, FaPython 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiExpress, SiMongodb, 
  SiPostgresql, SiRedis, SiNextdotjs, SiVercel 
} from 'react-icons/si';
import { skills } from '../../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const iconMap = {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, 
    FaDocker, FaAws, FaDatabase, FaPython,
    SiTailwindcss, SiTypescript, SiExpress, SiMongodb, 
    SiPostgresql, SiRedis, SiNextdotjs, SiVercel
  };

  const SkillBar = ({ skill, index }) => {
    const Icon = iconMap[skill.icon];
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="text-xl text-primary-600 dark:text-primary-400" />}
            <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
          />
        </div>
      </motion.div>
    );
  };

  const SkillCategory = ({ title, skillList, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="card"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
        {title}
      </h3>
      {skillList.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  );

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
              Technologies and tools I work with to build amazing products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Frontend Development" skillList={skills.frontend} delay={0} />
            <SkillCategory title="Backend Development" skillList={skills.backend} delay={0.2} />
            <SkillCategory title="Tools & Technologies" skillList={skills.tools} delay={0.4} />
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST APIs', 'GraphQL', 'JWT', 'OAuth', 'Stripe', 'Payment Integration',
                'Responsive Design', 'Agile/Scrum', 'Git Version Control', 'CI/CD',
                'Testing (Jest)', 'SEO Optimization', 'Web Performance', 'Accessibility'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;