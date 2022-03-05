import * as React from "react";
import { IconProps } from "./Icon";

const SvgEtherium = (props: IconProps) => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={"0 0 24 24"}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.781 13.635c.27-.347.292-.827.056-1.198l-6.96-10.955a1.039 1.039 0 0 0-1.754 0l-6.96 10.955c-.236.371-.214.85.056 1.198l6.96 8.963a1.039 1.039 0 0 0 1.642 0l6.96-8.963Zm-13.577.012 4.975 6.407a1.039 1.039 0 0 0 1.642 0l4.975-6.407-5.386 2.312a1.038 1.038 0 0 1-.82 0l-5.386-2.312Zm11.5-1.66-4.827-7.595a1.039 1.039 0 0 0-1.754 0l-4.826 7.595 5.294 2.272c.261.113.557.113.819 0l5.293-2.272Z"
      fill="currentcolor"
    />
  </svg>
);

export default SvgEtherium;
