import { motion, useScroll, useTransform } from 'motion/react';
import { Figma, Palette, Layout, Layers, Smartphone, Monitor } from 'lucide-react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const skillCategories = [
    {
      title: 'Core Skills',
      icon: Figma,
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Sketch', level: 80 },
        { name: 'Illustrator', level: 90 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'React', level: 60 },
        { name: 'PHP', level: 80 },
        { name: 'Laravel', level: 75 }
      ]
    }
  ];

  const expertise = [
    { icon: Monitor, label: 'Web Design', color: 'purple' },
    { icon: Smartphone, label: 'Mobile Design', color: 'blue' },
    { icon: Layout, label: 'UI/UX', color: 'indigo' }
  ];

  return (
    <section ref={ref} id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl"
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
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8" />
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          {expertise.map((item, index) => {
            const colorClasses = {
              purple: { bg: 'from-purple-500/20 to-purple-600/20', text: 'text-purple-600 dark:text-purple-400' },
              blue: { bg: 'from-blue-500/20 to-blue-600/20', text: 'text-blue-600 dark:text-blue-400' },
              pink: { bg: 'from-pink-500/20 to-pink-600/20', text: 'text-pink-600 dark:text-pink-400' },
              indigo: { bg: 'from-indigo-500/20 to-indigo-600/20', text: 'text-indigo-600 dark:text-indigo-400' }
            };
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.3)"
                }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all group cursor-pointer"
              >
                <motion.div 
                  className={`p-4 rounded-full bg-gradient-to-br ${colors.bg}`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className={`w-8 h-8 ${colors.text}`} />
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Progress */}
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(168, 85, 247, 0.3)" }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <category.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 1 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}