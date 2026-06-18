import './App.css'
import { useAppContext } from './context/context';
import { useTranslation } from 'react-i18next';
import { LuMoonStar } from 'react-icons/lu';
import { IoSunnyOutline } from 'react-icons/io5';
import Wrapper from './component/wrapper/wrapper'
import Tap from './component/tap/tap';
import Sidebar from './component/sidebar/sidebar/sidebar'
import Avatar from './component/avatar/avatar';
import Picture from "./assets/profile-pic.jpg"
import Menu from './component/sidebar/menu/menu';
import AboutPage from './page/aboutme';
import SkillPage from './page/skill';
import ExperiencePage from './page/experiance';
import ProjectPage from './page/project';
import Button from './component/botton/button'


function App() {

  const { t } = useTranslation();
  
   const { 
      darkMode, changeModeBtn,
      language, changeLanguageBtn
   } = useAppContext()

    return (
      <>
        <Wrapper className={darkMode ? "dark" : ""}>
          <Tap type={'header'} />
          <Tap type={'footer'} />
          <Sidebar>
              <Avatar avatar={Picture} alt={"siriprapa-gerads"} />
              <Menu 
                items={[
                  { label: t("navbar.nav1"), path: '/' },
                  { label: t("navbar.nav2"),path: '/skill' },
                  { label: t("navbar.nav3"), path: '/experiance', offset: -74 },
                  { label: t("navbar.nav4"), path: '/project', offset: -10 }
                ]}
              />
          </Sidebar>
          <AboutPage id={'/'} />
          <SkillPage id={'/skill'} />
          <ExperiencePage id={'/experiance'} />
          <ProjectPage id={'/project'} />
          <Button 
            type={'changeMode'}  
            onClick={changeModeBtn}>
              {darkMode ? (
                <div className='btn-mode'>
                  <div>
                    <IoSunnyOutline size={22}/>
                  </div>
                  {t("mode.light")}
                </div>
              ) : (
                <div className='btn-mode'>
                  <div>
                    <LuMoonStar size={20} />
                  </div>
                  {t("mode.dark")}
                </div>
              )}
          </Button>
          <Button 
            children={language === "en" ? "TH" : "ENG"}
            type={'changeLanguage'}
            onClick={changeLanguageBtn}
          />
        </Wrapper>
      </>
    )
}

export default App
