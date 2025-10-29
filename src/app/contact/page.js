'use client';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { assets } from "../../../assets/assets";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const resp = await axios.post("/api/contact", form);
      if (resp.data.success) {
        setPopup({ type: "success", message: "✅ Message sent successfully!" });
        setForm({ name: "", number: "", email: "", subject: "", message: "" });
      } else {
        setPopup({ type: "error", message: "❌ Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setPopup({ type: "error", message: "⚠️ Error sending message." });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup(null), 3000);
    }
  };

  const handleClearAndRedirect = () => {
    setForm({ name: "", number: "", email: "", subject: "", message: "" });
    setStatus("");
    router.push("/"); // redirect to home
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white relative">

      {/* ❌ Cross button (top right) */}
      <button
        onClick={handleClearAndRedirect}
        className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition z-50"
        title="Close and return home"
      >
        <FaTimes />
      </button>

      {/* 🌀 Full-screen loader */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* ✅ Popup message */}
      {popup && (
        <div
          className={`fixed top-6 right-6 z-50 p-4 rounded-lg text-white shadow-lg ${
            popup.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {popup.message}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* --- LEFT COLUMN: Contact Form --- */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 border border-green-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            We’d love to hear from you! Fill out the form below, and we’ll get in touch shortly.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Mobile Number"
              value={form.number}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>

            {status && (
              <p className="text-center text-sm text-green-700 mt-3">{status}</p>
            )}
          </form>
        </div>

        {/* --- RIGHT COLUMN: Contact Info --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="w-28 h-28 relative mb-4">
            <Image
              src={assets.Logo}
              alt="Clinic Logo"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-3xl font-bold text-gray-900">Visit Our Clinic</h3>
          <p className="text-gray-700 max-w-md">
            Experience personalized homeopathic care that focuses on your complete well-being.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <span>Shubharambh chs.LTD, Plot no 8, Sector 8A, Airoli, Navi Mumbai, Maharashtra 400701</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <a href="tel:+919876543210" className="hover:underline">
                +91 95037 68159
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-green-600 text-xl" />
              <a href="prachimahulkar08@gmail.com" className="hover:underline">
                prachimahulkar08@gmail.com
              </a>
            </p>
          </div>

          <div className="mt-10 w-full md:w-96">
            <Image
              src={assets.clinic}
              alt="Contact Illustration"
              width={400}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
