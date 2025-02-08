import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import { WhiteLogo } from '../../assets/svg';
import { Squares } from "../../components/Squares";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [show, setShow] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShow(false);
    }
  };

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

        <div className="w-full flex items-center justify-between px-4 h-16 relative z-10">
          <Link href="/" className="scale-90">
            <WhiteLogo />
          </Link>

          <button 
            onClick={() => setShow(!show)}
            className="w-12 h-12 flex items-center justify-center text-white hover:bg-[#143026] rounded-xl transition-all active:scale-95"
          >
            <AnimatePresence mode="wait">
              {show ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-[#1B4332] w-full flex flex-col items-start z-50 overflow-hidden relative"
            >
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
                <a
                  onClick={(e) => scrollToSection(e, 'why')}
                  className="text-gray-200 hover:text-white text-base font-medium transition-colors active:scale-95 transform cursor-pointer py-2"
                >
                  Product
                </a>
                <a
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="text-gray-200 hover:text-white text-base font-medium transition-colors active:scale-95 transform cursor-pointer py-2"
                >
                  Pricing
                </a>

                <div className="pt-6 border-t border-[#143026] space-y-4">
                  <Link
                    href="/waitlist"
                    className="block w-full px-6 py-3 bg-white text-[#1B4332] rounded-xl text-base font-semibold hover:bg-gray-100 active:scale-95 transform transition-all text-center"
                    onClick={() => setShow(false)}
                  >
                    Join waitlist
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setShow(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
