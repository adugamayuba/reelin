import Link from "next/link";
import ContainerLayout from "../../Layouts/ContainerLayout"
import ana from "../../assets/png/ana.png";
import cash from "../../assets/png/cash.png";
import expense from "../../assets/png/expense.png";
import Image from "next/image";
const Why = () => {
  return (
    <div className="w-full bg-[#f4f4f4] py-[120px]" id="why">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center flow-hide">
          <h1
            className="text-customBlack text-[28px] md:text-[40px] 2xl:text-[56px] font-bold text-center "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Why Choose Reelin?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6 flow-hide">
            {/* start of a grid */}
            <div
              className="w-full bg-[#35C8BF] rounded-[8px]  flex flex-col pt-6 pb-4"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h1 className="text-white text-2xl font-bold px-6 ">
                AI-Powered Analytics
              </h1>
              <p className="text-white mt-4 text-lg font-light px-6">
                A unified platform that seamlessly combines AI-driven insights
                and analytics.
              </p>
              <div className="w-full flex justify-end mt-[80px] ">
                <Image src={ana} alt="analytics reelin" />
              </div>
            </div>
            {/* end of a grid */}
            {/* start of a grid */}
            <div
              className="w-full bg-[#4679EF] rounded-[8px]  flex flex-col pt-6 pb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="text-white text-2xl font-bold px-6 ">
                Real-time Insights
              </h1>
              <p className="text-white mt-4 text-lg font-light px-6">
                Gain instant access to your financial data and predictions,
                keeping you informed at all times.
              </p>
              <div className="w-full flex justify-end mt-[64px] ">
                <Image src={expense} alt="analytics reelin" />
              </div>
            </div>
            {/* end of a grid */}
            {/* start of a grid */}
            <div
              className="w-full bg-[#8265F6] rounded-[8px]  flex flex-col pt-6 "
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h1 className="text-white text-2xl font-bold px-6 ">
                Actionable Intelligence
              </h1>
              <p className="text-white mt-4 text-lg font-light px-6">
                Transform data into actionable insights for informed financial
                decision-making.
              </p>
              <div className="w-full flex justify-center mt-[80px] ">
                <Image src={cash} alt="analytics reelin" />
              </div>
            </div>
            {/* end of a grid */}
          </div>
          <div
            className="mx-auto mt-[60px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Link
              href="#why"
              // target="_blank"
              // rel="noopener noreferrer"
              className="w-auto  px-8 py-4 border border-customBlack text-customBlack font-bold flex items-center justify-center rounded-[6px]"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Why
