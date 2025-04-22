import style from "./App.module.scss";
import {
  CertificationSection,
  EducationSection,
  ExperienceSection,
  ProfileSection,
  ProjectsSection,
  SkillsSection,
} from './components'
import VantaBg from "./components/VantaBg";
import { usePortfolioContext } from "./context/PortfolioContext";

function App() {

  /**
   * TODO
   * ====
   * - Desc text format
   * - animate contact area
   * - framer motion
   * - image gallery for project
   * - Profile section to appear first on load
   * - up/down button
   * - mobile UI fixs
   * 
   * 
   * DONE
   * ====
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
  ) : (
    <div className="loading">
      <h1>LOADING...</h1>
    </div>
  )
}

export default App
