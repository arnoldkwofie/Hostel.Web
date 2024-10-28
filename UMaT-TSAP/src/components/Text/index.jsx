import React from "react";

const sizeClasses = {
  txtPoppinsRegular32: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsSemiBold32Teal9007f: "font-poppins font-semibold",
  txtInikaBold32: "font-bold font-inika",
  txtPhetsarathBold36: "font-bold font-phetsarath",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsBold25: "font-bold font-poppins",
  txtPoppinsSemiBold32Black900: "font-poppins font-semibold",
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
