import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroySemiBold16Black90001: "font-gilroy font-semibold",
  txtGilroyBold36: "font-bold font-gilroy",
  txtGilroySemiBold12BlueA70001: "font-gilroy font-semibold",
  txtGilroySemiBold18Black90001: "font-gilroy font-semibold",
  txtGilroySemiBold24Black90001: "font-gilroy font-semibold",
  txtGilroySemiBold18Red700: "font-gilroy font-semibold",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroySemiBold12Black90002: "font-gilroy font-semibold",
  txtGilroyMedium2177: "font-gilroy font-medium",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray800: "font-gilroy font-medium",
  txtGilroyRegular18WhiteA700: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray400: "font-gilroy font-normal",
  txtGilroySemiBold24Black900: "font-gilroy font-semibold",
  txtGilroySemiBold16BlueA70001: "font-gilroy font-semibold",
  txtGilroyMedium16Gray90002: "font-gilroy font-medium",
  txtGilroySemiBold12: "font-gilroy font-semibold",
  txtGilroyBold2177: "font-bold font-gilroy",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold18Green600: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium16Black90001: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtInterSemiBold12: "font-inter font-semibold",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroyMedium16BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtGilroyMedium14BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold32Bluegray900: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
