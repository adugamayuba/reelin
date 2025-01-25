import {useState} from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { WhiteLogo } from "../../assets/svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { Squares } from "../../components/Squares";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 right-0 left-0 z-high w-full h-20 items-center hidden md:flex bg-[#1B4332] border-b border-[#143026] overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          direction="right"
          speed={0.3}
          borderColor="rgba(255,255,255,0.1)"
          squareSize={30}
          hoverFillColor="rgba(255,255,255,0.1)"
          className="opacity-30"
        />
      </div>

      <ContainerLayout>
        <div className="w-full flex justify-between items-center h-full relative z-10">
          <div className="w-fit">
            <WhiteLogo />
          </div>
          <nav className="flex items-center space-x-8">
            <Link
              href="#why"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Product
            </Link>
            <Link
              href="#pricing"
              className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div>
            <Link
              href="/waitlist"
              className="px-4 py-2 bg-white text-[#1B4332] rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Join waitlist
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
