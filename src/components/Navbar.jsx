import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Check system preference or localStorage on mount
  useEffect(() => {
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-surface/50 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left Section: Logo & Links */}
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter">AB.</span>
            </a>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-primary transition-colors mx-3">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section: Theme Toggle & Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleTheme} 
              className="text-muted hover:text-primary transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
            </button>
            
            <a href="#contact" className="text-sm font-medium text-muted hover:text-primary transition-colors">
              Contact
            </a>
            <a 
              href="https://github.com/FebArch" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 bg-primary text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <FiGithub size={16} strokeWidth={2.5} />
              GitHub
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="text-muted hover:text-primary transition-colors"
            >
              {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-muted hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-surface/50 bg-background px-6 py-6 space-y-6 transition-colors duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-muted hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-6 flex flex-col gap-4 border-t border-surface/50">
            <a href="#contact" className="text-base font-medium text-muted hover:text-primary transition-colors">
              Contact
            </a>
            <a 
              href="https://github.com/yourusername" 
              className="flex items-center justify-center gap-2 bg-primary text-background px-4 py-3 rounded-full text-sm font-medium transition-colors"
            >
              <FiGithub size={18} strokeWidth={2.5} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;