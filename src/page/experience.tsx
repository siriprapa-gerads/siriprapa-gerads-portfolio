import { Element } from "react-scroll"
import { t } from "i18next";
import Content from "../component/content/content"
import Overview from "../component/overview/overview";
import Lists from '../component/list/list'
import Link from "../component/link/link";


type experienceProps = { id: string; }

const ExperiencePage = ({ id }: experienceProps) => {
  return (
    <Element name={id}>
      <Content title={t("navbar.nav3")}>

        {/* frontend */}
        <div className="min-h-[90vh] h-fit pt-4 pb-10">
          <Overview 
            title={"Frontend Developer"}
            subtitle={t("experience.position.frontend.location")}
            date={t("experience.position.frontend.date")} 
            description={t("experience.position.frontend.description")}
            link={{
              label: "KMAI Product",
              url: "https://www.sertiscorp.com/post/sertis-kmai-enhance-your-companys-knowledge-management-cycle-with-ai-1"
            }}
          />
          <Lists 
            lists={[
              { text: t("experience.position.frontend.resposibility.0") },
              { text: (
                  <>
                    {t("experience.position.frontend.resposibility.1")}
                    <Link
                      link={{
                        label: "Style Dictionary",
                        url: "https://styledictionary.com/"
                      }}
                    />
                    {t("experience.position.frontend.resposibility.2")}
                    <Link
                      link={{
                        label: "Tailwind Variants",
                        url: "https://www.tailwind-variants.org/"
                      }}
                    />
                  </>
              )},
              {
                text: t("experience.position.frontend.resposibility.3"),
                link: {
                  label: "Storybook",
                  url: "https://storybook.js.org/"
                }
              },
              { text: t("experience.position.frontend.resposibility.4") }
            ]} 
          />
          <Lists 
            title={t("experience.title.technology")} 
            lists={[
              { text: "React" },
              { text: "TypeScript" },
              { text: "Tailwind CSS | Tailwind Variants" },
              { text: "Style dictionary" },
              { text: "Storybook" },
              { text: "Git&GitLab" },
            ]} 
          />
        </div>

        {/* backend */}
        <div className="min-h-[90vh] h-fit pb-10">
          <Overview 
            title={"Backend Developer"} 
            subtitle={t("experience.position.backend.location")}
            date={t("experience.position.backend.date")} 
            description={t("experience.position.backend.description")}
          />
          <Lists 
            lists={[
              { text: t("experience.position.backend.resposibility.0") },
              {
                text: t("experience.position.backend.resposibility.1"),
                link: {
                  label: "Adaptive-Card",
                  url: "https://adaptivecards.microsoft.com/designer"
                }
              },
              {
                text: t("experience.position.backend.resposibility.2"),
                link: {
                  label: "Bot Framework Emulator",
                  url: "https://learn.microsoft.com/en-us/azure/bot-service/bot-service-debug-emulator?view=azure-bot-service-4.0&tabs=csharp"
                }
              },
              { text: t("experience.position.backend.resposibility.3") },
              // { text: t("experience.position.backend.resposibility.4") }
            ]} 
          />
          <Lists 
            title={"APIs"} 
            lists={[
              {
                subtitle: "ServiceNow",
                text: t("experience.position.backend.apis.0")
              },
              {
                subtitle: "MicrosoftGraph",
                text: t("experience.position.backend.apis.1"),
                link: {
                  label: "Microsoft Graph API (Certificate)",
                  url: "https://learn.microsoft.com/api/achievements/share/th-th/SiriprapaGerads-3890/2JHKCFDV?sharingId=F319256EBF628FFE"
                }
              }
            ]}
          />
          <Lists 
            title={t("experience.title.technology")} 
            lists={[
              { text: "NestJs" },
              { text: "Postman" },
              { text: "Microsoft" },
              { text: "Git&GitLab" },
            ]} 
          />
        </div>
      </Content>
    </Element>
  )
}

export default ExperiencePage
