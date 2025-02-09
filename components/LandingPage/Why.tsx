import Link from "next/link";
import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout"
import CustomizableDashboards from "../../assets/png/Customizable Dashboards.jpg";
import { Globe } from "../../components/ui/globe";
import { motion } from "framer-motion";
import { LineChart, BarChart, PieChart, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "../../lib/utils";

const RealTimeMonitoring = () => {
  const data = [
    { value: 85, label: "Mon", revenue: "2.4k" },
    { value: 92, label: "Tue", revenue: "3.1k" },
    { value: 78, label: "Wed", revenue: "2.8k" },
    { value: 95, label: "Thu", revenue: "3.5k" },
    { value: 88, label: "Fri", revenue: "3.2k" },
    { value: 76, label: "Sat", revenue: "2.6k" },
    { value: 90, label: "Sun", revenue: "3.3k" },
  ];

  return (
    <div className="relative bg-[#1B4332]/5 rounded-lg p-3 sm:p-4">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-medium text-gray-600">Revenue Overview</h4>
          <p className="text-2xl font-semibold text-gray-900">$21.9k</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">vs last week</span>
          <span className="text-sm font-medium text-emerald-600">+12.5%</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[160px] sm:h-[180px]">
        <div className="grid grid-cols-7 h-full gap-2 sm:gap-3">
          {data.map((item, i) => (
            <div key={i} className="flex flex-col justify-end group">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${item.value}%` }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="bg-gradient-to-t from-[#1B4332] to-[#1B4332]/60 rounded-lg transition-all duration-300 hover:to-[#1B4332]/80 group-hover:scale-105 relative"
              >
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ${item.revenue}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </motion.div>
              <span className="text-xs text-gray-500 mt-2 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {[
          { label: "Conversion", value: "3.6%", trend: "+0.6%" },
          { label: "Orders", value: "156", trend: "+12.5%" },
          { label: "Avg. Value", value: "$140", trend: "+8.2%" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.8 + (index * 0.1)
            }}
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
          >
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">{stat.value}</span>
              <span className="text-xs font-medium text-emerald-600">{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CustomizableDashboard = () => {
  const widgets = [
    {
      title: "Sales Overview",
      type: "line",
      icon: <LineChart className="w-4 h-4" />,
      data: [40, 60, 45, 75, 65, 85, 70],
    },
    {
      title: "Revenue by Channel",
      type: "pie",
      icon: <PieChart className="w-4 h-4" />,
      data: [35, 25, 40],
    },
    {
      title: "Product Performance",
      type: "bar",
      icon: <BarChart className="w-4 h-4" />,
      data: [65, 45, 75, 55, 80],
    },
  ];

  return (
    <div className="relative bg-[#1B4332]/5 rounded-lg p-3 sm:p-4">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
              >
                {String.fromCharCode(65 + i)}
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-gray-600">3 active users</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
        >
          + Add Widget
        </motion.button>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {widgets.map((widget, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "bg-white p-2 sm:p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-move group",
              index === 2 ? "col-span-2" : ""
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Widget Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
                  {widget.icon}
                </span>
                <h4 className="text-sm font-medium text-gray-900">{widget.title}</h4>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:bg-gray-50 rounded">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
                <div className="w-4 h-4 flex items-center justify-center cursor-move">
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Widget Content */}
            <div className="h-[80px]">
              {widget.type === 'line' && (
                <div className="w-full h-full flex items-end">
                  <div className="w-full flex items-end justify-between">
                    {widget.data.map((value, i) => (
                      <motion.div
                        key={i}
                        className="w-[2px] bg-emerald-500 rounded-full"
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {widget.type === 'pie' && (
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full border-8 border-emerald-500"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              )}
              {widget.type === 'bar' && (
                <div className="w-full h-full flex items-end justify-between gap-2">
                  {widget.data.map((value, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-emerald-500 rounded-t-lg"
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Drop Zones */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-2 sm:mt-3">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className="border-2 border-dashed border-gray-200 rounded-lg h-24 flex items-center justify-center"
          >
            <span className="text-sm text-gray-400">Drop widget here</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AIPoweredForecasting = () => {
  const historicalData = [35, 42, 38, 45, 40, 48, 44];
  const forecastData = [47, 52, 49, 55, 51, 58, 54];
  const confidenceInterval = [
    { upper: 50, lower: 44 },
    { upper: 55, lower: 49 },
    { upper: 52, lower: 46 },
    { upper: 58, lower: 52 },
    { upper: 54, lower: 48 },
    { upper: 61, lower: 55 },
    { upper: 57, lower: 51 },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#1B4332]/10 to-[#143026]/10 rounded-lg p-3 sm:p-4 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-medium text-gray-600">Sales Forecast</h4>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">+24.5%</p>
            <span className="text-sm font-medium text-emerald-600">predicted growth</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <motion.div 
              className="w-2 h-2 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            AI Model Active
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[160px] sm:h-[180px] relative">
        {/* Confidence Interval Area */}
        <div className="absolute inset-0 flex items-end justify-between px-4">
          {confidenceInterval.map((interval, i) => (
            <motion.div
              key={i}
              className="w-[10%] bg-emerald-100/60 rounded-t-lg shadow-inner"
              initial={{ height: 0 }}
              animate={{ height: `${interval.upper}%` }}
              transition={{ delay: 1 + (i * 0.1), duration: 1 }}
            />
          ))}
        </div>

        {/* Historical Line */}
        <div className="absolute inset-0 flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <motion.path
              d={`M 0,${100 - historicalData[0]} ${historicalData.map((value, i) => `L ${(i + 1) * (100 / (historicalData.length - 1))},${100 - value}`).join(' ')}`}
              stroke="#047857"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
          </svg>
        </div>

        {/* Forecast Line */}
        <div className="absolute inset-0 flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <motion.path
              d={`M ${100 / (forecastData.length - 1) * 6},${100 - forecastData[0]} ${forecastData.map((value, i) => `L ${(i + 1) * (100 / (forecastData.length - 1))},${100 - value}`).join(' ')}`}
              stroke="#4ADE80"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            />
          </svg>
        </div>

        {/* Data Points */}
        <div className="absolute inset-0 flex items-end justify-between px-4">
          {historicalData.concat(forecastData.slice(-1)).map((value, i) => (
            <motion.div
              key={i}
              className="relative"
              style={{ height: `${value}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
            >
              <div className="absolute bottom-0 -left-1 w-3 h-3 rounded-full bg-emerald-600 shadow" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-[2px] bg-emerald-600" />
            <span className="text-gray-600">Historical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-[2px] bg-emerald-400 border-t-2 border-dashed" />
            <span className="text-gray-600">Forecast</span>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg hover:bg-emerald-50 text-emerald-600"
        >
          <AlertCircle className="w-3 h-3" />
          <span>View Details</span>
        </motion.button>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {[
          { label: "Confidence", value: "94%", icon: <TrendingUp className="w-3 h-3" /> },
          { label: "Data Points", value: "2.4k+", icon: <AlertCircle className="w-3 h-3" /> },
        ].map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + (index * 0.1) }}
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-2 text-emerald-600 mb-1">
              {insight.icon}
              <p className="text-xs text-gray-500">{insight.label}</p>
            </div>
            <p className="text-sm font-semibold text-gray-900">{insight.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Why = () => {
  return (
    <section id="why" className="relative py-8 sm:py-12 bg-gray-50">
      <ContainerLayout>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
              Why Choose Reelin?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the power of AI-driven analytics to transform your Shopify store's performance
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 w-full">
            {/* Smart Analytics */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Smart Analytics</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Get deep insights into your store's performance with our AI-powered analytics.
              </p>
            </div>

            {/* Real-time Insights */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Real-time Insights</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Gain instant access to your financial data and predictions, keeping you informed at all times.
              </p>
            </div>

            {/* Actionable Intelligence */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mb-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Actionable Intelligence</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Transform data into actionable insights for informed financial decision-making.
              </p>
            </div>
          </div>

          {/* Features Showcase Section */}
          <div className="w-full overflow-hidden">
            <div className="text-center mt-8 mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
                Powerful Features to Supercharge Your Analytics
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform is packed with advanced tools to help you turn raw data into meaningful insights
                and drive smarter decisions.
              </p>
            </div>

            <div className="w-full max-w-[1400px] mx-auto space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                {/* First Row */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Real-Time Data Monitoring</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      We analyze your Shopify store's current performance, uncover trends, and identify areas for improvement.
                    </p>
                    <RealTimeMonitoring />
                  </div>
                </div>
                <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Customizable Dashboards</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      Create personalized views with drag-and-drop widgets.
                    </p>
                    <CustomizableDashboard />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                {/* Second Row */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">AI-Powered Forecasting</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      Leverage AI algorithms to predict future trends accurately.
                    </p>
                    <AIPoweredForecasting />
                  </div>
                </div>
                <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform-gpu hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Expand Your Global Reach</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">
                      Scale your business globally with our AI-powered analytics and insights. Reach customers worldwide and optimize your international sales performance.
                    </p>
                    <div className="aspect-[16/9] bg-gray-50 rounded-xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/20" />
                      <Globe className="scale-110 sm:scale-125 translate-y-6 sm:translate-y-8" />
                    </div>
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
