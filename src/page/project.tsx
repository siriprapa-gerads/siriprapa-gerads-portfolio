import { Element } from "react-scroll";
import { t } from "i18next";
import Content from "../component/content/content"
import Slider from "../component/slider/slider";
import all_project from '../assets/all_project.js'



type projectPageProps = { id: string; }

type project = {
    name: string;
    image: string;
    description: string;
    features: string[];
    technology: string[];
    link: string; // live demo
    github?: string | undefined;
}

const ProjectPage = ({ id }: projectPageProps) => {

  const cards = (all_project as project[]).map((project: project) => ({
    title: t(project.name),
    description: t(project.description),
    image: project.image,
    lists: project.features.map((feature) => t(feature)),
    chips: project.technology.map((tech) => t(tech)),
    link: project.link, // liveDemo
    github: project?.github
  }))

  return (
    <Element name={id}>
      <Content title={t("navbar.nav4")}>
        <Slider cards={cards} />
      </Content>
    </Element>
  )
}

export default ProjectPage
