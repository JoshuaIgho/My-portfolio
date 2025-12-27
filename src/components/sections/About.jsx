import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaLanguage, FaCode, FaAward, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Oduduwa University",
      year: "2025",
      description:
        "Focused on software engineering, algorithms, and web development",
    },
  ];

  const languages = [
    { name: "English", level: "Fluent", flag: "🇬🇧" },
    { name: "Pidgin", level: "Native", flag: "🇳🇬" },
    { name: "Spanish", level: "Beginner", flag: "🇪🇸" },
  ];

  const interests = [
    { name: "Web Development", icon: "💻" },
    { name: "Open Source", icon: "🌍" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Technology Innovation", icon: "🚀" },
  ];

  const stats = [
    { number: "15+", label: "Projects", icon: FaLaptopCode, color: "from-blue-500 to-cyan-500" },
    { number: "20+", label: "Technologies", icon: FaCode, color: "from-purple-500 to-pink-500" },
    { number: "5+", label: "Certifications", icon: FaAward, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl mb-4 shadow-lg"
            >
              <FaRocket className="text-3xl text-white" />
            </motion.div>
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading">
              Get to know more about my background, skills, and what drives me
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <img
                  src={
                    new URL(
                      "../../assets/Screenshot 2025-12-26 at 23.24.47.png",
                      import.meta.url
                    ).href
                  }
                  alt="Joshua Igho"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl"
              >
                <p className="text-3xl font-bold">3+</p>
                <p className="text-sm font-medium">Years Experience</p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm <span className="text-primary-600 dark:text-primary-400">Joshua Igho</span>
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p className="leading-relaxed">
                    I'm a certified full-stack developer with a passion for
                    building scalable, user-friendly web applications. With
                    expertise in React, Node.js, and modern web technologies, I
                    transform ideas into reality.
                  </p>
                  <p className="leading-relaxed">
                    My journey in web development began during my university
                    years, and since then, I've worked on diverse projects ranging
                    from e-commerce platforms to content management systems. I
                    believe in writing clean, maintainable code and creating
                    experiences that users love.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or sharing
                    knowledge with the developer community.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group relative text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    
                    <stat.icon className="text-2xl mx-auto mb-2 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education, Languages, Interests */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <FaGraduationCap className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {edu.year}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <FaLanguage className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Languages
                  </h3>
                </div>
                <ul className="space-y-3">
                  {languages.map((lang, index) => (
                    <li key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {lang.name}
                        </span>
                      </div>
                      <span className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full font-semibold">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                    <FaCode className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Interests
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                      className="group/tag px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all cursor-default flex items-center gap-1.5"
                    >
                      <span>{interest.icon}</span>
                      <span>{interest.name}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;