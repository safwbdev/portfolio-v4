import style from "./App.module.scss";
import {
  CertificationSection,
  EducationSection,
  ExperienceSection,
  ProfileSection,
  ProjectsSection,
  SkillsSection,
} from './components'

function App() {

  /**
   * TODO
   * ====
   * - typed JS for Designation
   * - Desc text format
   * - layout of desv to include Desc, Tech Stack with link to skills & location
   * - slider for projects, skills,
   * - proper links for whatsapp, email
   * - animated BG for Main Header
   * - tailwindcss?
   * - animate contact area
   * - framer motion
   * - fix scroll bug on contact area
   * - popups for project
   * - image gallery for project
   * - mobile slider for experience, education & certifactions 
   */

  return (
    <div className={style.app}>
      <ProfileSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationSection />
    </div>
  )
}

export default App
