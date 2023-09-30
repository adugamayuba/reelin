import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import logo from "../../assets/svg/group-logo.svg";
import Link from 'next/link';
import { LinkedIn,Twitter,Instagram,Facebook } from '../../assets/svg';
import { BiEnvelope } from "react-icons/bi"
import { BsTelephone } from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
import { ArrowRight, WhiteLogo } from '../../assets/svg';
const navigation = [
  {
    url: "#why",
    name: "Features",
  },
  {
    url: "#",
    name: "Testimonial",
  },
  {
    url: "#",
    name: "Pricing",
  },
 

];
const privacy = [
  {
    url: "#",
    name: "Our Blog",
  },
  {
    url: "#",
    name: "FAQs",
  },

];

const terms = [
  {
    url: "#",
    name: "Our Blog",
  },
  {
    url: "#",
    name: "FAQs",
  },
  {
    url: "#",
    name: "Privacy policy",
  },
];
const Footer = () => {
    return (
      <div className="w-full flex lg:flex flex-col bg-customBlack flow-hide">
        <div className="w-full flow-hide ">
          <ContainerLayout>
            <div
              className="w-full flex flex-col flow-hide"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {/* uper session */}
              <div className="w-full flex lg:flex-row flex-col lg:justify-between my-20">
                <div className="w-full lg:w-3/12 flex flex-col">
                  <WhiteLogo />
                  <p className="text-white lg:w-full text-sm mt-4">
                    Empowering businesses with AI powered operational and
                    financial tools.
                  </p>
                  {/* <div className="mt-6 flex space-x-2 items-center">
                    <p className="text-[#ebebeb] text-base font-medium ">
                      Learn More
                    </p>
                    <ArrowRight />
                  </div> */}
                </div>
                <div className=" w-full lg:w-8/12 flex lg:flex-row  lg:justify-between flex-wrap ">
                  {/* start of a park */}
                  <div className="w-1/2 lg:w-4/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white lg:text-xl">
                      Navigation
                    </h1>
                    <div className="flex flex-col space-y-[18px] mt-7">
                      {navigation?.map((item: any, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={item.url}
                            className="text-white text-sm lg:text-sm"
                          >
                            {item?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  {/* send of a parck */}
                  {/* start of a park */}
                  {/* <div className="w-1/2 lg:w-3/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white lg:text-xl">
                      Privacy Policy
                    </h1>
                    <div className="flex flex-col space-y-[18px] mt-7">
                      {privacy?.map((item: any, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={item.url}
                            className="text-white text-sm lg:text-sm"
                          >
                            {item?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div> */}
                  {/* send of a parck */}
                  {/* start of a park */}
                  <div className="w-1/2 lg:w-4/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white lg:text-xl">
                      Terms of Service
                    </h1>
                    <div className="flex flex-col space-y-[18px] mt-7">
                      {terms?.map((item: any, index: number) => {
                        return (
                          <Link
                            key={index}
                            href={item.url}
                            className="text-white text-sm lg:text-sm"
                          >
                            {item?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  {/* send of a parck */}

                  <div className="w-1/2 lg:w-3/12 flex flex-col mt-8 lg:mt-0">
                    <h1 className="font-bold text-white  lg:text-xl">
                      Follow Us On
                    </h1>
                    <div className="w-full flex items-center space-x-4 mt-5">
                      <Link href="/">
                        <Facebook />
                      </Link>
                      <Link href="/">
                        <LinkedIn />
                      </Link>
                      <Link href="/">
                        <Twitter />
                      </Link>
                      <Link href="/">
                        <Instagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* lower session */}
            </div>
          </ContainerLayout>
        </div>
        <div
          className="w-full flex bg-customBlack flow-hide "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <ContainerLayout>
            <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center py-4 lg:py-0 lg:h-20 border-t border-t-white">
              <p className="text-sm lg:text-sm text-[#fff] text-center lg:text-start">
                Copyright © 2023 Reelin.finance All Rights Reserved
              </p>
              <div className="hidden lg:flex">
                <p className="text-sm lg:text-sm text-[#fff]"></p>
                <span>
                  <Link
                    href="#"
                    className="text-sm lg:text-sm text-white  mr-1 ml-1"
                  >
                    Terms and Conditions
                  </Link>
                </span>

                <span>
                  <Link
                    href="#"
                    className="text-sm lg:text-sm text-white  ml-1"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </div>
          </ContainerLayout>
        </div>
      </div>
    );
}

export default Footer
