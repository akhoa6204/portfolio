import { IcPortfolio, IcSkylineHotel, IcSmartBuy } from "../assets/images";
import type { IProject } from "./types";

export const projects: IProject[] = [
  {
    id: "smartbuy",
    name: "SmartBuy E-commerce Platform",
    description:
      "A web-based e-commerce project including both client-side for shopping and an admin dashboard to manage products, categories, and orders.",
    github: "https://github.com/akhoa6204/e-commerce-system",
    web: "",
    image: IcSmartBuy,
  },
  {
    id: "portfolio",
    name: "Landing page for front-end developer",
    description:
      "Responsive HTML/CSS layout for landing page for front-end developer.",
    github: "https://github.com/akhoa6204/portfolio",
    web: "",
    image: IcPortfolio,
  },
  {
    id: "skyline-hotel",
    name: "Hotel Booking & Management System",
    description:
      "A completed full-stack web application featuring client and admin dashboards for managing bookings, customers, and hotel operations.",
    github: "https://github.com/akhoa6204/booking-hotel",
    web: "",
    image: IcSkylineHotel,
  },
];
