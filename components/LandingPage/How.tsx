import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import picA from "../../assets/png/pic2.png"
import picB from "../../assets/png/picb.png"
import picC from "../../assets/png/pic3.png"

import sideA from "../../assets/png/side1.png"
import sideB from "../../assets/png/side2.png"
import sideC from "../../assets/png/side3.png"

import Image from 'next/image'
const How = () => {
  return (
    <div className="w-full bg-white py-10">
      <ContainerLayout>
        <div className="w-full flex flex-col ">
          <h1 className="text-center   lg:text-[40px] lg:leading-[120%] font-semibold text-2xl ">
            How InternView Works
          </h1>
          <p className="text-center w-11/12  lg:w-1/2 mx-auto mt-4 text-base  lg:text-2xl ">
            Explore the processes and features of this platform.
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[71px] mt-12 gap-y-10 lg:gap-y-0">
            {/* start of a session */}
            <div className="w-full flex flex-col">
              <Image
                src={picA}
                alt="js"
                width={picA.width}
                height={picA.height}
              />
              <p className="mt-6 text-[#4f4f4f]  text-base lg:text-lg  ">
                <span className="text-primary font-semibold">Apply </span>
                for an internship through our platform and unlock a world of
                opportunities. Gain valuable experience, develop essential
                skills, and set yourself apart from the competition.
              </p>
            </div>
            {/* start of a session */}
            {/* start of a session */}
            <div className="w-full flex flex-col">
              <Image
                src={picB}
                alt="js"
                width={picB.width}
                height={picB.height}
              />
              <p className="mt-6 text-[#4f4f4f]  text-base lg:text-lg  ">
                <span className="text-primary font-semibold">Gain </span>
                invaluable hands-on experience working on real-life projects.
                Collaborate with industry professionals, tackle challenges, and
                make a tangible impact. Prepare yourself for the demands of the
                professional world and set the stage for a successful career.
              </p>
            </div>
            {/* start of a session */}
            {/* start of a session */}
            <div className="w-full flex flex-col">
              <Image
                src={picC}
                alt="js"
                width={picC.width}
                height={picC.height}
              />
              <p className="mt-6 text-[#4f4f4f]  text-base lg:text-lg  ">
                <span className="text-primary font-semibold">Prove </span>
                Your Skills, Ace the Test Demonstrate your expertise,
                problem-solving abilities, and the practical knowledge gained.
                Stand out from the competition and secure your spot in the next
                phase of your career journey.
              </p>
            </div>
            {/* start of a session */}
          </div>

          {/* ##################################################################################33 */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[71px]  gap-y-10 lg:gap-y-0 mt-10 lg:mt-[100px]">
            {/* start of a session */}
            <div className="w-full flex flex-col">
              <Image
                src={sideA}
                alt="js"
                width={sideA.width}
                height={sideA.height}
              />
              <p className="mt-6 text-[#4f4f4f]  text-base lg:text-lg  ">
                <span className="text-primary font-semibold">Earn $100 </span>
                for Your Achievements Rewarding your hard work, we offer a $100
                stipend upon successful completion of your internship. Not only
                will you gain valuable experience and skills, but you'll also
                receive a financial reward as a token of appreciation for your
                dedication and contributions.
              </p>
            </div>
            {/* start of a session */}
            {/* start of a session */}
            <div className="w-full flex flex-col">
              <Image
                src={sideB}
                alt="js"
                width={sideB.width}
                height={sideB.height}
              />
              <p className="mt-6 text-[#4f4f4f]  text-base lg:text-lg  ">
                <span className="text-primary font-semibold">Secure </span>
                Your Future - Get Hired Completing an internship on our website
                opens doors to exciting possibilities. Stand out during your
                internship, impress employers, and increase your chances of
                being offered a full-time position. Your dedication and
                performance could be the catalyst for launching a successful
                career.
              </p>
            </div>
            {/* start of a session */}
            {/* start of a session */}
            <div className="w-full flex flex-col">
              <Image
                src={sideC}
                alt="js"
                width={sideC.width}
                height={sideC.height}
              />
              <p className="mt-6 text-[#4f4f4f]  text-base lg:text-lg  ">
                <span className="text-primary font-semibold">Join </span>
                 the Waitlist, Keep Dreaming Big Didn't meet the
                requirements? Don't worry. Join our waitlist for future
                opportunities. We'll keep you informed about upcoming
                internships that match your goals and qualifications. Stay
                determined, and let us help you reach your aspirations. Your
                journey to success continues.
              </p>
            </div>
            {/* start of a session */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default How
