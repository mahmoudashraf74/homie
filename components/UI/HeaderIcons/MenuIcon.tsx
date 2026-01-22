import * as React from "react";

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="12"
    fill="none"
    viewBox="0 0 16 12"
    {...props}
  >
    <path
      stroke="#221F20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.556"
      d="M1 6h14M1 1.333h14M1 10.667h14"
    ></path>
  </svg>
);

export default MenuIcon;
