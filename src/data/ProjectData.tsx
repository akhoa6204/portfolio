import { IcPortfolio, IcSmartBuy } from "../assets/images";
import type { IProject } from "./types";

export const projects: IProject[] = [
  {
    id: "smartbuy",
    name: "SmartBuy E-commerce Platform",
    description:
      "A web-based e-commerce project including both client-side for shopping and an admin dashboard to manage products, categories, and orders.",
    github: "",
    web: "#",
    image: IcSmartBuy,
  },
  {
    id: "portfolio",
    name: "Landing page for front-end developer",
    description:
      "Responsive HTML/CSS layout for landing page for front-end developer.",
    github: "",
    web: "#",
    image: IcPortfolio,
  },
];
