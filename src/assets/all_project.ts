import pj_1 from "./PJ_1.png";
import pj_2 from "./PJ_2.png";

export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  technology: string[];
  link: string;
  github?: string;
}

const all_project: Project[] = [
  {
    id: 1,
    name: "projects.campcrag.name",
    image: pj_1,
    description: "projects.campcrag.description",
    features: [
      "projects.campcrag.features.0",
      "projects.campcrag.features.1",
      "projects.campcrag.features.2",
      "projects.campcrag.features.3",
      "projects.campcrag.features.4",
      "projects.campcrag.features.5",
    ],
    technology: ["React", "React Slick", "Tailwind CSS"],
    link: "https://mysideprojectcampcrag.netlify.app/",
    github: "https://github.com/cilinia-gerads/CampCrag",
  },
  {
    id: 2,
    name: "projects.pomodoro.name",
    image: pj_2,
    description: "projects.pomodoro.description",
    features: [
      "projects.pomodoro.features.0",
      "projects.pomodoro.features.1",
      "projects.pomodoro.features.2",
      "projects.pomodoro.features.3",
      "projects.pomodoro.features.4",
    ],
    technology: ["React"],
    link: "https://codepen.io/Cili_Nia/pen/pvJKRjd",
  },
];

export default all_project;