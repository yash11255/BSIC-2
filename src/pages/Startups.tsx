import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Award } from "lucide-react";
import SuccessStoryModal from "./SuccessStoryModal"; // Ensure this is correctly imported

const startups = [
  {
    name: "BioTech Bihar",
    category: "AgriTech",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    description:
      "Revolutionizing agricultural practices with biotechnology solutions.",
    funding: "₹50L+",
    users: "1000+",
    growth: "300%",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    team: ["Dr. Rajesh Kumar", "Dr. Priya Singh", "Amit Verma"],
    impact:
      "Helped 10,000+ farmers increase crop yield by 40% through sustainable farming practices.",
  },
  {
    name: "TechEd Solutions",
    category: "EdTech",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    description: "Making quality education accessible to rural Bihar.",
    funding: "₹25L+",
    users: "10000+",
    growth: "200%",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    team: ["Sneha Kumari", "Rahul Raj", "Meera Devi"],
    impact: "Provided affordable education to 10,000+ students in rural areas.",
  },
  {
    name: "AI Innovations",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800",
    description: "Developing AI solutions for local businesses.",
    funding: "₹75L+",
    users: "500+",
    growth: "150%",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    team: ["Vikram Singh", "Neha Gupta", "Arun Kumar"],
    impact: "Helped 500+ SMEs automate operations and increase efficiency by 60%.",
  },
];

export default function Startups() {
  const [selectedStory, setSelectedStory] = useState(null);

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
              Our Success Stories
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Meet the innovative startups that are transforming Bihar's
              entrepreneurial landscape
            </p>
          </motion.div>
        </div>
      </div>

      {/* Startups Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedStory(startup)}
            >
              <div className="relative">
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#AC7E4F]">
                  {startup.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
                <p className="text-gray-600 mb-4">{startup.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Users className="w-5 h-5 mx-auto mb-1 text-[#AC7E4F]" />
                    <div className="text-sm font-semibold">{startup.users}</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 mx-auto mb-1 text-[#AC7E4F]" />
                    <div className="text-sm font-semibold">{startup.growth}</div>
                    <div className="text-xs text-gray-500">Growth</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 mx-auto mb-1 text-[#AC7E4F]" />
                    <div className="text-sm font-semibold">{startup.funding}</div>
                    <div className="text-xs text-gray-500">Funding</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Story Modal */}
      {selectedStory && (
        <SuccessStoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </div>
  );
}