import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import { Squares } from "../../components/Squares";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { ShimmerButton } from "../../components/ui/shimmer-button";
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();

  const handleWaitlistClick = () => {
    router.push('/waitlist');
  };

  return (
    <section id="hero" className="relative w-full min-h-[100vh] flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] to-[#143026] rounded-b-[40px]">
        <Squares
          direction="3d"
          speed={0.5}
          borderColor="rgba(255,255,255,0.1)"
          squareSize={50}
          hoverFillColor="rgba(255,255,255,0.1)"
          className="opacity-40"
        />
      </div>

      {/* Main content */}
      <ContainerLayout>
        <div className="relative z-10 flex flex-col max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Content wrapper */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            {/* Left side content */}
            <div className="w-full lg:w-[45%] flex flex-col items-start space-y-12">
              {/* Heading */}
              <div className="space-y-6">
                <h1 className="flex flex-col gap-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.2] tracking-[-0.02em]">
                  <div className="relative inline-block">
                    <TextGenerateEffect 
                      words="Boost Your" 
                      className="font-bold"
                      duration={0.5}
                    />
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#4ADE80] via-[#4ADE80]/70 to-transparent"></div>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src="/assets/png/shopify-logo.png" alt="Shopify Logo" width="48" height="48" />
                    <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Shopify</span>
                  </div>
                  <TextGenerateEffect 
                    words="Sales with AI" 
                    className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80"
                    duration={0.5}
                  />
                  <TextGenerateEffect 
                    words="Dominate Your Market" 
                    className="font-bold text-[#4ADE80]"
                    duration={0.5}
                  />
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-lg font-medium">
                  <TextGenerateEffect 
                    words="Real-time insights, intelligent automation, and data-driven strategies to accelerate your business growth."
                    className="font-medium"
                    duration={0.8}
                  />
                </p>
              </div>

              {/* CTA Button */}
              <div className="w-full sm:w-auto mt-8">
                <ShimmerButton 
                  className="w-full sm:w-auto px-6 py-3 text-base font-semibold rounded-xl"
                  shimmerColor="rgba(74, 222, 128, 0.15)"
                  background="rgba(74, 222, 128, 0.1)"
                  onClick={handleWaitlistClick}
                >
                  <span className="text-white">
                    Join waitlist
                  </span>
                </ShimmerButton>
              </div>
            </div>

            {/* Right side - Dashboard Preview */}
            <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
              {/* Main Dashboard Card */}
              <div className="relative rounded-[16px] sm:rounded-[24px] overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-3 sm:p-4 md:p-6 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4ADE80]/5 to-transparent blur-3xl"></div>
                
                {/* Chart Content */}
                <div className="relative z-10">
                  <div className="h-[160px] sm:h-[180px] mb-4">
                    <div className="grid grid-cols-7 h-full gap-2 sm:gap-3">
                      {[76, 96, 85, 90, 82, 95, 90].map((height, i) => (
                        <div key={i} className="flex flex-col justify-end">
                          <div 
                            className="bg-gradient-to-t from-[#4ADE80] to-[#4ADE80]/40 rounded-lg transition-all duration-300 hover:to-[#4ADE80]/60 hover:scale-105" 
                            style={{height: `${height}%`}}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {[
                      { label: "Revenue", value: "↑ 76%" },
                      { label: "Orders", value: "↑ 96%" },
                      { label: "Customers", value: "↑ 90%" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/[0.03] rounded-xl sm:rounded-2xl p-2 sm:p-4 backdrop-blur-sm border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05]">
                        <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mb-1 sm:mb-2">{stat.label}</p>
                        <p className="text-white text-sm sm:text-base md:text-lg font-semibold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-8 -right-8 bg-white/[0.03] backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/[0.05] transform hover:scale-105 transition-transform duration-300">
                <div className="text-white">
                  <h4 className="text-sm font-medium mb-2">Monthly Growth</h4>
                  <div className="text-[#4ADE80] text-xl font-bold">+25.5%</div>
                </div>
              </div>

              {/* Activity Card */}
              <div className="absolute -bottom-12 right-12 sm:right-16 bg-white/[0.03] backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/[0.05] transform hover:scale-105 transition-transform duration-300">
                <div className="text-white">
                  <h4 className="text-sm font-medium mb-3">Activity Score</h4>
                  <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-[#4ADE80] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Hero;