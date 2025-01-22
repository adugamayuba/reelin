import Link from "next/link";
import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from "next/image"

const Welcome = () => {
  return (
    <div className="w-full flex flex-col relative bg-gradient-to-b from-[#2B2E2F] to-[#2B2E2F] -mt-[15vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#004225] to-[#2B2E2F] opacity-90" />
      <div className="w-full mt-[15vh] relative z-10">
        <ContainerLayout>
          <div className="w-full flex flex-col items-center lg:min-h-[648px] py-4 lg:py-0 justify-center">
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
              Gain Clarity, Control, and Confidence in Your E-Commerce Finances.
            </p>

            <div
              className="mt-12 mx-auto"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link
                href={"/waitlist"}
                // href="https://demo.reelin.ai/register"
                // target="_blank"
                // rel="noopener noreferrer"
                className="w-auto  px-8 py-4 bg-[#D5FD89] text-customBlack flex items-center justify-center rounded-[6px] hover:border-white hover:border hover:text-white hover:bg-transparent "
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}

export default Welcome
