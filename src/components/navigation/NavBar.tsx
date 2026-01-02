import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'About Us', path: 'About' },
    { name: 'Services', path: 'Services' },
    { name: 'Projects', path: 'Projects' },
    { name: 'Contact', path: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+96812345678" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+968 1234 5678</span>
            </a>
            <a href="mailto:info@alimtiyaz.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@alimtiyaz.com</span>
            </a>
          </div>
          <p className="text-slate-400">Professional Kitchen & Laundry Solutions</p>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ease-out ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <nav className={`max-w-7xl mx-auto px-6 transition-all duration-200 ease-out ${scrolled ? 'py-2' : 'py-4'
          }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transition-all duration-200 ease-out ${scrolled ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                <span className={`text-white font-bold transition-all duration-200 ease-out ${scrolled ? 'text-base' : 'text-lg'
                  }`}>AI</span>
              </div>
              <div className="transition-all duration-200 ease-out">
                <h1 className={`font-bold text-slate-900 tracking-tight transition-all duration-200 ease-out ${scrolled ? 'text-lg' : 'text-xl'
                  }`}>AL IMTIYAZ</h1>
                <p className={`text-slate-500 tracking-wide transition-all duration-200 ease-out ${scrolled ? 'text-[10px]' : 'text-xs'
                  }`}>PROFESSIONAL SOLUTIONS</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={createPageUrl(link.path)}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                to={createPageUrl('Contact')}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={createPageUrl(link.path)}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('Contact')}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 bg-blue-600 text-white text-center rounded-lg font-medium mt-4"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}