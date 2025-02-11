import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Target, Rocket, Building2, ChevronRight } from 'lucide-react';

const programs = [
  {
    title: "Incubation Program",
    description: "A 6-month intensive program designed for early-stage startups looking to validate their business model and gain initial traction.",
    duration: "6 months",
    investment: "Up to ₹10L",
    benefits: [
      "Dedicated Mentorship",
      "Seed Funding",
      "Office Space",
      "Legal Support",
      "Network Access"
    ],
    icon: Rocket,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Acceleration Program",
    description: "A 3-month program for growth-stage startups ready to scale their operations and expand market presence.",
    duration: "3 months",
    investment: "Up to ₹25L",
    benefits: [
      "Growth Strategy",
      "Investor Connect",
      "Market Access",
      "Scale Support",
      "Global Network"
    ],
    icon: Target,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Co-Working Space",
    description: "Flexible workspace solutions with all modern amenities and networking opportunities.",
    duration: "Flexible",
    investment: "Starting at ₹2000/month",
    benefits: [
      "High-speed Internet",
      "Meeting Rooms",
      "Event Space",
      "24/7 Access",
      "Community Events"
    ],
    icon: Building2,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function Programs() {
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
              Choose Your Growth Path
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Select the right program tailored to your startup's stage and goals
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-2" />
                      Duration: {program.duration}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-2" />
                      Investment: {program.investment}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Benefits:</h4>
                    {program.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <ChevronRight className="w-4 h-4 mr-2 text-[#AC7E4F]" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-t">
                  <a
                    href="/apply"
                    className="block w-full py-3 px-6 text-center bg-[#AC7E4F] text-white rounded-lg hover:bg-[#8E6A42] transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}