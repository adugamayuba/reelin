import React from "react";
import SVGAtom from "../SVGAtom";
import * as svg from "../../../public/svg";

type Props = {
  className?: string;
  title: string;
  subTitle: string;
  onClick: () => void;
  iconName: keyof typeof svg;
  iconName2: keyof typeof svg;
  iconNameShow?: boolean;
};

const SelectButtonIcon = (props: Props) => {
  const {
    className,
    iconName,
    onClick,
    subTitle,
    title,
    iconName2,
    iconNameShow,
  } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-24 w-full flex items-center border border-grey-200 rounded-md justify-between px-6 ${className}`}
    >
      <div className="flex items-center gap-3">
        <SVGAtom iconName={iconName2} width={41} height={41} />
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-xs leading-5 font-medium text-black-100">
            {title}
          </h2>
          <p className="text-xs leading-5 font-normal text-grey-400 text-left">
            {subTitle}
          </p>
        </div>
      </div>
      {iconNameShow && (
        <SVGAtom iconName={iconName} width={24} height={24} color="white" />
      )}
    </button>
  );
};

export default SelectButtonIcon;
