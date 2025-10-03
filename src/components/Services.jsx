// src/components/ServicesSection.js

'use client'; // KEEP THIS LINE at the very top for Swiper to function
import { assets } from '../../assets/assets'
import React from 'react';
import Image from 'next/image';

// Import Swiper React components and the AUTOPLAY module
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Added Autoplay module

// Import Swiper styles (Crucial for the slider to look right)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import the Autoplay module CSS

// Import your Lucide Icons
import {
    CircleCheck, 
    HeartHandshakeIcon, 
    FootprintsIcon,     
    LeafIcon,           
    PlusIcon,           
} from 'lucide-react'; 

// --- Data Structure for Services (Remains the same) ---
const services = [
    {
        title: "Women's Wellness",
        subtitle: "Hormonal Harmony, Fertility, & Menopause Support",
        icon: HeartHandshakeIcon,
        color: 'bg-green-100', 
    },
    {
        title: "Children's Immunity",
        subtitle: "Recurrent Colds, Allergies, & Behavioral Support",
        icon: FootprintsIcon,
        color: 'bg-green-100',
    },
    {
        title: "Chronic Disease Management",
        subtitle: "Digestive Issues, Migraines, & Skin Conditions",
        icon: LeafIcon,
        color: 'bg-green-100',
    },
    {
        title: "Acute & Family Care",
        subtitle: "Cough, Cold, Fever, & General Health",
        icon: PlusIcon,
        color: 'bg-green-100',
    },
];

// --- Responsive Breakpoints for Swiper ---
const swiperBreakpoints = {
    // Mobile: Show 1 slide at a time
    320: {
        slidesPerView: 1,
        spaceBetween: 15,
    },
    // Tablet/Desktop: Show 2 slides at a time
    768: {
        slidesPerView: 2,
        spaceBetween: 25,
    },
};

// --- Component Start ---
const ServicesSection = () => {

    return (
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 md:p-10 shadow-lg rounded-xl">
                
                {/* --- Header & Hero Section --- */}
                <div className="flex flex-col md:flex-row md:space-x-8 mb-12">
                    <div className="md:w-5/12 mb-6 md:mb-0 relative aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={assets.Homeopathy}
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
                            Gentle, Personalized Homeopathic Solutions for Your Family's Health.
                        </h1>
                        <p className="text-lg text-green-700 font-medium">
                            Specializing in Root-Cause Healing for Women & Children
                        </p>
                    </div>
                </div>

                {/* --- Services Slider (Swiper Integration) --- */}
                <div className="mb-12">
                    <Swiper
                        // Initialize Autoplay and Pagination modules
                        modules={[Pagination, Autoplay]}
                        
                        // --- AUTOPLAY CONFIGURATION ---
                        autoplay={{
                            delay: 4000, // Time in milliseconds between slides (4 seconds)
                            disableOnInteraction: false, // Continue autoplay after user interaction
                        }}

                        // Set responsive breakpoints (1 slide on mobile, 2 on tablet/desktop)
                        breakpoints={swiperBreakpoints}
                        
                        // Enable pagination dots
                        pagination={{ clickable: true }}
                        
                        // Set loop to true for continuous sliding
                        loop={true} 
                        
                        className="py-10 pb-20" // Added padding-bottom for the pagination dots
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    className={`flex flex-col items-center justify-center p-6 text-center ${service.color} rounded-lg h-56 transition duration-300 hover:shadow-lg hover:bg-green-200 border border-green-200`}
                                >
                                    <service.icon className="w-10 h-10 text-green-800 mb-3" />
                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 px-2">
                                        {service.subtitle}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* --- The Homeopathic Difference & CTA --- */}
                <div className="flex flex-col items-center text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">
                        The Homeopathic Difference
                    </h4>
                    
                    <div className="flex flex-wrap justify-center space-x-6 sm:space-x-12 mb-8 text-gray-700">
                        <p className="flex items-center space-x-2 text-base mb-2">
                            <CircleCheck className="w-5 h-5 text-green-600" />
                            <span>No Side Effects</span>
                        </p>
                        <p className="flex items-center space-x-2 text-base mb-2">
                            <CircleCheck className="w-5 h-5 text-green-600" />
                            <span>Root-Cause Focus</span>
                        </p>
                        <p className="flex items-center space-x-2 text-base mb-2">
                            <CircleCheck className="w-5 h-5 text-green-600" />
                            <span>Individualized Treatment</span>
                        </p>
                    </div>

                    <a 
                        href="/consultation" 
                        className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300 transform hover:scale-105 text-base"
                    >
                        Which Service is Right for Me? Book a Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;