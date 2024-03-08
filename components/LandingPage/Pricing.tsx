import ContainerLayout from "../../Layouts/ContainerLayout"
import { BlueTick, GreenTick, GreyTick, WhiteTick } from "../../assets/svg";
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
    tick: 1,
  },
  {
    name: "Customized Reporting",
    tick: 1,
  },
  {
    name: "Integrate with bank",
    tick: 1,
  },
  {
    name: "Multi-User Collaboration",
    tick: 1,
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
    <div className="w-full bg-[#2B2E2F] py-[120px]" id="pricing">
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
              className="w-full flex flex-col p-8 relative rounded-[8px] bg-greyish "
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h1 className="text-[#828282] text-sm sm:text-lg font-semibold">
                Starter
              </h1>
              <h1 className="sm:mt-6 mt-4 text-customBlack font-bold text-[28px] sm:text-[32px] lg:text-[48px]">
                $9.99
              </h1>
              <h1 className="text-[#828282] text-sm sm:text-lg font-semibold mt-4">
                PER MONTH
              </h1>
              <div className="mt-12 flex flex-col space-y-3">
                {starter?.map((item: any, index: number) => {
                  return (
                    <div className="flex space-x-3 items-center" key={index}>
                      {item.tick === 1 && <GreenTick />}

                      <p
                        className={`text-base ${
                          item.tick === 2
                            ? "text-[#828282]"
                            : "text-customBlack"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className=" w-full lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-8 mt-24">

              <Link
                href="/"
                className="w-full hover:bg-customBlack  border-[2px] border-customBlack rounded-[6px] py-4 px-8 text-customBlack text-base block text-center hover:text-white "
                >
                View Pricing
              </Link>
                </div>
            </div>

            {/* end of a grid */}
            {/* start of a grid */}
            <div
              className="w-full flex flex-col p-8 rounded-[8px] bg-[#D5FD89] "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="text-customBlack text-opacity-50 text-sm sm:text-lg font-semibold">
                PRO
              </h1>
              <h1 className="sm:mt-6 mt-4 text-customBlack font-bold text-[28px] sm:text-[32px] lg:text-[48px]">
                $24.99
              </h1>
              <h1 className="text-customBlack text-sm sm:text-lg font-semibold mt-4">
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
                            ? "text-customBlack text-opacity-70"
                            : "text-customBlack"
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
                className="w-full  border-customBlack hover:bg-white hover:text-black rounded-[6px] py-4 px-8 text-customBlack text-base mt-24 text-center border-[2px] "
              >
                View Pricing
              </Link>
            </div>

            {/* end of a grid */}
            {/* start of a grid */}
            <div
              className="w-full flex flex-col p-8 rounded-[8px] bg-greyish "
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h1 className="text-[#828282] text-sm sm:text-lg font-semibold">
                ENTERPRISE
              </h1>
              <h1 className="sm:mt-6 mt-4 text-customBlack font-bold text-[28px] sm:text-[32px] lg:text-[48px]">
                $49.99
              </h1>
              <h1 className="text-customBlack text-sm sm:text-lg font-semibold mt-4">
                PER MONTH
              </h1>
              <div className="mt-12 flex flex-col space-y-3">
                {enterprise?.map((item: any, index: number) => {
                  return (
                    <div className="flex space-x-3 items-center" key={index}>
                      {item.tick === 1 && <GreenTick />}
                      <p
                        className={`text-base ${
                          item.tick === 1 ? "text-customBlack" : "text-customBlack"
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
                className="w-full hover:bg-white hover:text-white text-customBlack  border-customBlack border-[2px] rounded-[6px] py-4 px-8  text-base mt-24 text-center "
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
