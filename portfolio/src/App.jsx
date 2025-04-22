import style from "./App.module.scss";
import { usePortfolioContext } from "./context/PortfolioContext";
import {
  CertificationSection,
  EducationSection,
  ExperienceSection,
  LoadingScreen,
  ProfileSection,
  ProjectsSection,
  SkillsSection,
} from './components'

function App() {

  /**
   * TODO
   * ====
   * - Profile section to appear first on load
   * - mobile UI fixs
   * - Desc text format
   * - up/down button
   * - animate contact area
   * - framer motion
   * 
   * 
   * DONE
   * ====
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
  const { isLoaded } = usePortfolioContext()

  return isLoaded ? (
    <div className={style.app}>
      <ProfileSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationSection />
    </div>
  ) : <LoadingScreen />
}

export default App
