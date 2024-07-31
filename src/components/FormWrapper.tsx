import React from "react";

const FormWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-white w-[505px] ${className} rounded-lg px-8 pb-12`}>
      {children}
    </div>
  );
};

export default FormWrapper;
