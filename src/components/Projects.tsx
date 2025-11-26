import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, FileText } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projects = [
    {
      title: 'SystemYX',
      description: 'An innovative AI-powered risk assessment platform designed to streamline security evaluation and provide intelligent insights for enterprise risk management.',
      category: 'UI/UX Design',
      gradient: 'from-purple-500 to-pink-500',
      figmaLink: 'https://www.figma.com/design/1yLNd04fwLDdAcpC9JrGZQ/SystemYX-New?m=auto&t=DwhhdUa6OPgZbc5C-1'
    },
    {
      title: 'Job Connect',
      description: 'A user-friendly mobile application that connects job seekers with opportunities, featuring smart matching algorithms and seamless application management.',
      category: 'Mobile Design',
      gradient: 'from-blue-500 to-cyan-500',
      figmaLink: 'https://www.figma.com/design/0WSCqpDi3j8Hl9gVr0vFrX/Job-Connect?m=auto&t=DwhhdUa6OPgZbc5C-1'
    },
    {
      title: 'Nominoon',
      description: 'A creative platform that transforms user photos into personalized storybooks, bringing memories to life through interactive storytelling and custom design.',
      category: 'UI/UX Design',
      gradient: 'from-orange-500 to-red-500',
      figmaLink: 'https://www.figma.com/design/4LxRIlpmWylxn58xJaFOaf/Noomi-Moon-Project?m=auto&t=DwhhdUa6OPgZbc5C-1'
    },
    {
      title: 'Cargo Connect',
      description: 'A comprehensive web platform simplifying parcel delivery logistics with real-time tracking, automated routing, and efficient management tools for seamless operations.',
      category: 'Web Design',
      gradient: 'from-green-500 to-teal-500',
      figmaLink: 'https://www.figma.com/design/gR57dbbffMf0hpXMaXZgD5/Cargo-Connect-Project?m=auto&t=DwhhdUa6OPgZbc5C-1'
    },
    {
      title: 'MyoTees',
      description: 'An interactive design studio enabling users to create custom t-shirt designs with an intuitive canvas interface, offering real-time previews and creative freedom.',
      category: 'Web Design',
      gradient: 'from-indigo-500 to-purple-500',
      figmaLink: 'https://www.figma.com/design/nQLdUIZjykMRhBwPeIIcZI/MYO-Tees?m=auto&t=BbKviYTqeNJo7xr7-1'
    },
    {
      title: 'XaviAtlas',
      description: 'A robust enterprise platform providing comprehensive EHSQ (Environment, Health, Safety, and Quality) management solutions for large-scale organizational needs.',
      category: 'UI/UX Design',
      gradient: 'from-pink-500 to-rose-500',
      figmaLink: 'https://www.figma.com/design/CTEJPM1P4XiHVabr4LmpkU/EHSQ?m=auto&t=BbKviYTqeNJo7xr7-1'
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my recent work in digital product design. Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300">
                {/* Gradient Header */}
                <motion.div 
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%', y: '-100%' }}
                    whileHover={{ x: '100%', y: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Animated shapes */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-lg"
                    animate={{
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.figmaLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Figma File</span>
                    </motion.a>
                    <motion.a
                      href={project.figmaLink}
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl bg-gradient-to-br ${project.gradient} blur-xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400">
            More projects coming soon. Stay tuned for updates!
          </p>
        </motion.div>
      </div>
    </section>
  );
}