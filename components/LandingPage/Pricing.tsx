import ContainerLayout from "../../Layouts/ContainerLayout"
import { BlueTick, GreyTick, WhiteTick } from "../../assets/svg";
import Link from "next/link";
const starter = [
  {
    name: "Basic Financial Insights",
    tick: 1,
  },
  {
    name: "Expense Tracking",
    tick: 1,
  },
  {
    name: "Cash Flow Forecasting",
    tick: 1,
  },
  {
    name: "Dedicated Support",
    tick: 2,
  },
  {
    name: "Advanced Analytics",
    tick: 2,
  },
  {
    name: "Integrate with bank",
    tick: 2,
  },
];
const enterprise = [
  {
    name: "Predictive Intelligence",
    tick: 1,
  },
  {
    name: "Dedicated Support",
    tick: 1,
  },
  {
    name: "Multi-User Collaboration",
    tick: 1,
  },
  {
    name: "Cash Flow Forecasting",
    tick: 1,
  },
  {
    name: "Advanced Analytics",
    tick: 1,
  },
  {
    name: "Customized Reporting",
    tick: 1,
  },
];
const pro = [
  {
    name: "Advanced Analytics",
    tick: 3,
  },
  {
    name: "Customized Reporting",
    tick: 3,
  },
  {
    name: "Integrate with bank",
    tick: 3,
  },
  {
    name: "Multi-User Collaboration",
    tick: 2,
  },
  {
    name: "Cash flow forcasting",
    tick: 2,
  },
  {
    name: "Predictive Insight",
    tick: 2,
  },
];

const Pricing = () => {
  return (
    <div className="w-full bg-customBlack py-[120px]" id="pricing">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center flow-hide">
          <h1
            className="text-white text-center font-bold text-[28px] sm:text-[32px] lg:text-[56px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Flexible Pricing Plans
          </h1>
          <p
            className="max-w-[604px] w-full mx-auto sm:mt-6 mt-4 text-sm sm:text-lg font-light text-center text-white"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Choose the plan that suits your business needs. We offer Starter,
            Pro, and Enterprise plans.
          </p>
          <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full flow-hide">
            {/* start of a grid */}
            <div
              className="w-full flex flex-col p-8 rounded-[8px] bg-[#171717] "
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h1 className="text-[#828282] text-sm sm:text-lg font-semibold">
                Starter
              </h1>
              <h1 className="sm:mt-6 mt-4 text-white font-bold text-[28px] sm:text-[32px] lg:text-[48px]">
                $2.99
              </h1>
              <h1 className="text-[#828282] text-sm sm:text-lg font-semibold mt-4">
                PER MONTH
              </h1>
              <div className="mt-12 flex flex-col space-y-3">
                {starter?.map((item: any, index: number) => {
                  return (
                    <div className="flex space-x-3 items-center" key={index}>
                      {item.tick === 1 && <BlueTick />}
                      {item.tick === 2 && <GreyTick />}
                      {item.tick === 3 && <WhiteTick />}
                      <p
                        className={`text-base ${
                          item.tick === 2 ? "text-[#828282]" : "text-white"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/"
                className="w-full hover:bg-white hover:text-black border border-[#E6EAEE] rounded-[6px] py-4 px-8 text-white text-base mt-24 text-center "
              >
                View Pricing
              </Link>
            </div>

            {/* end of a grid */}
            {/* start of a grid */}
            <div
              className="w-full flex flex-col p-8 rounded-[8px] bg-[#0047A7] "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="text-white text-opacity-50 text-sm sm:text-lg font-semibold">
                PRO
              </h1>
              <h1 className="sm:mt-6 mt-4 text-white font-bold text-[28px] sm:text-[32px] lg:text-[48px]">
                $9.99
              </h1>
              <h1 className="text-white text-sm sm:text-lg font-semibold mt-4">
                PER MONTH
              </h1>
              <div className="mt-12 flex flex-col space-y-3">
                {pro?.map((item: any, index: number) => {
                  return (
                    <div className="flex space-x-3 items-center" key={index}>
                      {item.tick === 1 && <BlueTick />}
                      {item.tick === 2 && <GreyTick />}
                      {item.tick === 3 && <WhiteTick />}
                      <p
                        className={`text-base ${
                          item.tick === 2
                            ? "text-white text-opacity-70"
                            : "text-white"
                        } font-[300]`}
                      >
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/"
                className="w-full border border-[#E6EAEE] hover:bg-white hover:text-black rounded-[6px] py-4 px-8 text-white text-base mt-24 text-center "
              >
                View Pricing
              </Link>
            </div>

            {/* end of a grid */}
            {/* start of a grid */}
            <div
              className="w-full flex flex-col p-8 rounded-[8px] bg-[#171717] "
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h1 className="text-[#828282] text-sm sm:text-lg font-semibold">
                ENTERPRISE
              </h1>
              <h1 className="sm:mt-6 mt-4 text-white font-bold text-[28px] sm:text-[32px] lg:text-[48px]">
                $49.99
              </h1>
              <h1 className="text-[#828282] text-sm sm:text-lg font-semibold mt-4">
                PER MONTH
              </h1>
              <div className="mt-12 flex flex-col space-y-3">
                {enterprise?.map((item: any, index: number) => {
                  return (
                    <div className="flex space-x-3 items-center" key={index}>
                      {item.tick === 1 && <BlueTick />}
                      {item.tick === 2 && <GreyTick />}
                      {item.tick === 3 && <WhiteTick />}
                      <p
                        className={`text-base ${
                          item.tick === 2 ? "text-[#828282]" : "text-white"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/"
                className="w-full hover:bg-white hover:text-black border border-[#E6EAEE] rounded-[6px] py-4 px-8 text-white text-base mt-24 text-center "
              >
                View Pricing
              </Link>
            </div>

            {/* end of a grid */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Pricing
