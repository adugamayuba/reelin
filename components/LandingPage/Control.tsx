import React from "react";
import Image from "next/image";
import con from "../../assets/png/control-img.png";
const Control = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  w-full  flow-hide ">
      <div className="w-full flex items-center justify-center   bg-[#D5FD89] py-12 md:py-0">
        <div className="w-full max-w-[370px] mx-auto flex flex-col">
          <h1
            className="text-customBlack text-sm font-light"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Identify cost-saving opportunities
          </h1>
          <h1
            className="text-customBlack mt-3 font-bold text-[28px] sm:text-[32px] lg:text-[48px] "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Expense Control
          </h1>
          <p
            className="text-customBlack text-sm md:text-lg font-light mt-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Identify cost-saving opportunities and streamline your expenses.
          </p>
        </div>
      </div>
      <div className="w-full ">
        <Image
          src={con}
          alt="control image"
          data-aos="zoom-in"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default Control;
