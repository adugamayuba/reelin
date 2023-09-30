import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import photo from "../../assets/svg/skill-up.svg"
import Link from 'next/link'
const Skills = () => {
  return (
    <div className="w-full bg-white my-20">
      <ContainerLayout>
        <div className="w-full flex items-center lg:flex-row flex-col-reverse">
          <div className="w-full lg:w-5/12 flex flex-col mt-8 lg:mt-0 ">
            <h1 className="text-primary font-semibold text-2xl lg:text-[40px]  lg:leading-[120%] text-center lg:text-start">
              Skill up!
            </h1>
            <p className="text-ash text-base text-justify lg:text-start lg:text-2xl mt-4">
              Discover our comprehensive internship training tracks designed to
              enhance your skills and boost your career prospects. From
              technical proficiency to professional development, choose from a
              range of specialized tracks tailored to your interests. Unlock
              your full potential and gain a competitive edge in the
              ever-evolving job market.
            </p>
            <Link
              href="https://bit.ly/iv-reg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit h-[48px] px-12 py-6 bg-primary text-white flex items-center justify-center rounded-[8px] mt-6 cursor-pointer"
            >
              Register
            </Link>
          </div>
          <div className="w-full lg:w-7/12 flex justify-center">
            <Image
              src={photo}
              alt="photo"
              width={photo.width}
              height={photo.height}
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Skills
