// import Link from "next/link"
// import Button from "./Button"
// import Image from "next/image"
// import TopHeader from "./TopHeader"

// const Navbar = () => {
//   return (
//     <div className="py-2">
//         <TopHeader></TopHeader>
//         <div className="container mx-auto px-20 flex items-center justify-between">
//         <div className="">

//             <Image
//             src="/images/Logo.png"
//             alt="logo"
//             width={90}
//             height={50}
//             />
//         </div>
//         <div className="flex items-center gap-8">
//             <Link href="/">Home</Link>
//             <Link href="/course">Course</Link>
//             <Link href="/product">Product</Link>
//             <Link href="/event">Event</Link>
//             <Link href="/about">About </Link>
//             <Link href="/contact">Contact  </Link>
//         </div>
//         <div className="flex items-center gap-2">
//             <button className="text-[#067FDA]">
//                 register
//             </button>
//             <Button className="rounded-md">
//                 Login
//             </Button>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Navbar

"use client";

// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Button from "./Button";

interface NavItem {
  name: string;
  path: string;
}

const MainHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Event", path: "/event" },
    { name: "About us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full py-2 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="flex flex-wrap container mx-auto px-4 md:px-12 py-2 items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <Link href={"/"}>
            <Image src="/images/Logo.png" alt="logo" width={90} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[16px] font-semibold">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <div key={index} className="relative group">
                <Link
                  href={item.path}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive ? "text-[#1F6CF0]" : "text-gray-700"
                  } hover:text-[#1F6CF0]`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#1F6CF0] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-4">
          <div
            className="text-3xl text-gray-700 hover:text-[#1F6CF0] transition-all duration-300 cursor-pointer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            ☰
          </div>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Link href="/product">
            <Button className="bg-blue-600 hover:bg-[#1557c8] text-white gap-2 flex rounded-md items-center">
              <FaBookOpenReader />
              Browse Our Digital Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white w-full border-t border-gray-200 shadow-md">
          <div className="flex flex-col items-start gap-4 px-6 py-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`w-full py-2 text-gray-700 transition-colors duration-300 ${
                    isActive ? "text-[#1F6CF0]" : "hover:text-[#1F6CF0]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link href="/products" className="w-full mt-2">
              <Button
                className="w-full bg-[#1F6CF0] hover:bg-[#1557c8] text-white gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaBookOpenReader />
                Browse Our E-book
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
