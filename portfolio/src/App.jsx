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
