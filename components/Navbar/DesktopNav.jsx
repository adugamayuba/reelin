import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { BlackLogo } from "../../assets/svg";

import { useRouter } from "next/router";


import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 right-0 left-0 z-high w-full h-[85px]  items-center nav-styl hidden md:flex bg-white">
      <ContainerLayout>
        <div className="w-full flex justify-between items-center mt-4">
          <div className="w-fit">
       <BlackLogo />
          </div>
          <div className="w-fit space-x-[50px] flex ">
            <Link
              href="#why"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Contact Us
            </Link>
          </div>
          <div className="w-fit flex items-center  space-x-4   ">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto  px-8 py-4 border border-customBlack text-customBlack flex items-center justify-center rounded-[6px]"
            >
              Login
            </Link>
            <Link
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              className="w-auto  px-8 py-4 bg-[#0e0e0e] text-white flex items-center justify-center rounded-[6px]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
