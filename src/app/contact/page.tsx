"use client";

import { JSX, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaHome, FaFax, FaMobileAlt, FaGlobe } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="w-full bg-[#E6F0FF] py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5">

        {/* LEFT - CONTACT FORM */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Give Us A Message</h2>
          <div className="w-20 h-1 bg-blue-700 mb-8"></div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="flex items-center gap-3 p-3 border rounded">
              <FaUser className="text-gray-500" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 p-3 border rounded">
              <FaEnvelope className="text-gray-500" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none"
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-3 border rounded">
              <FaPhone className="text-gray-500" size={20} />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full bg-transparent outline-none"
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 p-3 border rounded">
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full bg-transparent outline-none resize-none"
                onChange={handleChange}
              />
            </div>

            <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition">
              SEND EMAIL
            </button>
          </form>
        </div>

        {/* RIGHT - CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Contact Info</h2>
          <div className="w-20 h-1 bg-blue-700 mb-8"></div>

          <div className="space-y-6">
            <InfoItem
              icon={<FaHome size={24} />}
              text="The Design Themes Inc. Mary Jane St, Dhaka 1217 Bangaldesh."
            />

            <InfoItem icon={<FaPhone size={24} />} text="+88 019 12 83 33 22" />
            <InfoItem icon={<FaFax size={24} />} text="+88 019 12 83 33 22" />
            <InfoItem icon={<FaMobileAlt size={24} />} text="+91 12345 67890" />
            <InfoItem icon={<FaEnvelope size={24} />} text="super@email.com" />
            <InfoItem icon={<FaGlobe size={24} />} text="google.com" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoProps {
  icon: JSX.Element;
  text: string;
}

function InfoItem({ icon, text }: InfoProps) {
  return (
    <div className="flex items-center gap-4 text-gray-700">
      <div className="text-blue-700">{icon}</div>
      <p>{text}</p>
    </div>
  );
}
