import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Partner 1', image: 'https://i.ibb.co/qMvJpfsp/Group-2.png' },
  { name: 'Sukhi Parivar Foundation', image: 'https://i.ibb.co/kgxXVZgV/Sukhi-Parivar-Foundation-Logo-1.png' },
  { name: 'BJSM', image: 'https://i.ibb.co/V06T4s9m/BJSM-Header-1-1.png' },
  { name: 'USyd', image: 'https://i.ibb.co/FbGVt77P/USyd-Logo-1-1.png' },
];

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {partners.map((partner, index) => (
        <motion.div
          key={partner.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-center items-center"
        >
          <img 
            src={partner.image} 
            alt={partner.name} 
            className="w-32 h-32 object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}