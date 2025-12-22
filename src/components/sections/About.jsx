import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLanguage, FaCode } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Your University',
      year: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and web development'
    }
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'French', level: 'Intermediate' },
    { name: 'Spanish', level: 'Basic' }
  ];

  const interests = [
    'Web Development',
    'Open Source',
    'Cloud Computing',
    'UI/UX Design',
    'Problem Solving',
    'Technology Innovation'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading">
              Get to know more about my background, skills, and what drives me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">3+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm Your Name
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm a certified full-stack developer with a passion for building scalable, 
                  user-friendly web applications. With expertise in React, Node.js, and modern 
                  web technologies, I transform ideas into reality.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  My journey in web development began during my university years, and since then, 
                  I've worked on diverse projects ranging from e-commerce platforms to content 
                  management systems. I believe in writing clean, maintainable code and creating 
                  experiences that users love.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">15+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">20+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Technologies</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Certifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education, Languages, Interests */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-3xl text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaLanguage className="text-3xl text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Languages</h3>
              </div>
              <ul className="space-y-3">
                {languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                    <span className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-3xl text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;