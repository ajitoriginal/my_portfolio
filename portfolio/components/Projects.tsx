'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Built with Next.js, Node.js, and MongoDB.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'Scalable chat application with WebSocket support, featuring group chats, file sharing, and message encryption. Deployed on AWS with Docker.',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Docker'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative task management tool with drag-and-drop interface, real-time updates, and team collaboration features. Integrated with third-party APIs.',
    technologies: ['TypeScript', 'Next.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
  },
  {
    title: 'Financial Dashboard',
    description:
      'Automated financial workflow system with data visualization, reporting, and analytics. Optimized for performance with advanced caching strategies.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Redis'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    title: 'API Gateway Service',
    description:
      'Microservices architecture with centralized API gateway, rate limiting, authentication, and load balancing. Deployed using Kubernetes.',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Data pipeline for social media analytics with sentiment analysis, trend tracking, and automated reporting. Processes millions of data points daily.',
    technologies: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'AWS'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in full-stack development,
            cloud architecture, and scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
