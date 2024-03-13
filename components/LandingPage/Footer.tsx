import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Link from "next/link";
import { LinkedIn, Twitter, Instagram, Facebook } from "../../assets/svg";
import { WhiteLogo } from "../../assets/svg";
import bigLogo from "../../assets/png/big-logo.png";
import Image from "next/image";

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
    <div className="w-full flex lg:flex flex-col py-[120px] bg-background flow-hide">
      <div className="w-full  ">
        <ContainerLayout>
          <div className="w-full flex flex-col flow-hide">
            {/* uper session */}
            <div className="w-full flex lg:flex-row flex-col lg:justify-between mb-20 lg:items-start ">
              <div className="w-full lg:w-3/12 flex flex-col justify-start ">
                <span className="mt-[-66px]">
                  <WhiteLogo />
                </span>
                <p className="text-white lg:w-full text-sm  max-w-[358px] mt-[-32px]">
                  Your all-in-one solution for intelligent financial management.
                  Gain clarity, control, and confidence in your e-commerce
                  finances.
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
                    <Link
                      href="https://www.facebook.com/reelinhq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/reelinhq/"
                      target="_blank"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedIn />
                    </Link>
                    <Link
                      href="https://www.x.com/reelinHQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter />
                    </Link>
                    <Link
                      href="https://www.instagram.com/reelinhq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* lower session */}
          </div>
          <div className="my-6 w-full ">
            <Image src={bigLogo} alt="big" />
          </div>
        </ContainerLayout>
      </div>
      <div className="w-full flex bg-background flow-hide ">
        <ContainerLayout>
          <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center py-4 lg:py-0 lg:h-20 border-opacity-50 ">
            <p className="text-sm lg:text-sm text-[#929292] text-opacity-50 text-center lg:text-start">
              Copyright © 2024 Reelin.ai All Rights Reserved
            </p>
            <div className="hidden lg:flex">
              <p className="text-sm lg:text-sm text-[#fff]"></p>
              <span>
                <Link
                  href="#"
                  className="text-sm lg:text-sm text-white text-opacity-50  mr-1 ml-1"
                >
                  Terms and Conditions
                </Link>
              </span>

              <span>
                <Link
                  href="#"
                  className="text-sm lg:text-sm text-white text-opacity-50  ml-1"
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
};

export default Footer;
