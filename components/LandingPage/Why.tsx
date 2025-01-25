import Link from "next/link";
import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout"
import RealDataMonitoring from "../../assets/png/Real-data-monitoring.jpg";
import CustomizableDashboards from "../../assets/png/Customizable Dashboards.jpg";
import AIPoweredForecasting from "../../assets/png/AI-powered-forecasting.jpg";
import SmartAlerts from "../../assets/png/Smart Alerts & Insights.jpg";

const Why = () => {
  return (
    <section id="why" className="py-24 bg-gray-50">
      <ContainerLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Why Choose Reelin?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the power of AI-driven analytics to transform your Shopify store's performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Analytics */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
              <div className="w-16 h-16 bg-[#1B4332] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Smart Analytics</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get deep insights into your store's performance with our AI-powered analytics.
              </p>
            </div>

            {/* Real-time Insights */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
              <div className="w-16 h-16 bg-[#1B4332] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Real-time Insights</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gain instant access to your financial data and predictions, keeping you informed at all times.
              </p>
            </div>

            {/* Actionable Intelligence */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
              <div className="w-16 h-16 bg-[#1B4332] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Actionable Intelligence</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Transform data into actionable insights for informed financial decision-making.
              </p>
            </div>
          </div>

          <div className="mt-8 mb-24 text-center">
            <Link
              href="/waitlist"
              className="inline-block px-12 py-6 text-xl font-semibold rounded-xl bg-[#1B4332] text-white shadow-lg hover:bg-[#143026] transition-all transform hover:scale-105 duration-300"
            >
              Join Waitlist
            </Link>
          </div>

          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-6">
              Powerful Features to Supercharge Your Analytics
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Our platform is packed with advanced tools to help you turn raw data into meaningful insights
              and drive smarter decisions.
            </p>

            <div className="max-w-[1200px] mx-auto px-4 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* First Row */}
                <div className="md:col-span-7 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-Time Data Monitoring</h3>
                  <p className="text-base text-gray-600 mb-4">
                    We analyze your Shopify store's current performance, uncover trends, and identify areas for improvement.
                  </p>
                  <div className="aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={RealDataMonitoring}
                      alt="Real-time data monitoring dashboard"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform-gpu hover:scale-[1.02] transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>

                <div className="md:col-span-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Customizable Dashboards</h3>
                  <p className="text-base text-gray-600 mb-4">
                    Create personalized views with drag-and-drop widgets.
                  </p>
                  <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={CustomizableDashboards}
                      alt="Customizable dashboard interface"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform-gpu hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="md:col-span-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">AI-Powered Forecasting</h3>
                  <p className="text-base text-gray-600 mb-4">
                    Leverage AI algorithms to predict future trends accurately.
                  </p>
                  <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={AIPoweredForecasting}
                      alt="AI-powered forecasting visualization"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform-gpu hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Smart Alerts & Insights</h3>
                  <p className="text-base text-gray-600 mb-4">
                    Receive intelligent notifications about trends, anomalies, and opportunities.
                  </p>
                  <div className="aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={SmartAlerts}
                      alt="Smart alerts and insights interface"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform-gpu hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
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
