import React from "react";

const ContainerLayout = ({ children }) => {
  return (
    <div className="w-full  dark:bg-[#151515] overflow-x-hidden md:overflow-x-auto">
      <div className="2xl:container 2xl:mx-auto">
        <div className=" max-w-[1300px] w-full  px-4 md:px-6 2xl:px-0 mx-auto overflow-x-hidden ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContainerLayout;
