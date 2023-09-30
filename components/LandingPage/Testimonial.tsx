import React from "react";
import Image from "next/image";
import picA from "../../assets/png/pic1.png";
import boy from "../../assets/png/test-boy.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SingleTest from "./SingleTest";
const Testimonial = () => {
  return (
    <div className="w-full testimonial-bg max-w-[1600px] mx-auto overflow-x-hidden flex flex-col py-10">
      <h1 className="text-center   lg:text-[40px] lg:leading-[120%] font-semibold text-2xl ">
        Testimonials
      </h1>
      <p className="text-center w-11/12 lg:w-8/12 2xl:w-1/2 mx-auto mt-4 text-base  lg:text-2xl ">
        These testimonials reflect the success stories and positive experiences
        shared by our interns, professionals, and employers. Join our platform
        and become a part of our growing community of individuals unlocking
        their potential and making remarkable strides in their careers.
      </p>
      {/* test sessions */}
      <div className="w-full lg:flex mt-20  justify-between hidden   ">
        <div className="w-2/12 h-[296px] pr-10 flex flex-col justify-center bg-white rounded-r-[8px] shadow-lg shadow-[#efefef] ">
          <p className=" text-lg italic text-[#525252] mt-[10px] ">LA</p>
          <p className="mt-4 text-sm  text-[#525252] ">
            I couldn't have asked for a better internship experience. The
            platform connected me with a cutting-edge tech company that aligned
            perfectly with my interests.”
          </p>
        </div>
        {/* start */}
        <div className=" lg:w-7/12 2xl:w-7/12 bg-white flex space-x-20 items-center justify-between rounded-[8px] shadow-lg shadow-[#efefef]">
          <div className="w-full space-x-12 flex h-[296px] ">
            <div className="lg:w-4/12 2xl:w-3/12">
              <Image alt="sh" src={picA} className="w-full  " />
            </div>

            <div className="lg:w-7/12 2xl:w-8/12 flex flex-col pr-6">
              <p className="mt-4 text-sm  text-[#525252] ">
                "I couldn't have asked for a better internship experience. The
                platform connected me with a cutting-edge tech company that
                aligned perfectly with my interests. I gained hands-on
                experience, expanded my skill set, and built valuable
                connections. It was a stepping stone towards a successful career
                in the tech industry.”
              </p>
              <p className=" text-2xl font-bold text-[#525252] mt-[10px] "></p>
              <p className=" text-lg italic text-[#525252] mt-[10px] "></p>
            </div>
          </div>
        </div>
        {/* ######### end#################3 */}
        <div className="w-2/12 h-inherit  ">
          <Image src={boy} alt="bi" className="" width={boy.width} />
        </div>
      </div>
      <div className="flex flex-col lg:hidden mt-8">
        <SingleTest />
      </div>
      <div className="w-full lg:flex justify-center mt-8 lg:mt-20 flex">
        <div className="w-10/12  lg:w-3/12 mx-auto flex justify-between">
          <IoIosArrowBack className="text-primary text-2xl" />
          <div className="w-6/12 flex items-center space-x-3 lg:space-x-4 justify-center ">
            <div className="w-4 h-4 rounded-full cursor-pointer bg-[#C7C7C7]" />
            <div className="w-4 h-4 rounded-full cursor-pointer bg-primary" />
            <div className="w-4 h-4 rounded-full cursor-pointer bg-[#C7C7C7]" />
            <div className="w-4 h-4 rounded-full cursor-pointer bg-[#C7C7C7]" />
          </div>
          <IoIosArrowForward className="text-primary text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

/* <p className="mt-10 text-xs text-[#525252] ">July 8, 2023</p> */
