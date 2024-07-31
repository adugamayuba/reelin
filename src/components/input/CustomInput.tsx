import React from "react";

type Props = {
  label?: string;
  containerClassName?: string;
  labeClassName?: string;
  inputClassName?: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
};

const CustomInput = (props: Props) => {
  const {
    label,
    containerClassName,
    inputClassName,
    labeClassName,
    placeholder,
    type,
  } = props;
  return (
    <div
      className={`border border-versuspay-primary-200 ${containerClassName} gap-1 w-full h-[54px] px-4`}
    >
      {
        <label
          htmlFor={label}
          className={`text-sm font-extralight text-versuspay-primary-500 ${labeClassName}`}
        >
          {label}
        </label>
      }
      <input
        name={label}
        type={type}
        placeholder={placeholder}
        className={`w-full text-grey-300 ${inputClassName} text-sm font-medium`}
      />
    </div>
  );
};

export default CustomInput;
