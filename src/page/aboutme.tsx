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
        subtitle="Frontend Developer"
      >
        <ul className='list-disc pl-6 mb-6'>
          <li>{t("description.line1")}</li>
          <li>{t("description.line2")}</li>
          <li>{t("description.line3")}</li>
          <li>{t("description.line4")} (˶ᵔ ᵕ ᵔ˶)</li>
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
