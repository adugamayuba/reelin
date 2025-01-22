import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import { WhiteLogo } from '../../assets/svg';

const MobileNav = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="w-full bg-[#004225] fixed top-0 z-50 left-0 right-0 flex flex-col md:hidden border-b border-[#005c34]">
        <div className="w-full flex items-center justify-between px-4 h-20">
          <Link href="/">
            <WhiteLogo />
          </Link>

          <button 
            onClick={() => setShow(!show)}
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#005c34] rounded-lg transition-colors"
          >
            {show ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {show && (
          <div className="bg-[#004225] w-full flex flex-col items-start z-50 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col w-full px-4 py-6 space-y-6">
              <Link
                href="#products"
                className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setShow(false)}
              >
                Products
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

              <div className="pt-6 border-t border-[#005c34] space-y-6">
                <Link
                  href="/login"
                  className="block text-gray-200 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => setShow(false)}
                >
                  Login
                </Link>
                <Link
                  href="/waitlist"
                  className="block w-full px-4 py-2 bg-white text-[#004225] rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-center"
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
