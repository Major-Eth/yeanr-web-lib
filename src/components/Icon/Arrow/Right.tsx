import * as React from "react";
import { SVGProps } from "react";

const SvgRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.661 19.751 7.997-6.996a1.002 1.002 0 0 0 0-1.506l-8-7a.994.994 0 0 0-.455-.227c-.041-.006-.085-.02-.126-.02-.04-.003-.079-.001-.119.001a.987.987 0 0 0-.695.322.995.995 0 0 0-.264.677v13.997a.998.998 0 0 0 1.47.883c.067-.035.13-.078.192-.131Z"
      fill="currentcolor"
    />
  </svg>
);

export default SvgRight;
