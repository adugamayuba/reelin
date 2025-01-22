import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import home from "../../assets/png/Home.png";

const Hero = () => {
  return (
    <div className="w-full bg-[#004225] text-white relative">
      {/* Version Badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="px-4 py-2 bg-[#005c34] rounded-full text-sm inline-flex items-center gap-2">
          New Features Available <span className="ml-1">→</span>
        </div>
      </div>

      <ContainerLayout>
        <div className="w-full flex flex-col items-center text-center pt-32 pb-20">
          {/* Main Content */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Unlocking Insights, Driving Growth.
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Transforming Data into Actionable Insight for Everyday Business Decision.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-6 py-3 bg-white text-[#004225] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Now
              </button>
              <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-[#005c34] transition-colors">
                Request a Demo
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={home}
              alt="Reelin Dashboard"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Hero;
