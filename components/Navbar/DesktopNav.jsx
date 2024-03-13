import {useState} from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { BlackLogo } from "../../assets/svg";

import { useRouter } from "next/router";
import ReUseModal from "../modal/ReuseAble";

import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 z-high w-full h-[85px]  items-center nav-styl hidden md:flex bg-[#CFDBE3]">
      <ContainerLayout>
        <div className="w-full flex justify-between items-center mt-4">
          <div className="w-fit">
            <BlackLogo />
          </div>
          <div className="w-fit space-x-[50px] flex ">
            <Link
              href="#why"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Contact Us
            </Link>
          </div>
          <div className="w-fit flex items-center  space-x-4   ">
            <Link
              href={"https://demo.reelin.ai/login"}
              rel="noopener noreferrer"
              target="_blank"
              className="w-auto  px-8 py-4 hover:bg-[#0047A7] bg-[#0e0e0e] cursor-pointer text-white flex items-center justify-center rounded-[6px]"
            >
              Login
            </Link>
            <Link
              href={"https://demo.reelin.ai/register"}
              className="w-auto  px-8 py-4 border border-customBlack text-customBlack hover:bg-[#0047A7] hover:text-white flex items-center justify-center rounded-[6px] hover:border-none cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </ContainerLayout>
      <ReUseModal open={open} setOpen={setOpen}>
        <div className="w-full flex flex-col items-center">
          <p className="text-customBlack text-lg text-center mb-8">
            Be the first to know when we launch
          </p>
          <Link
            href="https://demo.reelin.ai/register"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto  px-8 py-4 border border-customBlack text-customBlack font-bold flex items-center justify-center rounded-[6px]  hover:bg-[#0047A7] hover:text-white hover:border-none"
          >
            Start Free Trial
          </Link>
        </div>
      </ReUseModal>
    </div>
  );
};

export default Navbar;
