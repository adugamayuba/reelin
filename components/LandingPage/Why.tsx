import Link from "next/link";
import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout"
import RealDataMonitoring from "../../assets/png/Real-data-monitoring.jpg";
import CustomizableDashboards from "../../assets/png/Customizable Dashboards.jpg";
import AIPoweredForecasting from "../../assets/png/AI-powered-forecasting.jpg";
import SmartAlerts from "../../assets/png/Smart Alerts & Insights.jpg";

const Why = () => {
  return (
    <section className="w-full bg-white py-20 overflow-x-hidden" id="why">
      <ContainerLayout>
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] font-semibold text-center text-gray-900 mb-4">
            Why Choose Reelin?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mb-12">
            From advanced tools to expert support, we provide everything you need to analyze, optimize, and grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* AI-Powered Analytics */}
            <div className="bg-[#1B4332] p-8 rounded-xl text-white transition-all hover:transform hover:scale-102 min-h-[400px] flex flex-col">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Analytics</h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Seamlessly combine AI-driven insights and analytics tailored for e-commerce merchants.
              </p>
              <div className="mt-auto"></div>
            </div>

            {/* Real-time Insights */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 transition-all hover:transform hover:scale-102 min-h-[400px] flex flex-col">
              <div className="w-16 h-16 bg-[#1B4332] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Real-time Insights</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Gain instant access to your financial data and predictions, keeping you informed at all times.
              </p>
              <div className="mt-auto"></div>
            </div>

            {/* Actionable Intelligence */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 transition-all hover:transform hover:scale-102 min-h-[400px] flex flex-col">
              <div className="w-16 h-16 bg-[#1B4332] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Actionable Intelligence</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Transform data into actionable insights for informed financial decision-making.
              </p>
              <div className="mt-auto"></div>
            </div>
          </div>

          <div className="mt-20 mb-8">
            <Link
              href="/waitlist"
              className="px-14 py-7 text-xl font-semibold rounded-xl hover:bg-[#143026] transition-all transform hover:scale-105 text-white shadow-lg bg-[#1B4332]"
            >
              Join Waitlist
            </Link>
          </div>

          <div className="mt-24 w-full">
            <h2 className="text-[40px] font-semibold text-center text-gray-900 mb-4">
              Powerful Features to Supercharge Your Analytics
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Our platform is packed with advanced tools to help you turn raw data into meaningful insights
              and drive smarter decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Real-Time Data Monitoring - Large Card */}
              <div className="md:col-span-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Real-Time Data Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  We analyze your Shopify store's current performance, uncover trends, and identify areas for improvement.
                </p>
                <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={RealDataMonitoring}
                    alt="Real-time data monitoring dashboard"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>

              {/* Customizable Dashboards - Small Card */}
              <div className="md:col-span-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-fit">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Customizable Dashboards</h3>
                <p className="text-gray-600 mb-4">
                  Create personalized views with drag-and-drop widgets.
                </p>
                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={CustomizableDashboards}
                    alt="Customizable dashboard interface"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* AI-Powered Forecasting - Small Card */}
              <div className="md:col-span-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-fit">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">AI-Powered Forecasting</h3>
                <p className="text-gray-600 mb-4">
                  Leverage AI algorithms to predict future trends accurately.
                </p>
                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={AIPoweredForecasting}
                    alt="AI-powered forecasting visualization"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Smart Alerts & Insights - Large Card */}
              <div className="md:col-span-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Smart Alerts & Insights</h3>
                <p className="text-gray-600 mb-4">
                  Receive intelligent notifications about trends, anomalies, and opportunities.
                </p>
                <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={SmartAlerts}
                    alt="Smart alerts and insights interface"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
}

export default Why
