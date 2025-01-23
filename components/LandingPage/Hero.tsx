import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import home from "../../assets/png/Home.png";
import { Squares } from "../../components/Squares";
import { Button } from "../../components/ui/moving-border";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#004225] to-[#005c34] min-h-screen">
        {/* Animated Squares Background */}
        <div className="absolute inset-0 w-full h-full">
          <Squares
            direction="diagonal"
            speed={0.5}
            borderColor="rgba(255,255,255,0.1)"
            squareSize={50}
            hoverFillColor="rgba(255,255,255,0.1)"
            className="opacity-50"
          />
        </div>

        <ContainerLayout>
          <div className="w-full flex flex-col items-center text-center relative z-10 pt-20 lg:pt-24">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Your Shopify Store's AI-Powered Command Center
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Turn your store data into intelligent decisions with AI-driven insights, forecasting, and smart alerts
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/waitlist">
                  <Button 
                    borderRadius="1.75rem"
                    className="bg-white/90 text-[#004225] text-xl font-semibold hover:scale-105 transition-transform duration-300"
                    containerClassName="!w-[240px] !h-[72px]"
                    borderClassName="bg-[radial-gradient(var(--emerald-500)_25%,transparent_65%)]"
                    duration={1200}
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ContainerLayout>

        {/* Dashboard Preview with Scroll Animation */}
        <div className="relative -mt-12">
          <ContainerScroll
            titleComponent={
              <div className="text-center mb-6">
                <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-3">
                  Powerful Analytics at Your Fingertips
                </h2>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  Get real-time insights and AI-powered forecasting for your Shopify store
                </p>
              </div>
            }
          >
            <div className="px-4 lg:px-8">
              <Image
                src={home}
                alt="Reelin Dashboard"
                className="w-full h-full object-cover object-center rounded-lg shadow-2xl"
                priority
              />
            </div>
          </ContainerScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;
