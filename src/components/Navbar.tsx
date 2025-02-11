import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-[#AC7E4F]" />
          <span className="text-xl font-bold text-[#AC7E4F]">BSIC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['programs', 'startups', 'mentors', 'about'].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="relative text-gray-700 hover:text-[#AC7E4F] capitalize"
            >
              {location.pathname === `/${item}` && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 h-0.5 -bottom-1 bg-[#AC7E4F]"
                />
              )}
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-md p-4 absolute w-full left-0 top-16"
        >
          <div className="flex flex-col space-y-4">
            {['programs', 'startups', 'mentors', 'about'].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="text-gray-700 hover:text-[#AC7E4F] capitalize"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            to="/apply"
            className="block text-center bg-[#AC7E4F] text-white px-6 py-2 rounded-full mt-4 hover:bg-[#8E6A42] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
