"use client";

import Image from "next/image";
import testimonial from "../../assets/testimonial.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

const settings = {
 // dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2500, // 2.5 seconds between slides
  pauseOnHover: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


export default function Testimonial({ id }) {
  return (
    <section id={id}  className="py-12 md:py-20 flex flex-col justify-center items-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-3 uppercase">
          Testimonials{" "}
          <span className="inline-block bg-green-400 w-40 h-1 ml-2 align-middle"></span>
        </h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nemo
          exercitationem rerum velit facilis, dignissimos, dicta illum neque
          praesentium assumenda harum voluptatum deserunt incidunt corrupti
          omnis libero quam asperiores laudantium.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-10">
        <Slider {...settings}>
          {testimonial.map((tm, i) => (
            <aside key={i} className="p-4">
              <div className="p-8 rounded-xl bg-gradient-to-r from-emerald-200 to-teal-300 shadow-md flex flex-col justify-between items-center h-full min-h-[380px] transition-transform hover:scale-[1.02] duration-300">
                <svg
                  viewBox="0 -0.5 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <g>
                    <path d="M1,13.969 C0.447,13.969 0,13.534 0,13 C0,12.466 0.447,12.031 1,12.031 C3.757,12.031 5,10.83 5,8.124 L5,6.978 L1.559,6.978 C0.729,6.978 0.053,6.3 0.053,5.467 L0.053,1.511 C0.053,0.677 0.729,-0.001 1.559,-0.001 L5.494,-0.001 C6.324,-0.001 7,0.677 7,1.511 L7,8.123 C7,11.898 4.859,13.969 1,13.969 Z" />
                    <path d="M10,13.969 C9.447,13.969 9,13.534 9,13 C9,12.466 9.447,12.031 10,12.031 C12.757,12.031 14,10.83 14,8.124 L14,6.947 L10.533,6.947 C9.699,6.947 9.021,6.271 9.021,5.441 L9.021,1.505 C9.021,0.675 9.699,-0.001 10.533,-0.001 L14.488,-0.001 C15.322,-0.001 16,0.675 16,1.505 L16,8.123 C16,11.898 13.859,13.969 10,13.969 Z" />
                  </g>
                </svg>
                 <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="text-yellow-400 fill-yellow-400 mx-0.5"
                    />
                  ))}
                </div>
                <p className="text-base text-gray-700 text-center leading-relaxed mb-6">
                  {tm.message}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {tm.name}
                </h3>
                <small className="text-green-700 font-medium text-sm text-center">
                  {tm.location}
                </small>
              </div>
            </aside>
          ))}
        </Slider>
      </div>
    </section>
  );
}
