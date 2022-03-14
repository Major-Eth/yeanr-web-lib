import { Card as Wrapper } from "./Card";
import { CardHead as Head } from "./CardHead";
import { CardStats as Stats } from "./CardStats";

const Card = Object.assign(Wrapper, { Head, Stats });
export { Card };
