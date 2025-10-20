"use client";
import { assets } from '../../assets/assets'
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer({ id }) {
  return (
    <footer id={id}  className="relative bg-gradient-to-b from-white to-green-50 text-gray-700 font-[Inter]">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center mb-3">
            <Image
              src={assets.Logo}// 🧠 Replace with your logo path
              alt="Homeopathy Logo"
              width={80}
              height={80}
              className="mr-2"
            />
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Dr. Prachy's <span className="text-green-500">Homeopathy</span>
            </h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Embracing the natural path to wellness — we believe in gentle,
            effective, and holistic healing through homeopathy and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 relative inline-block tracking-wide">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-green-400 rounded"></span>
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {["Home", "About Us", "Treatments", "Gallery", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-green-500 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 relative inline-block tracking-wide">
            Contact
            <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-green-400 rounded"></span>
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <strong className="font-medium text-gray-800">Email:</strong>{" "}
              <a
                href="mailto:info@healingnature.com"
                className="hover:text-green-500 transition"
              >
                info@healingnature.com
              </a>
            </li>
            <li>
              <strong className="font-medium text-gray-800">Phone:</strong>{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-green-500 transition"
              >
                +91 98765 43210
              </a>
            </li>
            <li>
              <strong className="font-medium text-gray-800">Address:</strong>{" "}
              Pune, Maharashtra, India
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4 relative inline-block tracking-wide">
            Follow Us
            <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-green-400 rounded"></span>
          </h4>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            Join our community and discover the power of natural healing through
            updates, wellness tips, and remedies.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="p-2 rounded-full border border-gray-300 hover:border-green-500 hover:bg-green-50 hover:scale-110 transition-transform duration-300"
              >
                <Icon size={18} className="text-gray-700 hover:text-green-600" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-green-600">We Care & Cure</span>. All rights reserved.
      </div>
    </footer>
  );
}
