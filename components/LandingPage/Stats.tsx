import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
const Stats = () => {
  return (
    <div className="w-full stat-bg hidden lg:flex ">
      <ContainerLayout>
              <div className="w-full mx-auto lg:w-8/12 2xl:w-7/12 flex justify-between items-center h-[303px] ">
                  {/* start  */}
          <div className="flex flex-col">
            <h1 className="text-center text-white font-bold lg:text-[50px] text-2xl mb-6">
              4,565
                      </h1>
                      <div className="w-[79px] h-[3px] bg-primary mx-auto mb-4"></div>
            <p className="text-white uppercase text-center lg:text-[20px] text-base">INTERNS Trained </p>
            <p className="text-white uppercase text-center lg:text-[20px] text-base"> in the last five years</p>
                  </div>
                  {/* end */}
                  {/* start  */}
          <div className="flex flex-col">
            <h1 className="text-center text-white font-bold lg:text-[50px] text-2xl mb-6">
              2,124
                      </h1>
                      <div className="w-[79px] h-[3px] bg-primary mx-auto mb-4"></div>
            <p className="text-white uppercase text-center lg:text-[20px] text-base">PROJECTS </p>
            <p className="text-white uppercase text-center lg:text-[20px] text-base"> COMPLETED</p>
                  </div>
                  {/* end */}
                  {/* start  */}
          <div className="flex flex-col">
            <h1 className="text-center text-white font-bold lg:text-[50px] text-2xl mb-6">
              3,128
                      </h1>
                      <div className="w-[79px] h-[3px] bg-primary mx-auto mb-4"></div>
            <p className="text-white uppercase text-center lg:text-[20px] text-base">SUCCESS </p>
            <p className="text-white uppercase text-center lg:text-[20px] text-base"> STORIES</p>
                  </div>
                  {/* end */}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Stats
