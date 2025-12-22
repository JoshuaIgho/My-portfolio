import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Your Name</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Certified Full-Stack Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Building scalable web applications with React, Node.js, and modern technologies.
              Passionate about creating seamless user experiences and robust backend systems.
            </p>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com"
               className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;