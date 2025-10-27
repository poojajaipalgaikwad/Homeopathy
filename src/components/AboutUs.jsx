"use client";
import React from "react";
import Image from "next/image";
import {
  ShieldCheckIcon,
  TargetIcon,
  DropletIcon,
  LeafIcon,
} from "lucide-react";
import { assets } from "../../assets/assets";
import Link from 'next/link' // ✅ Added Link for navigation
const AboutUsSection = ({ id }) => {
  const pillars = [
    {
      title: "Personalized Care",
      description:
        "We treat the person, not just the disease. Your remedy is unique to you.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Root-Cause Focus",
      description:
        "We delve deep to address the underlying cause, promoting lasting wellness.",
      icon: TargetIcon,
    },
    {
      title: "Natural Remedies",
      description:
        "Gentle, safe, and non-toxic treatments suitable for the whole family.",
      icon: DropletIcon,
    },
  ];

  return (
    <section
      id={id}
      className="relative bg-gradient-to-b from-white via-green-50/40 to-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-700">
            <LeafIcon className="w-7 h-7 text-green-600" />
            <span className="text-2xl font-serif">
              Dr. Prachi’s Homeopathy Clinic
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Homeopathic Consultant & Family Physician
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-xl rounded-2xl overflow-hidden border border-green-100 mb-20 transition-transform hover:scale-[1.01] duration-300">
          {/* Left Side: Profile Image & Highlights */}
          <div className="w-full lg:w-1/3 bg-gradient-to-b from-emerald-100 to-green-50 p-8 flex flex-col items-center text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 mb-4">
              <Image
                src={assets.Profile}
                alt="Dr. Prachi Photo"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Dr. Prachi Ganesh Mahulkar Kadam
            </h3>
            <p className="text-green-700 text-sm mt-1 font-medium">
              BHMS (MUHS), PGDEMS, CCH
            </p>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Expert in chronic illnesses, women’s health, child care, and
              lifestyle management. Blending classical homeopathy with modern
              care.
            </p>
            <div className="mt-6">
               <Link
                href="/contact"
                className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold text-sm hover:bg-green-700 shadow-md transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Right Side: About Text */}
          <div className="w-full lg:w-2/3 p-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-green-200 pb-2">
              Healing from the Roots: A Homeopathic Approach to Family Wellness
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>Dr. Prachi’s Homeopathic Clinic</strong>, an
              oasis of holistic healing in Airoli, Navi Mumbai. With years of
              experience, Dr. Prachi has dedicated herself to providing
              compassionate and effective remedies for a wide range of acute and
              chronic health concerns.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From female and child health to skin, gastric, psychological, and
              chronic disorders, our clinic offers comprehensive care designed
              around your unique needs.
            </p>
            <p className="italic text-green-700 font-medium">
              "Our goal is simple: to empower your body’s innate ability to
              heal — gently and permanently."
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our approach blends time-tested homeopathic principles with
            personalized care — ensuring every patient feels heard, understood,
            and guided toward total wellness.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <pillar.icon className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
           <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Book Your Free Consultation
          </Link>
          <div className="mt-4 text-xs text-gray-500 space-x-4">
            <span>✅ Confidential & Trusted</span>
            <span>✅ Online & In-Clinic Options</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
