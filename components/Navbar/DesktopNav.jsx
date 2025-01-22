import {useState} from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { WhiteLogo } from "../../assets/svg";

import { useRouter } from "next/router";
import ReUseModal from "../modal/ReuseAble";

import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 z-high w-full h-20 items-center hidden md:flex bg-[#004225] border-b border-[#005c34]">
      <ContainerLayout>
        <div className="w-full flex justify-between items-center h-full">
          <div className="w-fit">
            <WhiteLogo />
          </div>
          <nav className="flex items-center space-x-8">
            <Link
              href="#products"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="#solutions"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#pricing"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#resources"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Resources
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/waitlist"
              className="px-4 py-2 bg-white text-[#004225] rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              See a demo
            </Link>
          </div>
        </div>
      </ContainerLayout>
      <ReUseModal open={open} setOpen={setOpen}>
        <div className="w-full flex flex-col items-center">
          <p className="text-gray-800 text-lg text-center mb-8">
            Be the first to know when we launch
          </p>
          <Link
            href="/waitlist"
            className="px-6 py-3 bg-[#004225] text-white rounded-lg font-medium hover:bg-[#005c34] transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </ReUseModal>
    </div>
  );
};

export default Navbar;
