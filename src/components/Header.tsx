import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Switch } from './ui/switch';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Left */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-white text-2xl font-bold tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            whileHover={{ scale: 1.05 }}
          >
            Abdul Rafeh
          </motion.a>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle - Right */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div 
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <Sun className="w-4 h-4 text-yellow-500" />
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-300"
              />
              <Moon className="w-4 h-4 text-blue-500" />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.div 
              className="flex items-center gap-2 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <Sun className="w-3 h-3 text-yellow-500" />
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-300 scale-75"
              />
              <Moon className="w-3 h-3 text-blue-500" />
            </motion.div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
