import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-[#AC7E4F]" />
            <span className="text-xl font-bold text-[#AC7E4F]">BSIC</span>
          </Link>
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
          <Link
            to="/apply"
            className="bg-[#AC7E4F] text-white px-6 py-2 rounded-full hover:bg-[#8E6A42] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}