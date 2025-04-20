import style from "./App.module.scss";
import {
  CertificationSection,
  EducationSection,
  ExperienceSection,
  ProfileSection,
  ProjectsSection,
  SkillsSection,
} from './components'
import { usePortfolioContext } from "./context/PortfolioContext";

function App() {

  /**
   * TODO
   * ====
   * - Desc text format
   * - animated BG for Main Header
   * - tailwindcss kinda REQIORED for RESPONSIVE
   * - animate contact area
   * - framer motion
   * - fix scroll bug on contact area
   * - popups for project
   * - image gallery for project
   * - mobile slider for experience, education & certifactions 
   * - Profile section to appear first on load
   * - up/down button
   * 
   * 
   * DONE
   * ====
   * - proper links for whatsapp, email
   * - slider for projects, skills,
   * - layout of desv to include Desc, Tech Stack with link to skills & location
   * - UseContext for Loading status
   * - typed JS for Designation
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
  ) : (
    <div className="loading">
      <h1>LOADING...</h1>
    </div>
  )
}

export default App
