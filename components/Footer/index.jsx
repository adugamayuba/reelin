import React from 'react'
import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from 'next/image';
import Link from 'next/link';
import copy from "../../assets/svg/copyright.svg";
import logo from "../../assets/svg/light-logo.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg"; 
import twitter from "../../assets/svg/twitter.svg"; 
import email from "../../assets/svg/email-logo.svg";
import {BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      {/* upper session */}
      <div className="w-full bg-[#020E20] pt-5 md:pt-0 ">
        <ContainerLayout>
          <div className="w-full flex lg:my-[55px] md:flex-row flex-col">
            {/* first session */}
            <div className="w-full md:w-4/12 flex flex-col">
              <Image
                src={logo}
                width={logo.width}
                height={logo.height}
                alt="image"
              />
              <div className="flex flex-col md:w-8/12 2xl:w-6/12">
                <p className="text-white sat-regular  lg:text-lg mt-[18px]">
                  H10 Eden Garden, Lekki, Lagos.
                </p>
                <Link
                  href="mailto:Contact@lawploy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Contact@lawploy.com
                </Link>
                <Link
                  href="tel:+2348020835264"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  08020835264
                </Link>
                <div className="flex md:justify-between items-center mt-[26px] gap-x-[28px]">
                  <Link
                    href="https://www.facebook.com/Primallp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={facebook}
                      alt="facebook"
                      width={facebook.width}
                      height={facebook.height}
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/lawployltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={twitter}
                      alt="facebook"
                      width={twitter.width}
                      height={twitter.height}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/primallp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <BsLinkedin className="text-white text-xl " />
                  </Link>
                  <Link
                    href="mailto:lawployltd@gmail.com"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={email}
                      alt="facebook"
                      width={email.width}
                      height={email.height}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* other session */}
            <div className="w-full md:w-8/12 grid grid-cols-2 gap-y-4 md:gap-y-0 pb-12 md:pb-0 lg:grid-cols-4 mt-16 md:mt-0">
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1 className="text-white sat-bold  md:text-[22px]">Company</h1>
                <Link
                  href="/About-Lawploy.pdf"
                  target="_blank"
                  download={true}
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  About Us
                </Link>
                <Link
                  href="#faq"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  FAQs
                </Link>
                <Link
                  href="/Contact-Lawploy.pdf"
                  target="_blank"
                  download={true}
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Contact Us
                </Link>
              </div>
              {/* end of a pack */}
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1 className="text-white sat-bold  md:text-[22px]">
                  Features
                </h1>
                <Link
                  href="#"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Hold Briefs
                </Link>
                <Link
                  href="#"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Recruitment
                </Link>
                <Link
                  href="#"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Job Feeds
                </Link>
              </div>
              {/* end of a pack */}
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1 className="text-white sat-bold  md:text-[22px]">Legal</h1>
                <Link
                  href="/Lawploy-Terms-and-Condition-of-Use.pdf"
                  target="_blank"
                  download={true}
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Terms and Condition
                </Link>
                <Link
                  href="/Lawploy-Privacy-Policy.pdf"
                  target="_blank"
                  download={true}
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/Security.pdf"
                  target="_blank"
                  download={true}
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Security
                </Link>
              </div>
              {/* end of a pack */}
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1 className="text-white sat-bold  md:text-[22px]">
                  Follow Us
                </h1>
                <Link
                   href="https://www.linkedin.com/company/primallp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://twitter.com/lawployltd"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Twitter
                </Link>
                <Link
                   href="https://www.facebook.com/Primallp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="text-white sat-regular  lg:text-lg mt-[12px]"
                >
                  Facebook
                </Link>
              </div>
              {/* end of a pack */}
            </div>
          </div>
        </ContainerLayout>
      </div>

      {/* lower session */}

      <div className="flex bg-white justify-center items-center space-x-1 my-[38px]">
        <p className="text-[#1B213E] text-sm md:text-lg sat-regular ">
          Copyright
        </p>
        <Image src={copy} width={copy.width} height={copy.height} alt="copy" />
        <p className="text-[#1B213E] text-lg sat-regular ">
          Lawploy Limited 2023
        </p>
      </div>
    </div>
  );
}

export default Footer
