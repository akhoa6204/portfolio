import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import type { INavLink, ISocialInfo } from "./types";

export const socials: ISocialInfo[] = [
  {
    id: "facebook",
    label: "facebook",
    component: <FacebookIcon />,
    link: "https://www.facebook.com/4nhkh04/",
    color: "#1877F2",
    iconColor: "#fff",
  },
  {
    id: "github",
    label: "github",
    component: <GitHubIcon />,
    link: "https://github.com/akhoa6204",
    color: "#333",
    iconColor: "#fff",
  },
  {
    id: "instagram",
    label: "instagram",
    component: <InstagramIcon />,
    link: "https://www.instagram.com/akhoa_/",
    color: "#E4405F",
    iconColor: "#fff",
  },
];
export const navLinks: INavLink[] = [
  {
    id: "about",
    label: "About me",
    path: "about",
  },
  {
    id: "technologies",
    label: "Technologies",
    path: "technologies",
  },
  {
    id: "projects",
    label: "Projects",
    path: "projects",
  },
  {
    id: "contact",
    label: "Contact",
    path: "contact",
  },
];
