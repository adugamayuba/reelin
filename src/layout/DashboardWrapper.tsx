import React from "react";
import Sidebar from "./Sidebar";

const DashboardWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`${className} flex items-start bg-versuspay-sky h-full`}
    >
      <Sidebar />
      <div className="max-w-screen-xl w-full mx-auto">{children}</div>
    </section>
  );
};

export default DashboardWrapper;
