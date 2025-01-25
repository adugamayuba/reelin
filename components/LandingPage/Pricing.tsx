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
    <section id="pricing" className="py-24 bg-gray-50">
      <ContainerLayout>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that best fits your business needs
          </p>

          <div className="flex items-center gap-4 mb-16 justify-center">
            <span className={cn("text-lg font-medium", isMonthly ? "text-gray-900" : "text-gray-500")}>
              Monthly
            </span>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
            <span className={cn("text-lg font-medium", !isMonthly ? "text-gray-900" : "text-gray-500")}>
              Yearly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: index === 1 ? -20 : 0, 
                  opacity: 1,
                  zIndex: index === 1 ? 10 : 0
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={cn(
                  "rounded-2xl p-8 relative flex flex-col border border-gray-100 bg-white min-h-[680px]",
                  index === 1 
                    ? "bg-[#1B4332] text-white shadow-xl transform-gpu hover:scale-[1.02]" 
                    : "shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01]",
                  "transition-all duration-300"
                )}
              >
                <h3 className={cn(
                  "text-2xl font-semibold mb-6",
                  index === 1 ? "text-white" : "text-gray-900"
                )}>
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-8">
                  {plan.price === "Custom" ? (
                    <span className={cn(
                      "text-4xl font-bold",
                      index === 1 ? "text-white" : "text-gray-900"
                    )}>
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className={cn(
                        "text-4xl font-bold",
                        index === 1 ? "text-white" : "text-gray-900"
                      )}>
                        $
                        <NumberFlow
                          value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                          format={{
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }}
                          willChange
                        />
                      </span>
                      <span className={cn(
                        "text-lg",
                        index === 1 ? "text-gray-200" : "text-gray-500"
                      )}>
                        /mnth
                      </span>
                    </>
                  )}
                </div>

                <Link
                  href={plan.href}
                  target={plan.name === "ENTERPRISE" ? "_blank" : undefined}
                  rel={plan.name === "ENTERPRISE" ? "noopener noreferrer" : undefined}
                  className={cn(
                    "w-full rounded-xl py-4 px-8 text-lg font-semibold text-center transition-all transform hover:scale-[1.02] duration-300",
                    index === 1 
                      ? "bg-white text-[#1B4332] hover:bg-gray-50" 
                      : "bg-[#1B4332] text-white hover:bg-[#143026]"
                  )}
                >
                  {plan.buttonText}
                </Link>

                <div className="mt-8 flex flex-col space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={cn(
                        "h-5 w-5 mt-0.5",
                        index === 1 ? "text-gray-200" : "text-gray-400"
                      )} />
                      <span className={cn(
                        "text-lg leading-relaxed",
                        index === 1 ? "text-gray-200" : "text-gray-600"
                      )}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <p className={cn(
                  "mt-auto pt-8 text-sm",
                  index === 1 ? "text-gray-200" : "text-gray-500"
                )}>
                  {plan.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Pricing;
