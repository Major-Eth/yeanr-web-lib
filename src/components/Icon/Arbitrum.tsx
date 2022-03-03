import * as React from "react";
import { SVGProps } from "react";

const SvgArbitrum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 7.091a1 1 0 0 0-.518-.876l-9-4.95a1 1 0 0 0-.964 0l-9 4.95A1 1 0 0 0 2 7.091v9.818a1 1 0 0 0 .518.876l9 4.95a1 1 0 0 0 .964 0l9-4.95a1 1 0 0 0 .518-.876V7.09Zm-9.518-4.094a1 1 0 0 0-.964 0L4.093 7.081a1 1 0 0 0-.518.876v7.376L8.98 7.68a.75.75 0 1 1 1.225.865l-5.97 8.452 1.624.894 6.719-10.178a.75.75 0 1 1 1.252.826L7.178 18.616l4.34 2.387a1 1 0 0 0 .964 0l3.587-1.973-3.871-5.591a.756.756 0 1 1 1.244-.86l3.949 5.724 1.504-.827-4.84-6.852a.75.75 0 0 1 1.225-.866l4.937 6.99.208-.114V7.957a1 1 0 0 0-.518-.876l-7.425-4.084Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArbitrum;
