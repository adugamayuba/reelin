import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import { Squares } from "../../components/Squares";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { ShimmerButton } from "../../components/ui/shimmer-button";
import { useRouter } from 'next/router';
import shopifyLogo from '../../assets/png/shopify logo.png';

const Hero = () => {
  const router = useRouter();

  const handleWaitlistClick = () => {
    router.push('/waitlist');
  };

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] to-[#143026] rounded-b-[80px]">
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
        <div className="relative z-10 flex flex-col max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Content wrapper */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left side content */}
            <div className="w-full lg:w-[45%] flex flex-col items-start space-y-10">
              {/* Heading */}
              <div className="space-y-8">
                <h1 className="flex flex-col gap-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
                  <div className="relative inline-block">
                    <TextGenerateEffect 
                      words="Boost Your" 
                      className="font-bold"
                      duration={0.5}
                    />
                    <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#4ADE80] via-[#4ADE80]/70 to-transparent"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                      <Image 
                        src={shopifyLogo}
                        alt="Shopify Logo"
                        fill
                        className="object-contain brightness-[1.2]"
                      />
                    </div>
                    <span className="font-shopify tracking-tight">Shopify</span>
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
                <p className="text-lg sm:text-xl text-gray-300/90 leading-relaxed max-w-xl font-medium">
                  <TextGenerateEffect 
                    words="Real-time insights, intelligent automation, and data-driven strategies to accelerate your business growth."
                    className="font-medium"
                    duration={0.8}
                  />
                </p>
              </div>

              {/* CTA Button */}
              <div className="w-full sm:w-auto">
                <ShimmerButton 
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-2xl"
                  shimmerColor="rgba(74, 222, 128, 0.15)"
                  background="rgba(74, 222, 128, 0.1)"
                  onClick={handleWaitlistClick}
                >
                  <span className="text-white">
                    Join waitlist
                  </span>
                </ShimmerButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 w-full pt-4 sm:pt-6">
                {[
                  { value: "98.5%", label: "Success Rate" },
                  { value: "45.5%", label: "Recovery Rate" },
                  { value: "12.5%", label: "Growth Rate" }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2 sm:space-y-3 text-center">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4ADE80] leading-none">{stat.value}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300/80 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Dashboard Preview */}
            <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
              {/* Main Dashboard Card */}
              <div className="relative rounded-[20px] sm:rounded-[32px] overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-4 sm:p-6 md:p-8 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4ADE80]/5 to-transparent blur-3xl"></div>
                
                {/* Chart Content */}
                <div className="relative z-10">
                  <div className="h-[280px] sm:h-[320px] mb-8">
                    <div className="grid grid-cols-7 h-full gap-3 sm:gap-4">
                      {[76, 96, 85, 90, 82, 95, 90].map((height, i) => (
                        <div key={i} className="flex flex-col justify-end">
                          <div 
                            className="bg-gradient-to-t from-[#4ADE80] to-[#4ADE80]/40 rounded-xl transition-all duration-300 hover:to-[#4ADE80]/60 hover:scale-105" 
                            style={{height: `${height}%`}}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
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
              <div className="absolute -bottom-6 -left-8 bg-white/[0.03] backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/[0.05] transform hover:scale-105 transition-transform duration-300">
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