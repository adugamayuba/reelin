import ContainerLayout from "../../Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import home from "../../assets/png/Home.png";
import { Squares } from "../../components/Squares";
import { Button } from "../../components/ui/moving-border";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full relative pb-48 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004225] to-[#005c34]" />
        
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
          <div className="w-full flex flex-col items-center text-center relative z-10 pt-36">
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
                <Link href="/waitlist">
                  <Button 
                    borderRadius="1.75rem"
                    className="bg-white/80 text-[#004225] text-xl font-semibold hover:scale-105 transition-transform"
                    containerClassName="!w-[220px] !h-[70px]"
                    borderClassName="bg-[radial-gradient(var(--emerald-500)_25%,transparent_65%)]"
                    duration={1200}
                  >
                    Join Waitlist
                  </Button>
                </Link>
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
      <div className="h-[30vh] bg-gradient-to-br from-[#004225] to-[#005c34]"></div>
    </div>
  );
};

export default Hero;
