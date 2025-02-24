import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Users,
  Globe,
  Building2,
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import PartnersGrid from "../components/PartnersGrid";

const locations = [
  {
    city: "Patna",
    image:
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&q=80&w=800",
  },
  {
    city: "Bhagalpur",
    image:
      "https://www.india.com/wp-content/uploads/2019/07/Kuppa-Ghat-Bhagalpur.-.png",
  },
  {
    city: "Muzaffarpur",
    image:
      "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/06/28/99c510ffbd08d3cb981e7c27e222a369_400x400.jpg",
  },
  {
    city: "Gayaa",
    image:
      "https://t4.ftcdn.net/jpg/01/05/09/43/360_F_105094334_5R85auMB9pXijl31Ay9sz6pmh2WLmfAh.jpg",
  },
  {
    city: "Darbhanga",
    image:
      "data:image/jpeg;base64,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",
  },
];

const services = [
  {
    icon: Rocket,
    title: "Incubation & Acceleration",
    description: "Structured programs for different stages",
  },
  {
    icon: Users,
    title: "Mentorship & Guidance",
    description: "Expert industry mentorship",
  },
  {
    icon: Building2,
    title: "Co-Working Space",
    description: "Modern workspace facilities",
  },
  {
    icon: Target,
    title: "Funding Opportunities",
    description: "Access to investors & grants",
  },
  {
    icon: Globe,
    title: "Networking",
    description: "Connect with entrepreneurs",
  },
  {
    icon: Lightbulb,
    title: "Innovation Support",
    description: "Technical & business expertise",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#AC7E4F]/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">
              Bihar's First Startup
              <br />
              Incubation Centre
            </h1>
            <p className="text-2xl mb-8">Supported by Bihar Government</p>
            <Link
              to="/bsic/apply"
              className="inline-flex items-center bg-white text-[#AC7E4F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Stats with Visual Elements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, value: 500, label: "Startups Supported" },
              { icon: Users, value: 50, label: "Active Mentor" },
              { icon: Globe, value: 100000, label: "Community Members" },
            ].map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center p-8 rounded-xl bg-gray-50"
              >
                <Icon className="w-12 h-12 text-[#AC7E4F] mx-auto mb-4" />
                <AnimatedCounter value={Math.floor(value)} suffix="+" />
                <div className="text-gray-600 mt-2">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Provide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-[#AC7E4F] mb-4" />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Locations
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {locations.map(({ city, image }, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={city}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#AC7E4F]/60 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{city}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "CSDP FOOD UNIT",
                image:
                  "https://i.ibb.co/mCHBL5Yd/1.png",
                funding: "₹50L+",
                users: "1000+",
                growth: "300%",
              },
              {
                name: "Shirsthi Mahima Detergent",
                image:
                  "https://i.ibb.co/FkV5kcwH/2.png",
                funding: "₹25L+",
                users: "10000+",
                growth: "200%",
              },
              {
                name: "Kanchan Masala",
                image:
                  "https://i.ibb.co/pBLJ5vvY/4.png",
                funding: "₹75L+",
                users: "500+",
                growth: "150%",
              },
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{story.name}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-[#AC7E4F] font-bold">
                        {story.funding}
                      </div>
                      <div className="text-sm text-gray-600">Funding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#AC7E4F] font-bold">
                        {story.users}
                      </div>
                      <div className="text-sm text-gray-600">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#AC7E4F] font-bold">
                        {story.growth}
                      </div>
                      <div className="text-sm text-gray-600">Growth</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <PartnersGrid />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#AC7E4F]">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#AC7E4F] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
