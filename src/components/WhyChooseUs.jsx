"use client";

import { motion } from "framer-motion";
import { FaUserMd, FaLeaf, FaSmile, FaAward } from "react-icons/fa";

const reasons = [
  {
    icon: FaUserMd,
    title: "Expert Homeopaths",
    desc: "Certified doctors providing gentle and effective care.",
    gradient: "from-green-200 to-green-100",
  },
  {
    icon: FaLeaf,
    title: "Natural Treatments",
    desc: "Personalized, holistic remedies for long-term wellness.",
    gradient: "from-yellow-200 to-yellow-100",
  },
  {
    icon: FaSmile,
    title: "Patient Care",
    desc: "Focused on comfort and positive experience every visit.",
    gradient: "from-pink-200 to-pink-100",
  },
  {
    icon: FaAward,
    title: "Proven Results",
    desc: "Hundreds of happy patients with excellent outcomes.",
    gradient: "from-blue-200 to-blue-100",
  },
];

export default function WhyChooseUs({ id }) {
  return (
    <section id={id}  className="relative py-24 bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-200 rounded-full opacity-20 blur-3xl animate-pulse mix-blend-multiply"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
        <p className="text-gray-700 mb-16 max-w-2xl mx-auto">
          We focus on natural, effective, and holistic homeopathic care that nurtures your health and well-being.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative rounded-[2.5rem] px-6 pt-16 mb-10 pb-20 flex flex-col items-center shadow-2xl bg-gradient-to-tr ${reason.gradient} hover:scale-105 transition-transform duration-500`}
              >
                {/* Icon half outside the card */}
                <div className="absolute -top-12 w-24 h-24 rounded-full flex items-center justify-center shadow-lg bg-white text-green-600 text-5xl">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">{reason.title}</h3>
                <p className="text-gray-700 text-base text-center">{reason.desc}</p>

                {/* Decorative floating blobs */}
                <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-white opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-white opacity-20 blur-2xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
