
import ContainerLayout from '../../Layouts/ContainerLayout'

import Image from 'next/image'

import Link from 'next/link'
import heroMini from "../../assets/png/hero-mini.png";
import home from "../../assets/png/Home.png"
const Hero = () => {
  return (
    <div className="w-full  pt-40 pb-20 lg:py-40 flow-hide  bg-greyish">
      <ContainerLayout>
        <div className="w-full flex-col lg:flex-row flex lg:justify-between">
          <div className="w-full lg:w-5/12 flex flex-col">
            <h1 className="text-[#050505] font-bold text-4xl lg:text-[48px] max-w-[565px] lg:leading-[64px] tracking-[-1.28px] ">
              Unlocking Insights, Driving Growth.
            </h1>
            <p className="mt-6 text-lg lg:text-[22px] ">
              Transforming Data into Action for Every Business Decision.
            </p>
            <div className="flex  mt-4 lg:mt-[70px] items-center lg:gap-x-10 gap-3">
              <div className="w-auto">
                <Image
                  src={heroMini}
                  alt=""
                  width={heroMini?.width}
                  height={heroMini?.height}
                />
              </div>
              <div>
                <p className='text-customBlack text-base lg:text-xl  '>
                  Take a deeper dive into your business data with Reelin and
                  discover better insight within seconds.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 mt-10 lg:mt-0">
            <Image src={home} alt='reelin' />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Hero
