import React,{useState} from 'react'

import Image from 'next/image';
import Link from 'next/link';
import {FaBars} from "react-icons/fa"
import { useRouter } from 'next/router';
import bars from "../../assets/svg/bars.svg"
import { BlackLogo } from '../../assets/svg';
const styles = {
    active: "",
    nonactive : ""
}
const MobileNav = ({present} : any ) => {
    const [show, setShow] = useState(false);
    const router = useRouter();
    return (
      <div>
        <div className="w-full bg-white pt-4 fixed top-0 nav-index  left-0 right-0 flex flex-col md:hidden overflow-x-hidden">
          <div className="w-full flex items-center justify-between px-4 h-[65px]">
            <Link href="/">
              <BlackLogo />
            </Link>

            <div className="w-fit" onClick={() => setShow(!show)}>
              <FaBars className="text-customBlack text-2xl" />
            </div>
          </div>

          {show && (
            <div className="bg-white w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 h-[90vh] ">
              <div className="flex flex-col w-full px-4 mt-8 space-y-4">
                <div className="w-full py-2 " onClick={() => setShow(false)}>
                  <Link
                    href="#why"
                    className="text-[#4f4f4f] text-lg font-[500]"
                  >
                    Features
                  </Link>
                </div>
                <div className="w-full py-2 " onClick={() => setShow(false)}>
                  <Link
                    href="#pricing"
                    className="text-[#4f4f4f] text-lg font-[500]"
                  >
                    Pricing
                  </Link>
                </div>
                <div className="w-full py-2 " onClick={() => setShow(false)}>
                  <Link
                    href="#feature"
                    className="text-[#4f4f4f] text-lg font-[500]"
                  >
                    Testimonials
                  </Link>
                </div>
                <div className="w-full py-2 " onClick={() => setShow(false)}>
                  <Link
                    href="#feature"
                    className="text-[#4f4f4f] text-lg font-[500]"
                  >
                    Blog
                  </Link>
                </div>
                <div className="w-full py-2 " onClick={() => setShow(false)}>
                  <Link
                    href="#contact"
                    className="text-[#4f4f4f] text-lg font-[500]"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="w-full flex items-center space-x-4 pt-20 ">
                  <Link
                    href="/waitlist"
                 
                    className="w-auto  px-8 py-4 border border-customBlack text-customBlack flex items-center justify-center rounded-[6px] "
                  >
                    Join waitlist
                  </Link>
                
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default MobileNav
