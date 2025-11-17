"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopHeader: React.FC = () => {
  return (
    <div className="bg-[#1F6CF0] text-white text-sm w-full border-b border-white/10 font-medium">
      <div className="flex flex-col md:flex-row justify-between items-center py-2 container mx-auto px-4 md:px-12 gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start text-white">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <p className="transition-all duration-200 cursor-pointer">
              01912300964
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-white" />
            <p className="transition-all duration-200 cursor-pointer">
              info@edunexi.com
            </p>
          </div>
        </div>

        {/* Right: Language + Login/Register */}
        <div className="flex flex-wrap items-center gap-5 justify-center md:justify-end">
          {/* Language Dropdown */}
          <div className="flex items-center">
            <select
              className="bg-transparent text-white border-0 outline-none cursor-pointer text-sm focus:ring-0"
              defaultValue="English"
            >
              <option disabled className="text-gray-400">
                Language
              </option>
              <option className="text-black">Bangla</option>
              <option className="text-black">English</option>
            </select>
          </div>

          {/* Login / Register */}
          <div className="flex items-center gap-2">
            <Link href="/login">
              <p className="relative cursor-pointer hover:text-white">
                Login
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-sky-500 transition-all duration-300" />
              </p>
            </Link>

            <p>|</p>

            <Link href="/register">
              <p className="relative cursor-pointer">
                Register
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-sky-500 transition-all duration-300" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
