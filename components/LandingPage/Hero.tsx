import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import home from "../../assets/png/Home.png";
import { Squares } from "../../components/Squares";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full relative pt-32 pb-48 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004225] via-[#005c34] to-[#004225]" />
        
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

        {/* Version Badge */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-2 bg-[#005c34] rounded-full text-sm inline-flex items-center gap-2 text-white">
            New Features Available <span className="ml-1">→</span>
          </div>
        </div>

        <ContainerLayout>
          <div className="w-full flex flex-col items-center text-center relative z-10">
            {/* Main Content */}
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Unlocking Insights, Driving Growth.
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
                Transforming Data into Actionable Insight for Everyday Business Decision.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-[#004225] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Now
                </button>
                <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-[#005c34] transition-colors text-white">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>

      {/* Dashboard Preview - Positioned to overlap */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-5xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={home}
            alt="Reelin Dashboard"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Spacer div to create room for the overlapped dashboard */}
      <div className="h-[15vh] bg-gradient-to-br from-[#004225] via-[#005c34] to-[#004225]"></div>
    </div>
  );
};

export default Hero;
