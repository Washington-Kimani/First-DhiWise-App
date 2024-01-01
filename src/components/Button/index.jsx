import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-md",
};
const variants = {
  outline: {
    blue_gray_50:
      "border-b border-blue_gray-50 border-solid text-blue_gray-400",
    blue_A700_01: "border border-blue-A700_01 border-solid text-blue-A700_01",
  },
  fill: {
    red_A200: "bg-red-A200 shadow-bs",
    blue_gray_50: "bg-blue_gray-50",
    blue_A700_01: "bg-blue-A700_01 text-white-A700",
    black_900_e5: "bg-black-900_e5 text-white-A700",
    white_A700: "bg-white-A700 shadow-bs",
  },
};
const sizes = {
  xs: "p-1.5",
  sm: "p-2.5",
  md: "p-3.5",
  lg: "pr-2.5 py-[15px]",
  xl: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xl",
  variant = "fill",
  color = "blue_A700_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_50",
    "blue_A700_01",
    "red_A200",
    "black_900_e5",
    "white_A700",
  ]),
};

export { Button };
