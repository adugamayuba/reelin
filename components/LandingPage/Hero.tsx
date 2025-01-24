import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import home from "../../assets/png/Home.png";
import shopifyLogo from "../../assets/png/shopify logo.png";
import { Squares } from "../../components/Squares";
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
                  <div className="text-center space-y-6 mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                      <div className="flex flex-col items-center gap-2">
                        <span className="whitespace-nowrap">Your</span>
                        <div className="flex items-center justify-center gap-2 -ml-4">
                          <Image 
                            src={shopifyLogo} 
                            alt="Shopify" 
                            width={80} 
                            height={80} 
                            className="mt-1"
                          />
                          <span>Store's AI-Powered</span>
                        </div>
                        <span>Command Center</span>
                      </div>
                    </h2>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                      Transform your store's performance with AI-powered analytics, real-time insights, 
                      and smart automation to boost sales and growth
                    </p>
                  </div>
                }
              >
                <div className="px-4 lg:px-8 flex justify-center w-full">
                  <Image
                    src={home}
                    alt="Reelin Dashboard"
                    className="w-full max-w-6xl h-auto object-cover rounded-xl shadow-2xl border-2 border-white/20"
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