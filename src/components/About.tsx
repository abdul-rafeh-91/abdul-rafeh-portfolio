import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Palette, Lightbulb, Users } from 'lucide-react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const features = [
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Crafting intuitive and beautiful interfaces that users love'
    },
    {
      icon: Code2,
      title: 'Modern Tools',
      description: 'Expertise in Figma and modern design systems'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Finding creative solutions to complex challenges'
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Putting users first in every design decision'
    }
  ];

  return (
    <section ref={ref} id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl lg:text-6xl">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I'm <span className="text-purple-600 dark:text-purple-400">Abdul Rafeh</span>, a digital product designer who loves solving problems through clean design and thoughtful interaction. I specialize in building modern, user-centered interfaces using Figma.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              With a passion for creating seamless digital experiences, I blend creativity with functionality to deliver designs that not only look great but also solve real user problems. Every project is an opportunity to push boundaries and create something meaningful.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My approach combines user research, iterative design, and close collaboration with development teams to ensure that every pixel serves a purpose.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 mb-4 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
