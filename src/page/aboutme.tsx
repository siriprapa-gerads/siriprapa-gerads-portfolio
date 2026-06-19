import { Element } from 'react-scroll'
import { t } from "i18next"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Content from "../component/content/content"
import Contact from "../component/contact/contact"


type aboutProps = { id: string }

const AboutPage = ({ id }: aboutProps) => {
  return (
    <Element name={id}>
      <Content 
        title={t("name")}
        subtitle="Software Engineer"
      >
        <ul className='list-disc mb-6 pl-4'>
          <li>{t("description.line5")}</li>
          <li>{t("description.line6")}</li>
          <li>{t("description.line7")}</li>
          <li>{t("description.line8")} (˶ᵔ ᵕ ᵔ˶)</li>
        </ul>
        <Contact 
          items={[
            {
              id: 'GitHub',
              link: 'https://github.com/siriprapa-gerads',
              icon: <FaGithub size={60} />
            },
            {
              id: 'LinkedIn',
              link: 'https://www.linkedin.com/in/siriprapa-gerads-480a5a36a/',
              icon: <FaLinkedinIn size={60} />
            }
          ]} 
        />
      </Content>
    </Element>
  )
}

export default AboutPage
