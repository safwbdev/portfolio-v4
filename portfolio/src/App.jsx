import { useEffect } from "react";
import style from "./App.module.scss";
import { usePortfolioContext } from "./context/PortfolioContext";
import {
  AboutSection,
  CertificationSection,
  ClientProjectsSection,
  EducationSection,
  ExperienceSection,
  LoadingScreen,
  PersonalProjectsSection,
  ProfileSection,
  SkillsSection,
} from './components'

function App() {

  /**
   * TODO
   * ====
   * - Profile section to appear first on load
   * - mobile UI fixes
   * - Desc text format
   * - animate contact area
   * - framer motion
   * 
   * 
   * DONE
   * ====
   * - up/down button
   * - image gallery for project
   * - project modal layout on mobile
   * - Hide desc on experience & Education
   * - close on bg click for project modal
   * - mobile slider for experience, education & certifactions 
   * - resize on client projects
   * - popups for project
   * - tailwindcss kinda REQIORED for RESPONSIVE
   * - proper links for whatsapp, email
   * - slider for projects, skills,
   * - layout of desv to include Desc, Tech Stack with link to skills & location
   * - UseContext for Loading status
   * - typed JS for Designation
   * - fix scroll bug on contact area
   * - Unique BG for Main Header
   * - animated BG for Main Header
   * 
   * PASS
   * ====
   * 
   * 
   * 
  */
  const { isLoaded, currentSection } = usePortfolioContext()

  useEffect(() => {
    console.log(currentSection);

  }, [currentSection])

  const getAnchorLink = (num) => {
    switch (num) {
      case 0:
        return '#main'
      case 1:
        return '#about'
      case 2:
        return '#clientProjects'
      case 3:
        return '#personalProjects'
      case 4:
        return '#skills'
      case 5:
        return '#experience'
      case 6:
        return '#education'
      case 7:
        return '#certifications'
      default:
        return
    }
  }

  return isLoaded ? (
    <div className={style.app}>
      <ProfileSection id={0} />
      <AboutSection id={1} />
      <ClientProjectsSection id={2} />
      <PersonalProjectsSection id={3} />
      <SkillsSection id={4} />
      <ExperienceSection id={5} />
      <EducationSection id={6} />
      <CertificationSection id={7} />
      <div className="navLink" style={{ border: '1px solid red', position: 'absolute', top: '3em', right: '3em' }}>
        <a href={getAnchorLink(currentSection - 1)}>
          upstairs
        </a>
      </div>
      <div className="navLink" style={{ border: '1px solid red', position: 'absolute', bottom: '3em', right: '3em' }}>
        <a href={getAnchorLink(currentSection + 1)}>
          downstairs
        </a>
      </div>
    </div>
  ) : <LoadingScreen />
}

export default App
