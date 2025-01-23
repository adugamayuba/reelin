import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import home from "../../assets/png/Home.png";
import shopifyLogo from "../../assets/png/shopify logo.png";
import { Squares } from "../../components/Squares";
import { Button } from "../../components/ui/moving-border";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#004225] to-[#005c34] min-h-[calc(100vh-64px)] flex items-start justify-center">
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
          <div className="w-full flex flex-col items-center text-center relative z-10 -mt-10">
            {/* Dashboard Preview */}
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
              <ContainerScroll
                titleComponent={
                  <div className="text-center space-y-4 mb-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                      <div className="flex items-center justify-center flex-wrap gap-2">
                        <span>Your</span>
                        <span className="inline-flex items-center">
                          <Image 
                            src={shopifyLogo} 
                            alt="Shopify" 
                            width={80} 
                            height={80} 
                            className="mx-1 -mt-2"
                          />
                          hopify
                        </span>
                        <span>Store's AI-Powered</span>
                        <span>Command Center</span>
                      </div>
                    </h2>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                      Turn your store data into intelligent decisions with AI-driven insights, forecasting, and smart
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

            {/* CTA Button */}
            <div className="pt-2">
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
        </ContainerLayout>
      </div>
    </div>
  );
};

export default Hero;