import * as svgs from "../../public/svg";
import React from "react";

type Props = {
  iconName: keyof typeof svgs;
  color?: string;
  fill?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const SVGAtom = (props: Props) => {
  const size = props.width &&
    props.height && {
      width: props.width,
      height: props.height,
    };
  return React.createElement(svgs[props.iconName], {
    ...size,
    color: props.color ?? null,
    fill: props.fill ?? null,
    onClick: props.onClick ?? null,
    style: { ...props.style, fill: props.fill ?? props.color }, // Ensure fill color is applied
    className: props.className ?? null,
  });
};

export default React.memo(SVGAtom);
