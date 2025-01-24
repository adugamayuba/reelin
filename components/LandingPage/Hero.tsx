import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import home from "../../assets/png/Home.png";
import shopifySLogo from "../../assets/png/shopify logo.png";
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                      <span className="sr-only">Boost Your Shopify Sales with AI - Dominate Your Market</span>
                      <div className="flex flex-col items-center gap-2">
                        <span aria-hidden="true">Boost Your</span>
                        <div className="flex items-center justify-center gap-3" aria-hidden="true">
                          <div className="flex items-center gap-2">
                            <Image 
                              src={shopifySLogo} 
                              alt="" 
                              width={50} 
                              height={50} 
                              className="mt-1"
                            />
                            <span className="text-4xl font-bold text-white tracking-tighter">
                              <span className="bg-gradient-to-r from-green-200 to-white bg-clip-text text-transparent">
                                hopify
                              </span>
                            </span>
                          </div>
                          <span>Sales with AI</span>
                        </div>
                        <span aria-hidden="true">Dominate Your Market</span>
                      </div>
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                      AI-powered analytics and automation to optimize conversions, reduce costs, and accelerate growth
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