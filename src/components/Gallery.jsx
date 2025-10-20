"use client";

import Image from "next/image";
import { useState } from "react";
import { assets } from '../../assets/assets'
const images = [
    assets.patient1,
    assets.patient2,
    assets.patient3,
    assets.patient4,
    assets.patient5,
    assets.patient6
];

export default function Gallery({ id }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id={id}  className="py-24 bg-green-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h2>
        <p className="text-gray-700 mb-16 max-w-2xl mx-auto">
          Take a look at our homeopathy clinic, treatments, and happy patients.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelected(img)}
            >
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selected}
              alt="Selected image"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
