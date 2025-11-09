'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ajitsinghoriginal@gmail.com',
      link: 'mailto:ajitsinghoriginal@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@ajitoriginal',
      link: 'https://github.com/ajitoriginal',
      color: 'text-gray-800 dark:text-white',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Ajit Singh',
      link: 'https://www.linkedin.com/in/ajit-original/',
      color: 'text-blue-600',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Available for On-site/Hybrid/Remote',
      link: null,
      color: 'text-green-500',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: info.link ? 1.05 : 1, y: info.link ? -5 : 0 }}
              className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ${
                info.link ? 'cursor-pointer' : ''
              }`}
              onClick={() => info.link && window.open(info.link, '_blank')}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${info.color}`}
                >
                  <info.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Let's build something amazing together!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ajit.singh@example.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
