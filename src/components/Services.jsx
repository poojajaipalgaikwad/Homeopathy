'use client';
import { assets } from '../../assets/assets';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link'
// --- Updated Services from Clinic Poster ---
const services = [
  {
    title: "Acute Illness",
    subtitle: "Homeopathic consultation for acute illness such as cold, cough, fever, etc.",
    image: assets.acuteFamily,
  },
  {
    title: "Chronic Illness",
    subtitle: "Long-term management for lifestyle & chronic diseases.",
    image: assets.chronicDesease,
  },
  {
    title: "Female Diseases",
    subtitle: "Hormonal imbalance, PCOD, fertility, and menopause care.",
    image: assets.femaledeseases,
  },
  {
    title: "Children Diseases",
    subtitle: "Holistic treatment for allergies, immunity, and behavioral issues.",
    image: assets.childerenDesease,
  },
  {
    title: "Skin Diseases",
    subtitle: "Gentle homeopathic care for acne, eczema, psoriasis, and more.",
    image: assets.SkinDiseases,
  },
  {
    title: "Kidney Diseases",
    subtitle: "Supportive therapy for renal health & urinary disorders.",
    image: assets.kidneyDiseases,
  },
  {
    title: "Cancer Support",
    subtitle: "Complementary care to improve strength & reduce side effects.",
    image: assets.cancerSupport,
  },
  {
    title: "Gastric Disorders",
    subtitle: "Natural treatment for acidity, IBS, and digestive discomfort.",
    image: assets.gastricDisorders,
  },
  {
    title: "Psychiatric Disorders",
    subtitle: "Anxiety, depression, stress & sleep disorders with gentle remedies.",
    image: assets.PsychiatricDisorders,
  },
  {
    title: "Routine Medical Checkup",
    subtitle: "Comprehensive health evaluations & preventive homeopathy.",
    image: assets.RoutineMedicalCheckup,
  },
  {
    title: "Health Care Services",
    subtitle: "Holistic family wellness through personalized homeopathy.",
    image: assets.HealthCareServices,
  },
  {
    title: "Online Consultation",
    subtitle: "Video or phone consultation from the comfort of your home.",
    image: assets.OnlineConsultation,
  },
];


// --- Swiper Breakpoints ---
const swiperBreakpoints = {
  320: { slidesPerView: 1, spaceBetween: 15 },
  768: { slidesPerView: 2, spaceBetween: 25 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
};

const ServicesSection = ({ id }) => {
  return (
    <section id={id} className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 md:p-10 shadow-lg rounded-xl">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
          <div className="md:w-5/12 mb-6 md:mb-0 relative aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden shadow-md">
            <Image
              src={assets.services}
              alt="Doctor consulting with mother and child"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="md:w-7/12 flex flex-col justify-center">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-gray-800 mb-4">
              Gentle, Personalized Homeopathic Solutions for Your Family's Health 🌿
            </h1>
            <p className="text-lg text-green-700 font-medium">
              Specialized care for acute, chronic, and preventive treatments.
            </p>
          </div>
        </div>

        {/* --- Swiper --- */}
        <div className="mb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={swiperBreakpoints}
            pagination={{ clickable: true }}
            loop={true}
            className="py-10 pb-20"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`flex flex-col items-center justify-center p-6 text-center ${service.color} rounded-lg transition duration-300 hover:shadow-xl hover:bg-green-200 border border-green-500`}
                >
                  <div className="w-56 h-56 mb-4 overflow-hidden flex items-center justify-center bg-white rounded-lg shadow">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={220}
                      height={220}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 px-2">{service.subtitle}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- The Homeopathic Difference --- */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            🌼 The Homeopathic Difference
          </h4>
          <div className="flex flex-wrap justify-center space-x-6 sm:space-x-12 mb-8 text-gray-700">
            <p className="flex items-center space-x-2 text-base mb-2">
              <CircleCheck className="w-5 h-5 text-green-600" />
              <span>No Side Effects</span>
            </p>
            <p className="flex items-center space-x-2 text-base mb-2">
              <CircleCheck className="w-5 h-5 text-green-600" />
              <span>Root-Cause Focused</span>
            </p>
            <p className="flex items-center space-x-2 text-base mb-2">
              <CircleCheck className="w-5 h-5 text-green-600" />
              <span>Personalized for Every Patient</span>
            </p>
          </div>

           <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300 transform hover:scale-105 text-base"
          >
            Book Your Free Consultation 🌿
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
