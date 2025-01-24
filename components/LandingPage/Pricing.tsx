"use client";

import { useMediaQuery } from "../../hooks/use-media-query";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import ContainerLayout from "../../Layouts/ContainerLayout";

const plans = [
  {
    name: "STARTER",
    price: "24.99",
    yearlyPrice: "19.99", // 20% off
    period: "per month",
    features: [
      "Basic Financial Insights",
      "Expense Tracking",
      "Cash Flow Forecasting",
      "Access to Shopify Integration",
      "Access to Plaid Integration",
      "AI Assistant",
    ],
    description: "Perfect for small businesses getting started",
    buttonText: "Join Waitlist",
    href: "/waitlist",
  },
  {
    name: "PRO",
    price: "49.99",
    yearlyPrice: "39.99", // 20% off
    period: "per month",
    features: [
      "Advanced Analytics",
      "Customized Reporting",
      "Multi-User Collaboration",
      "Cash flow forecasting",
      "Predictive Insight",
      "Plus Everything in Starter",
    ],
    description: "Ideal for growing businesses",
    buttonText: "Join Waitlist",
    href: "/waitlist",
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "SPEAK TO SALES",
    features: [
      "Dedicated Account Manager",
      "Integration with Additional Data Sources",
      "Advanced Cash Flow Forecasting with Scenario Planning",
      "Custom AI Assistant with Industry-Specific Insights",
      "Advanced Insights & Analytics",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "mailto:sales@reelin.ai",
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#2B2E2F", "#4A4D4E", "#828282", "#FFFFFF"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="w-full bg-[#2B2E2F] py-[120px]" id="pricing">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center flow-hide">
          <h1
            className="text-white text-center font-bold text-[28px] sm:text-[32px] lg:text-[56px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Flexible Pricing Plans
          </h1>
          <p
            className="max-w-[604px] w-full mx-auto sm:mt-6 mt-4 text-sm sm:text-lg font-light text-center text-white"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Choose the plan that suits your e-commerce needs. We offer Starter,
            Pro, and Enterprise plans.
          </p>

          <div className="flex justify-center mb-10 mt-8">
            <label className="relative inline-flex items-center cursor-pointer">
              <Label className="text-white">
                <Switch
                  ref={switchRef as any}
                  checked={!isMonthly}
                  onCheckedChange={handleToggle}
                  className="relative"
                />
              </Label>
            </label>
            <span className="ml-2 font-semibold text-white">
              Annual billing <span className="text-gray-400">(Save 20%)</span>
            </span>
          </div>

          <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full flow-hide">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 1 }}
                whileInView={
                  isDesktop
                    ? {
                        y: 0,
                        opacity: 1,
                        x: 0,
                        scale: 1.0,
                      }
                    : {}
                }
                viewport={{ once: true }}
                transition={{
                  duration: 1.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: 0.4,
                  opacity: { duration: 0.5 },
                }}
                className="rounded-[8px] p-8 relative bg-greyish flex flex-col"
              >
                <h1 className="text-sm sm:text-lg font-semibold text-[#828282]">
                  {plan.name}
                </h1>

                <div className="sm:mt-6 mt-4 flex items-end gap-x-2">
                  {plan.price === "Custom" ? (
                    <h1 className="text-customBlack font-bold text-[28px] sm:text-[32px] lg:text-[48px]">
                      {plan.price}
                    </h1>
                  ) : (
                    <NumberFlow
                      value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }}
                      willChange
                      className="text-customBlack font-bold text-[28px] sm:text-[32px] lg:text-[48px]"
                    />
                  )}
                </div>

                <h1 className="text-sm sm:text-lg font-semibold mt-4 text-[#828282]">
                  {plan.period}
                </h1>

                <div className="mt-12 flex flex-col space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex space-x-3 items-center">
                      <Check className="h-4 w-4 text-gray-600" />
                      <p className="text-base text-customBlack">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.href}
                  target={plan.name === "ENTERPRISE" ? "_blank" : undefined}
                  rel={plan.name === "ENTERPRISE" ? "noopener noreferrer" : undefined}
                  className="w-full rounded-[6px] py-4 px-8 text-base mt-24 text-center border-[2px] hover:bg-white hover:text-[#2B2E2F] border-[#2B2E2F] text-[#2B2E2F]"
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Pricing;
