import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import { Squares } from "../../components/Squares";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] to-[#143026] rounded-b-[80px]">
        <Squares
          direction="3d"
          speed={0.5}
          borderColor="rgba(255,255,255,0.1)"
          squareSize={50}
          hoverFillColor="rgba(255,255,255,0.1)"
          className="opacity-50"
        />
      </div>

      {/* Main content */}
      <ContainerLayout>
        <div className="relative z-10 flex flex-col min-h-screen max-w-[1400px] mx-auto px-6 lg:px-8 pb-20">
          {/* Content wrapper */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-16 pt-24">
            {/* Left side content */}
            <div className="w-full lg:w-[50%]">
              {/* Heading */}
              <h1 className="text-5xl lg:text-[64px] font-bold text-white mb-5 leading-[1.1] tracking-[-0.02em]">
                <TextGenerateEffect 
                  words="Transform Your Sales Pipeline" 
                  className="font-bold"
                  duration={0.5}
                />
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-300/90 mb-10 leading-relaxed max-w-xl font-medium">
                <TextGenerateEffect 
                  words="Real-time insights, intelligent automation, and data-driven strategies to accelerate your business growth."
                  className="font-medium"
                  duration={0.8}
                />
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="px-8 py-4 bg-[#4ADE80] hover:bg-[#22C55E] text-gray-900 font-semibold rounded-full transition-all text-base">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/10 hover:border-white/20 text-white font-semibold rounded-full transition-all text-base">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-12">
                <div>
                  <h4 className="text-[44px] font-bold text-[#4ADE80] mb-1 leading-none">98.5%</h4>
                  <p className="text-gray-400 text-base">Success Rate</p>
                </div>
                <div>
                  <h4 className="text-[44px] font-bold text-[#4ADE80] mb-1 leading-none">45.5%</h4>
                  <p className="text-gray-400 text-base">Recovery Rate</p>
                </div>
                <div>
                  <h4 className="text-[44px] font-bold text-[#4ADE80] mb-1 leading-none">12.5%</h4>
                  <p className="text-gray-400 text-base">Growth Rate</p>
                </div>
              </div>
            </div>

            {/* Right side - Dashboard Preview */}
            <div className="w-full lg:w-[50%] relative mt-8 lg:mt-0">
              {/* Main Dashboard Card */}
              <div className="relative rounded-[24px] overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-8">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4ADE80]/5 to-transparent blur-3xl"></div>
                
                {/* Chart Content */}
                <div className="relative z-10">
                  <div className="h-[280px] mb-6">
                    <div className="grid grid-cols-7 h-full gap-3">
                      {[76, 96, 85, 90, 82, 95, 90].map((height, i) => (
                        <div key={i} className="flex flex-col justify-end">
                          <div 
                            className="bg-gradient-to-t from-[#4ADE80] to-[#4ADE80]/40 rounded-xl transition-all duration-300 hover:to-[#4ADE80]/60" 
                            style={{height: `${height}%`}}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/[0.02] rounded-xl p-3">
                      <p className="text-gray-400 text-xs mb-1">Revenue</p>
                      <p className="text-white text-base font-semibold">↑ 76%</p>
                    </div>
                    <div className="bg-white/[0.02] rounded-xl p-3">
                      <p className="text-gray-400 text-xs mb-1">Orders</p>
                      <p className="text-white text-base font-semibold">↑ 96%</p>
                    </div>
                    <div className="bg-white/[0.02] rounded-xl p-3">
                      <p className="text-gray-400 text-xs mb-1">Customers</p>
                      <p className="text-white text-base font-semibold">↑ 90%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-6 -right-6 bg-white/[0.02] backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/[0.05]">
                <div className="text-white">
                  <h4 className="text-xs font-medium mb-1">Monthly Growth</h4>
                  <div className="text-[#4ADE80] text-lg font-bold">+25.5%</div>
                </div>
              </div>

              {/* Activity Card */}
              <div className="absolute -bottom-4 -left-6 bg-white/[0.02] backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/[0.05]">
                <div className="text-white">
                  <h4 className="text-xs font-medium mb-2">Activity Score</h4>
                  <div className="w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
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