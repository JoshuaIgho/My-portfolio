import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  // Floating animation for tech icons
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const techStack = [
    { name: 'React', color: '#61DAFB', symbol: '⚛️' },
    { name: 'Node.js', color: '#339933', symbol: '🟢' },
    { name: 'MongoDB', color: '#47A248', symbol: '🍃' },
    { name: 'TypeScript', color: '#3178C6', symbol: '📘' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl"
        />

        {/* Floating Tech Icons */}
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(index) * 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
            className="absolute text-4xl opacity-20 dark:opacity-10"
            style={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 20}%`,
            }}
          >
            {tech.symbol}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-primary-200 dark:border-gray-700"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Available for work
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span className="block text-gray-900 dark:text-white mb-2">
                  Hi, I'm
                </span>
                <span className="block bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Joshua Igho
                </span>
              </h1>

              {/* Subtitle with Typing Effect */}
              <div className="mb-6">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Certified Full-Stack Developer
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm">
                  {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8"
              >
                Building scalable web applications with modern technologies. 
                Passionate about creating seamless user experiences and robust backend systems.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </a>
              
              <a
                href="https://1drv.ms/w/c/c8d5c89dc81fe9ea/IQB_w7zIhjxJQ7V5ItxlKFVsAYZItq-4zkJy5HSBSbuBHpA?e=8VXFWu"
                download
                className="group px-8 py-4 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/JoshuaIgho', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/igho-joshua-b93a92289/', label: 'LinkedIn', color: 'hover:text-blue-600' },
                { icon: FaEnvelope, href: 'mailto:joshuaalex822@gmail.com', label: 'Email', color: 'hover:text-red-600' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all text-gray-600 dark:text-gray-400 ${social.color} border border-gray-200 dark:border-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              
              {/* Code Window Mockup */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Window Controls */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Code Content */}
                <div className="space-y-3 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-purple-600 dark:text-purple-400"
                  >
                    <span className="text-blue-600 dark:text-blue-400">const</span> developer = {'{'}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="pl-4 text-gray-700 dark:text-gray-300"
                  >
                    name: <span className="text-green-600 dark:text-green-400">'Joshua Igho'</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="pl-4 text-gray-700 dark:text-gray-300"
                  >
                    skills: <span className="text-orange-600 dark:text-orange-400">['React', 'Node.js']</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="pl-4 text-gray-700 dark:text-gray-300"
                  >
                    passion: <span className="text-green-600 dark:text-green-400">'Building amazing apps'</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-purple-600 dark:text-purple-400"
                  >
                    {'};'}
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full blur-2xl opacity-50"></div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={floatingAnimation}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 border border-gray-200 dark:border-gray-700"
              >
                <FaCode className="text-3xl text-primary-600" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    3+ Years
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
