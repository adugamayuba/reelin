import Link from "next/link";
import ContainerLayout from "../../Layouts/ContainerLayout"

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
            {/* Real-Time Analytics */}
            <div className="bg-[#1B4332] p-8 rounded-xl text-white transition-all hover:transform hover:scale-102">
              <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Analytics</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Seamlessly combine AI-driven insights and analytics tailored for e-commerce merchants.
              </p>
            </div>

            {/* Custom Dashboards */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 transition-all hover:transform hover:scale-102">
              <div className="w-14 h-14 bg-[#1B4332] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 9H20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Real-time Insights</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gain instant access to your financial data and predictions, keeping you informed at all times.
              </p>
            </div>

            {/* Seamless Integrations */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 transition-all hover:transform hover:scale-102">
              <div className="w-14 h-14 bg-[#1B4332] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Actionable Intelligence</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Transform data into actionable insights for informed financial decision-making.
              </p>
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
        </div>
      </ContainerLayout>
    </section>
  );
}

export default Why
