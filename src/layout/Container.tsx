import SVGAtom from "@/components/SVGAtom";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-screen bg-versuspay-primary-100 flex flex-col justify-center items-center ${className} `}
    >
      <SVGAtom iconName="logo" width={117.36} height={28.5} color="#050505" />
      {children}
    </div>
  );
};
