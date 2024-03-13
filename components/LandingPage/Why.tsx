import Link from "next/link";
import ContainerLayout from "../../Layouts/ContainerLayout"
import ana from "../../assets/png/pa.png";
import cash from "../../assets/png/ai.png";
import expense from "../../assets/png/ri.png";
import Image from "next/image";
const Why = () => {
  return (
    <div
      className="w-full bg-[#f4f4f4] py-[120px]"
      id="why"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <ContainerLayout>
        <div className="w-full flex flex-col items-center flow-hide">
          <h1 className="text-customBlack text-[28px] md:text-[40px] 2xl:text-[56px] font-bold text-center ">
            Why Choose Reelin?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6 flow-hide max-w-[1272px] mx-auto">
            {/* start of a grid */}
            <div className="w-full bg-greyish max-w-[408px] min-h-[514px] rounded-[8px]  flex flex-col pt-6 pb-4 relative">
              <h1 className="text-customBlack text-2xl font-bold px-6 ">
                AI-Powered Analytics
              </h1>
              <p className="text-customBlack mt-4 text-lg font-light px-6">
                Seamlessly combine AI-driven insights and analytics tailored for
                e-commerce merchants.
              </p>
              <div className="w-full flex justify-end absolute bottom-0 right-0 ">
                <Image
                  src={ana}
                  alt="analytics reelin"
                  className="w-[300px] h-auto"
                />
              </div>
            </div>
            {/* end of a grid */}
            {/* start of a grid */}
            <div className="w-full bg-[#D5FD89] max-w-[408px] min-h-[514px] rounded-[8px]  flex flex-col pt-6 pb-4 relative">
              <h1 className="text-customBlack text-2xl font-bold px-6 ">
                Real-time Insights
              </h1>
              <p className="text-customBlack mt-4 text-lg font-light px-6">
                Gain instant access to your financial data and predictions,
                keeping you informed at all times.
              </p>
              <div className="w-full flex justify-end absolute right-0 bottom-0 ">
                <Image
                  src={expense}
                  alt="analytics reelin"
                  className="w-[300px] h-auto"
                />
              </div>
            </div>
            {/* end of a grid */}
            {/* start of a grid */}
            <div className="w-full bg-[#292D32] max-w-[408px] min-h-[514px] rounded-[8px]  flex flex-col pt-6 relative ">
              <h1 className="text-white text-2xl font-bold px-6 ">
                Actionable Intelligence
              </h1>
              <p className="text-white mt-4 text-lg font-light px-6">
                Transform data into actionable insights for informed financial
                decision-making.
              </p>
              <div className="w-full absolute flex justify-end right-0 bottom-0 ">
                <Image
                  src={cash}
                  alt="analytics reelin"
                  className="w-[230px] h-auto"
                />
              </div>
            </div>
            {/* end of a grid */}
          </div>
          <div className="mx-auto mt-[60px]">
            <Link
              href="https://demo.reelin.ai/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto  px-8 py-4  text-customBlack font-bold flex items-center bg-greyish justify-center rounded-[6px]  hover:bg-[#0047A7] hover:text-white hover:border-none"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Why
