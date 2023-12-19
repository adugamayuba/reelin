import Link from "next/link";
import ContainerLayout from "../../Layouts/ContainerLayout"
import home from "../../assets/png/Home.png"
import Image from "next/image"
const Welcome = () => {
  return (
    <div className="w-full flex flex-col relative ">
      <div
        className="w-full 2xl:w-10/12 max-w-[1036px]  z-0  mx-auto flow-hide border rounded-[24px] bg-[#f7f7f7] mb-6 lg:mb-[-70px]"
   
      >
        <Image
          src={home}
          alt="s"
          className=""
          width={home.width}
          height={home.height}
        />
      </div>

      <div className="w-full blue-bg  mt-[10px] flow-hide m ">
        <ContainerLayout>
          <div className="w-full flex flex-col items-center flow-hide lg:min-h-[648px] py-4 lg:py-0 justify-center  ">
            <h1
              className="text-white font-bold sm:text-[32px] text-2xl lg:text-[48px] text-center "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Welcome to Reelin
            </h1>
            <p
              className="text-white text-center mt-6 sm:text-base text-sm"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Your all-in-one solution for intelligent financial management.
            </p>
            <p
              className="text-white text-center mt-2 sm:text-base text-sm"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Gain Clarity, control,and confidence in your finances
            </p>

            {/* <div
              className="mt-12 mx-auto"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link
                href="#"
                // target="_blank"
                // rel="noopener noreferrer"
                className="w-auto  px-8 py-4 bg-[#fff] text-customBlack flex items-center justify-center rounded-[6px] hover:border-white hover:border hover:text-white hover:bg-transparent "
              >
                Get Started
              </Link>
            </div> */}
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}

export default Welcome
