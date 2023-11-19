import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import { BiSearch } from "react-icons/bi"
import Image from 'next/image'
import heropic from "../../assets/svg/hero-photo.svg"
import Link from 'next/link'
const Hero = () => {
  return (
    <div className="w-full fine-bg py-24 flow-hide ">
      <ContainerLayout>
        <div
          className=" flex flex-col items-center flow-hide"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="font-bold text-customBlack text-[28px] sm:text-[32px] lg:text-[56px] 2xl:text-[80px] text-center lg:w-11/12 2xl:w-11/12 2xl:leading-[88px] block mt-8 2xl:mt-[100px] tracking-[-2%]">
            Unlock a Deeper Understanding of your Business with Reelin
          </h1>
          <p className="xl:text-2xl  text-customBlack font-light text-center mt-6 ">
            Empowering businesses with AI powered operational and financial
            tools
          </p>
          <div className="mt-12 mx-auto">
            <Link
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              className="w-auto  px-8 py-4 bg-[#0e0e0e] hover:bg-[#0047A7] text-white flex items-center justify-center rounded-[6px]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Hero
