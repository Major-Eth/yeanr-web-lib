import * as React from "react";
import { SVGProps } from "react";

export interface ChevronIconProps extends SVGProps<SVGSVGElement> {
  variant: Direction
};

enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

const rotationDegree = {
  [Direction.Down]: "0",
  [Direction.Left]: "90",
  [Direction.Up]: "180",
  [Direction.Right]: "270",
}

const Svg = (props: ChevronIconProps) => (
	<svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		transform={"rotate(" + rotationDegree[props.variant] + ")"}
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M19.659 7.247a1 1 0 0 1 .094 1.412l-7 8a1 1 0 0 1-1.506 0l-7-8a1 1 0 0 1 1.506-1.317L12 14.482l6.247-7.14a1 1 0 0 1 1.412-.095Z"
			fill="currentcolor"
		/>
	</svg>
)

export default Svg;
