import React, { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  type: "submit" | "reset" | "button" | undefined;
};

const Primarybutton = (props: Props) => {
  const { children, className, onClick, type } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-versuspay-primary-100 h-[40px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Primarybutton;
