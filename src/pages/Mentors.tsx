import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const mentors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Technology Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    expertise: ["AI/ML", "Cloud Computing", "Tech Strategy"],
    bio: "Former CTO at major tech companies with 20+ years of experience in scaling technology solutions.",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Priya Singh",
    role: "Startup Strategist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    expertise: ["Business Strategy", "Fundraising", "Growth"],
    bio: "Angel investor and startup advisor who has helped 50+ startups raise funding.",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Amit Verma",
    role: "Marketing Expert",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    expertise: ["Digital Marketing", "Brand Building", "Growth Hacking"],
    bio: "Marketing veteran with experience in building brands from scratch to IPO.",
    linkedin: "#",
    twitter: "#",
    website: "#"
  }
];

export default function Mentors() {
  return (
    <div className="pt-20 pb-12">
      {/* Hero Section */}
      <div className="bg-[#AC7E4F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Mentors
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Learn from industry experts who have been there and done that
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                  <p className="text-white/90">{mentor.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{mentor.bio}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={mentor.linkedin}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  </a>
                  <a
                    href={mentor.twitter}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5 text-[#1da1f2]" />
                  </a>
                  <a
                    href={mentor.website}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}