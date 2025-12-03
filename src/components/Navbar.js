import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-4">
      <div className={`max-w-7xl mx-auto backdrop-blur-lg rounded-2xl shadow-xl border ${
        darkMode 
          ? 'bg-gray-900/30 border-gray-700/50' 
          : 'bg-white/30 border-white/50'
      }`}>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with Indian Flag */}
            <div className="flex items-center gap-3">
              <span className="text-3xl"></span>
              <h1 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Gaurav Patel
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`font-medium transition-colors hover:text-blue-500 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  {link}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={darkMode ? 'text-white' : 'text-gray-900'}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-300/30">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`block w-full text-left py-3 font-medium transition-colors hover:text-blue-500 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
