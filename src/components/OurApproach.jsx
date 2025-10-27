"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaBrain, FaAppleAlt, FaUserCheck } from "react-icons/fa";

// Data for the 'Our Approach' Cards
const approaches = [
  {
    icon: FaBrain,
    title: "Holistic Wellness",
    subtitle: "Mind-Body Balance",
    desc: "Our approach to holistic wellness emphasizes harmony between mind and body, promoting lasting vitality and emotional balance.",
    gradient: "from-green-200 to-green-100",
  },
  {
    icon: FaLeaf,
    title: "Homeopathic Remedies",
    subtitle: "Natural Healing",
    desc: "We focus on stimulating the body’s innate healing abilities through safe, gentle, and natural homeopathic treatments.",
    gradient: "from-yellow-200 to-yellow-100",
  },
  {
    icon: FaAppleAlt,
    title: "Nutritional Guidance",
    subtitle: "Lifestyle Support",
    desc: "We integrate nutrition and lifestyle guidance to enhance your healing process and sustain long-term health.",
    gradient: "from-pink-200 to-pink-100",
  },
  {
    icon: FaUserCheck,
    title: "Individualized Consultations",
    subtitle: "Personalized Care",
    desc: "Every consultation is tailored to your unique health profile, ensuring customized remedies and personal attention.",
    gradient: "from-blue-200 to-blue-100",
  },
];

// Content for the 'Our Commitment' Section
const commitmentContent = {
  title: "Our Commitment to You",
  text: "At our homeopathic clinic, we offer personalized care focused on holistic healing and patient well-being. Our approach combines in-depth homeopathy knowledge with a deep understanding of individual needs, allowing us to customize treatments effectively. We focus on building strong, trusting relationships with our patients, ensuring they feel genuinely heard and fully supported throughout their healing journey. Discover truly compassionate, personalized care at our clinic.",
};

export default function OurApproach({ id }) {
  return (
    <section
      id={id}
      className="relative py-24 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse mix-blend-multiply"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse mix-blend-multiply"></div>

      {/* Section Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
        <p className="text-gray-700 mb-16 max-w-2xl mx-auto">
          Explore our range of homeopathic treatments designed to provide relief
          from various health concerns and improve overall wellness. Each
          treatment is carefully tailored to individual health needs.
        </p>

        {/* Approach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {approaches.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative rounded-[2.5rem] px-6 pt-16 mb-10 pb-20 flex flex-col items-center shadow-2xl bg-gradient-to-tr ${item.gradient} hover:scale-105 transition-transform duration-500`}
              >
                {/* Icon Circle */}
                <div className="absolute -top-12 w-24 h-24 rounded-full flex items-center justify-center shadow-lg bg-white text-green-600 text-5xl">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm text-green-700 font-medium mb-3">{item.subtitle}</p>
                <p className="text-gray-700 text-base text-center">{item.desc}</p>

                {/* Decorative Highlights */}
                <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-white opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-white opacity-20 blur-2xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* --- Our Commitment Section (Revised Design) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-8xl mx-auto p-12 rounded-[2.5rem] bg-gradient-to-br from-green-100 to-green-50 shadow-2xl text-left relative overflow-hidden"
        >
          {/* Subtle background element for visual consistency */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-2xl pointer-events-none bg-green-400"></div>
          
          <h3 className="text-3xl font-extrabold text-green-800 mb-5 tracking-tight relative z-10">
            {commitmentContent.title} 🌟
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed relative z-10">
            {commitmentContent.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}