import style from "./App.module.scss";
import NavigationButtons from "./components/NavigationButtons";
import { usePortfolioContext } from "./context/PortfolioContext";
import {
  AboutSection,
  CertificationSection,
  ClientProjectsSection,
  ContactSection,
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
   * - REDUCE LOAD TIME
   * 
   * DONE
   * ====
   * - project modal layout on mobile 
   * - Profile section to appear first on load
   * - mobile UI fixes
   * - Desc text format
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
   * - framer motion
   * - animate contact area
   * 
  */

  const { isLoaded, profileData } = usePortfolioContext()

  return isLoaded && profileData ? (
    <div className={style.app}>
      <ProfileSection id={0} />
      <AboutSection id={1} />
      <ClientProjectsSection id={2} />
      <PersonalProjectsSection id={3} />
      <SkillsSection id={4} />
      <ExperienceSection id={5} />
      <EducationSection id={6} />
      <CertificationSection id={7} />
      <ContactSection id={8} />
      <NavigationButtons />
    </div>
  ) : <LoadingScreen />
}

export default App
