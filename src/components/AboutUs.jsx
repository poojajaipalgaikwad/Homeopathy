// src/components/AboutUsSection.js
import React from 'react';
import Image from 'next/image';
import { ShieldCheckIcon, TargetIcon, DropletIcon, LeafIcon } from 'lucide-react'; 
import { assets } from '../../assets/assets'
// --- Component Start ---
const AboutUsSection = () => {
    // --- Responsive Image Setup ---
    // Ensure your founder photo is in the public directory and the path is correct

    const pillars = [
        {
            title: "Personalized Care",
            description: "We treat the person, not just the disease. Your remedy is unique to you.",
            icon: ShieldCheckIcon,
        },
        {
            title: "Root-Cause Focus",
            description: "We delve deep to address the underlying cause, promoting lasting wellness.",
            icon: TargetIcon, 
        },
        {
            title: "Natural Remedies",
            description: "Gentle, safe, and non-toxic treatments suitable for the whole family.",
            icon: DropletIcon, 
        },
    ];

    return (
        <section className="bg-gray-50 py-12 md:py-20 lg:py-24"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Header / Logo Section (Responsive Centering) --- */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="flex items-center justify-center text-xl font-semibold text-gray-700 space-x-2">
                       <LeafIcon className="w-6 h-6 text-green-600" />
                       <span className="text-2xl font-serif">Dr. Prachi's Homeopathy Clinic</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Homeopathic Consultant family Physician</p>
                </div>

                {/* --- Main Content Container --- */}
                <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-lg"> 
                    <h1 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12 md:mb-16">
                        Our Story & Your Journey to Wellness
                    </h1>
                    
                    {/* --- Founder / Story Block (KEY RESPONSIVE AREA) --- */}
                    {/* On mobile (default), it's a column. On medium screens (md), it's a row. */}
                    <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-12 mb-12 md:mb-16">
                        
                        {/* Image Block (Resized for Mobile and Desktop) */}
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 mb-6 md:mb-0">
                            {/* The circle and image size adjust using sm: utilities */}
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-green-500/50 flex items-center justify-center bg-gray-200 mx-auto">
                                <Image
                                    src={assets.Profile}
                                    alt="Founder Photo"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <p className="text-sm text-center text-gray-500 mt-2 font-medium">
                                [Dr. Prachi, Homeopathic Consultant]
                            </p>
                        </div>

                        {/* Text Block (Full width on mobile, aligns right on desktop) */}
                        <div className="text-center md:text-left"> 
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 border-b pb-2 border-green-200 inline-block md:inline-block">
                                Healing from the Roots: A Homeopathic Approach to Family Wellness.
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                              We believe true healing comes from within. At <b>Dr. Prachi's Clinic,</b> we partner with you to uncover the root cause of illness, specializing in the specific needs of women and children. Our approach provides safe, gentle, and effective relief for chronic and acute conditions, from hormonal imbalances to recurrent childhood colds. Experience the difference of individualized homeopathic care designed for your sustainable wellness.  
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4 italic text-sm sm:text-base">
                                "Our goal is simple: to empower your body's innate ability to heal, gently and permanently."
                            </p>
                        </div>
                    </div>

                    {/* --- Three Pillars of Care (KEY RESPONSIVE AREA) --- */}
                    <div className="pt-6 md:pt-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700 mb-8">
                            Why Choose Us?
                        </h2>
                        
                        {/* Grid changes from 1 column on mobile to 3 columns on medium screens */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"> 
                            {pillars.map((pillar, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg transition duration-300 hover:shadow-lg border border-green-100">
                                    <pillar.icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mb-3" />
                                    <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">{pillar.title}</h3>
                                    <p className="text-gray-600 text-sm">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- Call to Action (Responsive Centering) --- */}
                    <div className="text-center mt-10 md:mt-16">
                        <a 
                            href="/contact" 
                            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            Book Your Free Consultation
                        </a>
                        <div className="mt-4 text-xs text-gray-500 space-x-2 sm:space-x-4">
                            <span>✅ Confidential & Trusted</span>
                            <span>✅ Online & In-Clinic Options</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;