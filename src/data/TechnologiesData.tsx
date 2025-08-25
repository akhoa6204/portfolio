import type { IAdditionalSkill, ISkill } from "./types";

export const skills: ISkill[] = [
  { id: "htmlcss", name: "HTML/CSS", level: "Intermediate", percent: 70 },
  { id: "ts", name: "TypeScript", level: "Intermediate", percent: 65 },
  { id: "react", name: "React.js", level: "Beginner", percent: 60 },
  {
    id: "tailwind_mui",
    name: "Tailwind CSS / MUI",
    level: "Beginner",
    percent: 55,
  },
];

export const additionalSkills: IAdditionalSkill[] = [
  { id: "django", name: "Python/Django" },
  { id: "sql", name: "SQL Server" },
  { id: "git", name: "Git/GitHub" },
  { id: "postman", name: "Postman" },
  { id: "restapi", name: "RESTful API Design" },
  { id: "oop", name: "OOP" },
  { id: "ml", name: "Machine Learning" },
  { id: "crawling", name: "Web Crawling" },
  { id: "testauto", name: "Test Automation" },
];
