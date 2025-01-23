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
      <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#004225] to-[#005c34] min-h-[calc(100vh-64px)] flex items-center justify-center">
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
          <div className="w-full flex flex-col items-center justify-center text-center relative z-10 py-16 md:py-20 lg:py-24">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-8">
              {/* Shopify Badge */}
              <div className="flex items-center justify-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-5 py-2.5 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#96DC7D]" fill="currentColor">
                    <path d="M12 0C5.3 0 0 5.3 0 12s5.3 12 12 12 12-5.3 12-12S18.7 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm0-19.2c-4.8 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7 8.7-3.9 8.7-8.7-3.9-8.7-8.7-8.7zm4.3 13l-5.5-3.2c-.3-.2-.5-.5-.5-.9V6.7c0-.6.4-1 1-1s1 .4 1 1v5.3l4.9 2.8c.5.3.6.9.4 1.4-.3.5-.9.7-1.3.4z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">Powered by Shopify</span>
                </div>
              </div>
              
              {/* Hero Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-3xl mx-auto">
                Your Shopify Store's AI-Powered Command Center
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Turn your store data into intelligent decisions with AI-driven insights, forecasting, and smart alerts
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="/waitlist">
                  <Button 
                    borderRadius="1.75rem"
                    className="bg-white/90 text-[#004225] text-lg font-semibold hover:scale-105 transition-transform duration-300"
                    containerClassName="!w-[220px] !h-[64px]"
                    borderClassName="bg-[radial-gradient(var(--emerald-500)_25%,transparent_65%)]"
                    duration={1200}
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mt-16 lg:mt-20">
              <ContainerScroll
                titleComponent={
                  <div className="text-center space-y-4 mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                      Powerful Analytics at Your Fingertips
                    </h2>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                      Get real-time insights and AI-powered forecasting for your Shopify store
                    </p>
                  </div>
                }
              >
                <div className="px-4 lg:px-8 flex justify-center">
                  <Image
                    src={home}
                    alt="Reelin Dashboard"
                    className="w-full h-full object-cover object-center rounded-xl shadow-2xl"
                    priority
                  />
                </div>
              </ContainerScroll>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default Hero;