import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import { WhiteLogo } from '../../assets/svg';
import { Squares } from "../../components/Squares";

const MobileNav = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="w-full bg-[#1B4332] fixed top-0 z-50 left-0 right-0 flex flex-col md:hidden border-b border-[#143026] overflow-hidden">
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

        <div className="w-full flex items-center justify-between px-4 h-20 relative z-10">
          <Link href="/">
            <WhiteLogo />
          </Link>

          <button 
            onClick={() => setShow(!show)}
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#143026] rounded-lg transition-colors"
          >
            {show ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {show && (
          <div className="bg-[#1B4332] w-full flex flex-col items-start z-50 h-[calc(100vh-5rem)] overflow-y-auto relative">
            {/* Animated Squares Background for Menu */}
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

            <div className="flex flex-col w-full px-4 py-6 space-y-6 relative z-10">
              <Link
                href="#why"
                className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setShow(false)}
              >
                Product
              </Link>
              <Link
                href="#solutions"
                className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setShow(false)}
              >
                Solutions
              </Link>
              <Link
                href="#pricing"
                className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setShow(false)}
              >
                Pricing
              </Link>
              <Link
                href="#resources"
                className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setShow(false)}
              >
                Resources
              </Link>

              <div className="pt-6 border-t border-[#143026] space-y-6">
                <Link
                  href="/login"
                  className="block text-gray-200 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => setShow(false)}
                >
                  Login
                </Link>
                <Link
                  href="/waitlist"
                  className="block w-full px-4 py-2 bg-white text-[#1B4332] rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                  onClick={() => setShow(false)}
                >
                  See a demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
