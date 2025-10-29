import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import Link from 'next/link' 
const Header = ({ id }) => {
  const ScrollTosection = (id) =>{
    const section = document.getElementById(id);
    if(section)
    {
      section.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
  // Icons are simple SVG components for "Natural", "Gentle", "Effective"
const IconCheckCircle = () => (
  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconLeaf = () => (
  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.64 8.35a8 8 0 00-11.3 0L3 12l4.34 4.35a8 8 0 0011.3 0l4.35-4.35-4.35-4.35zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);
const IconDrop = () => (
  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.3a7 7 0 005.1-12c0-3.8-3.3-6.9-7.4-6.9s-7.4 3.1-7.4 6.9c0 2.2 1 4.2 2.6 5.6M12 17c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z" />
  </svg>
);

const featureList = [
  { name: 'Natural', icon: IconLeaf },
  { name: 'Gentle', icon: IconDrop },
  { name: 'Effective', icon: IconCheckCircle },
];

  return (
    <section id={id}  className=" min-h-screen flex items-center 
                        pt-28 pb-10 md:pt-40 md:pb-20 overflow-hidden mx-auto -z-0"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Left Content Column (Code remains the same) */}
          <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left relative py-8 md:py-0" data-aos="fade-left">
            {/* Background Pattern (Hexagons) */}
            <div className="absolute inset-0 z-0 opacity-10 hidden sm:block">
              <div className="absolute -top-10 -left-10 w-96 h-96" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'none\' stroke=\'rgb(20, 83, 45)\' stroke-width=\'1\' d=\'M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z\'/%3E%3C/svg%3E")', backgroundSize: '100px'}}></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-green-900 leading-tight mb-4 relative z-10" >
              Struggling with Women's Health? <br className="hidden sm:inline" />Find Holistic Answers Here
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0 relative z-10">
              We offer personalized, natural remedies for common gynaecological disorders and symptoms—giving you back control without antibiotics or side effects.
            </p>

            {/* Feature Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mb-10 relative z-10">
              {featureList.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center md:flex-row md:space-x-2">
                  <feature.icon />
                  <span className="text-sm font-medium text-gray-700 mt-1 md:mt-0">{feature.name}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
              <Link 
                href="/discover" 
                className="inline-block px-8 py-3 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #7db959, #38761d)' }}
              >
                Discover Your Path to Wellness
              </Link>
              <button 
                onClick={() => ScrollTosection("ourapproach")} 
                className="text-green-700 font-medium hover:text-green-900 transition-colors"
              >
                Learn About Our Approach
              </button>
            </div>
          </div>

          {/* Right Image Column (Code remains the same) */}
          <div className="w-full md:w-1/2 lg:w-6/12 mt-12 md:mt-0 flex justify-center md:justify-end" >
            <div className="relative w-full max-w-xs sm:max-w-lg lg:max-w-none h-auto md:h-[550px]">
              <div 
                   className="w-full h-full bg-gray-100 rounded-2xl shadow-2xl overflow-hidden" 
                   style={{ 
                     borderRadius: '1.5rem', 
                     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                   }}
              >
                <Image
                  src={assets.Homeopathy}
                  alt="Homeopathy practitioner smiling and holding a leaf and a vial"
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Header
