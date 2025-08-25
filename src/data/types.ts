import type { JSX } from "react";

export interface ISocialInfo {
  label: string;
  component: JSX.Element;
  link: string;
  color: string;
  iconColor: string;
}

export interface INavLink {
  label: string;
  path: string;
}
export interface IResume {
  avatar: string;
  download: string;
  href: string;
}
export interface ITimeLine {
  year: string;
  descriptions: string[];
}
export interface ISkill {
  id: string;
  name: string;
  level: string;
  percent: number;
}
export interface IAdditionalSkill {
  id: string;
  name: string;
}
export interface IProject {
  id: string;
  name: string;
  description: string;
  github: string;
  web: string;
  image: string;
}
export interface IContactInfo {
  name: string;
  icon: JSX.Element;
}
