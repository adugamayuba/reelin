import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import home from "../../assets/png/Home.png";
import shopifySLogo from "../../assets/png/shopify logo.png";
import { Squares } from "../../components/Squares";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const Hero = () => {
  return (
    <div id="hero" className="relative">
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#1B4332] to-[#143026] min-h-[calc(100vh-64px)] flex items-center justify-center rounded-b-[80px]">
        {/* Animated Squares Background */}
        <div className="absolute inset-0 w-full h-full">
          <Squares
            direction="3d"
            speed={0.5}
            borderColor="rgba(255,255,255,0.1)"
            squareSize={50}
            hoverFillColor="rgba(255,255,255,0.1)"
            className="opacity-50"
          />
        </div>

        <ContainerLayout>
          <div className="w-full flex flex-col items-center text-center relative z-10">
            {/* Dashboard Preview */}
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
              <ContainerScroll
                titleComponent={
                  <div className="text-center space-y-8 mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                      <span className="sr-only">Boost Your Shopify Sales with AI - Dominate Your Market</span>
                      <div className="flex flex-col items-center gap-4">
                        <TextGenerateEffect 
                          words="Boost Your" 
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" 
                          duration={0.5}
                        />
                        <div className="flex items-center justify-center gap-4" aria-hidden="true">
                          <div className="flex items-center gap-3">
                            <Image 
                              src={shopifySLogo} 
                              alt="" 
                              width={60} 
                              height={60} 
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                            />
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter" style={{ fontFamily: 'ShopifySans, -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif' }}>
                              <span className="text-white">
                                Shopify
                              </span>
                            </span>
                          </div>
                          <TextGenerateEffect 
                            words="Sales with AI" 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" 
                            duration={0.5}
                          />
                        </div>
                        <TextGenerateEffect 
                          words="Dominate Your Market" 
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" 
                          duration={0.5}
                        />
                      </div>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
                      <TextGenerateEffect 
                        words="AI-powered analytics and automation to optimize conversions, reduce costs, and accelerate growth"
                        className="text-base sm:text-lg md:text-xl font-medium"
                        duration={0.8}
                        filter={false}
                      />
                    </p>
                  </div>
                }
              >
                <div className="px-4 lg:px-8 flex justify-center w-full">
                  <Image
                    src={home}
                    alt="Reelin Dashboard"
                    className="w-full max-w-5xl h-auto object-cover rounded-2xl shadow-2xl border border-white/20"
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