"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { UserCheck, Award, Smile, Heart } from "lucide-react";

const stats = [
  { title: "Years of Experience", end: 10, icon: <UserCheck size={32} /> },
  { title: "Patients Treated", end: 1500, icon: <Heart size={32} /> },
  { title: "Satisfaction Guarantee", end: 98, icon: <Smile size={32} />, suffix: "%" },
  { title: "Awards & Recognition", end: 15, icon: <Award size={32} /> },
];

export default function StatsCounter({ id }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id={id} 
      ref={ref}
      className="py-16 bg-green-50 flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`bg-white shadow-xl rounded-2xl py-12 px-6 flex flex-col items-center transform transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105`}
          >
            <div className="text-green-600 mb-4">{stat.icon}</div>
            <h3 className="text-4xl font-extrabold text-green-600 mb-2">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2.5}
                  separator=","
                />
              ) : (
                0
              )}
              {stat.suffix ? stat.suffix : ""}
            </h3>
            <p className="text-gray-700 font-medium">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
