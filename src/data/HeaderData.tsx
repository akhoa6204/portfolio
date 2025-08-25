import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import type { INavLink, ISocialInfo } from "./types";

export const socials: ISocialInfo[] = [
  {
    label: "facebook",
    component: <FacebookIcon />,
    link: "https://www.facebook.com/4nhkh04/",
    color: "#1877F2",
    iconColor: "#fff",
  },
  {
    label: "github",
    component: <GitHubIcon />,
    link: "https://github.com/akhoa6204",
    color: "#333",
    iconColor: "#fff",
  },
  {
    label: "instagram",
    component: <InstagramIcon />,
    link: "https://www.instagram.com/akhoa_/",
    color: "#E4405F",
    iconColor: "#fff",
  },
];
export const navLinks: INavLink[] = [
  {
    label: "About me",
    path: "about",
  },
  {
    label: "Technologies",
    path: "technologies",
  },
  {
    label: "Projects",
    path: "projects",
  },
  {
    label: "Contact",
    path: "contact",
  },
];
