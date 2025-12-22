import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa';
import { certifications } from '../../data/certifications';

const CertificationCard = ({ cert, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group hover:scale-105 transition-transform duration-300"
    >
      <div className="flex flex-col h-full">
        {/* Certificate Image/Icon */}
        <div className="mb-4 aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center overflow-hidden">
          {cert.image ? (
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <FaCertificate className="text-6xl text-primary-600 dark:text-primary-400" />
          )}
        </div>

        {/* Certificate Details */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
            {cert.issuer}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <FaCalendar />
            <span>{cert.date}</span>
          </div>

          {cert.credentialId && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Credential ID: <span className="font-mono">{cert.credentialId}</span>
            </p>
          )}
        </div>

        {/* Verify Button */}
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors group-hover:shadow-lg"
          >
            Verify Certificate
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sampleCertifications = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      issuer: 'Certification Authority',
      date: '2024',
      credentialId: 'CERT-2024-001',
      image: null,
      verifyUrl: '#'
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'React Training',
      date: '2023',
      credentialId: 'REACT-2023-456',
      image: null,
      verifyUrl: '#'
    },
    {
      id: 3,
      title: 'Node.js Application Development',
      issuer: 'Node.js Foundation',
      date: '2023',
      credentialId: 'NODE-2023-789',
      image: null,
      verifyUrl: '#'
    },
    {
      id: 4,
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-2024-123',
      image: null,
      verifyUrl: '#'
    }
  ];

  const displayCertifications = certifications.length > 0 ? certifications : sampleCertifications;

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="section-heading">Certifications</h2>
            <p className="section-subheading">
              Professional certifications and credentials demonstrating my expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayCertifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>

          {/* Additional Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-6 py-3 bg-primary-50 dark:bg-primary-900 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                🎓 Continuously learning and expanding my skill set
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
