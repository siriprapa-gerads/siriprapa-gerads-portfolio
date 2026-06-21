import { Element } from "react-scroll";
import { t } from "i18next";
import Content from "../component/content/content"
import Category from "../component/category/category"


type skillProps = { id: string; }

const SkillPage = ({ id }: skillProps) => {
  return (
    <Element name={id}>
      <Content title={t("navbar.nav2")} >
        <Category 
          items={[
            {
              title: 'Programming & Merkup Language',
              infos: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python(basic)']
            },{
              title: 'Framework & Library',
              infos: [ 'React', 'Tailwind CSS', 'Tailwind Varaints', 'Storybook', 'Style dictionary' ]

              // change title to Frontend Development and Backend Development in the future
              
              // title: 'Frontend Development',
              // infos: ['React', 'Tailwind CSS','Tailwind Varaints', 'Storybook', 'Style dictionary' ]
            },{
              title: 'Tool',
              infos: ['Git', 'GitHub', 'GitLab' ]
            }
          ]} 
        />
      </Content>
    </Element>
  )
}

export default SkillPage
