"use client";

import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import Link from "next/link";
import { LinkedIn, Twitter, Instagram, Facebook } from "../../assets/svg";
import { WhiteLogo } from "../../assets/svg";
import bigLogo from "../../assets/png/big-logo.png";
import Image from "next/image";

const navigation = [
  {
    id: 'why',
    name: "Features",
  },
  {
    id: 'testimonial',
    name: "Testimonial",
  },
  {
    id: 'pricing',
    name: "Pricing",
  },
];

const terms = [
  {
    url: "/blog",
    name: "Our Blog",
  },
  {
    url: "/faqs",
    name: "FAQs",
  },
  {
    url: "/privacy",
    name: "Privacy Policy",
  },
];

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1B4332] pt-20 pb-8">
      <ContainerLayout>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a onClick={(e) => scrollToSection(e, 'hero')} className="cursor-pointer">
              <WhiteLogo />
            </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your all-in-one solution for intelligent financial management.
              Gain clarity, control, and confidence in your e-commerce finances.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              {terms.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/reelinhq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.linkedin.com/company/reelinhq/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <LinkedIn />
              </Link>
              <Link
                href="https://www.x.com/reelinHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.instagram.com/reelinhq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Banner */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <Image src={bigLogo} alt="Reelin" className="max-w-full h-auto" />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 Reelin.ai All Rights Reserved
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
