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
      <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#004225] to-[#005c34]">
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
          <div className="w-full flex flex-col items-center text-center relative z-10 pt-36">
            {/* Main Content */}
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Your Shopify Store's AI-Powered Command Center
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                Turn your store data into intelligent decisions with AI-driven insights, forecasting, and smart alerts
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <Link href="/waitlist">
                  <Button 
                    borderRadius="1.75rem"
                    className="bg-white/80 text-[#004225] text-xl font-semibold hover:scale-105 transition-transform"
                    containerClassName="!w-[220px] !h-[70px]"
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
        <div className="relative -mb-20">
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-4xl font-semibold text-white mb-4">
                  Powerful Analytics at Your Fingertips
                </h2>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                  Get real-time insights and AI-powered forecasting for your Shopify store
                </p>
              </>
            }
          >
            <Image
              src={home}
              alt="Reelin Dashboard"
              className="w-full h-full object-cover object-center"
              priority
            />
          </ContainerScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;
