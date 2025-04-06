import React from 'react'
import classes from './Home.module.scss'
import SkillsComponent from '../../components/displayComponents/SkillsComponent';
import ProjectsComponent from '../../components/displayComponents/ProjectsComponent';
import EducationComponent from '../../components/displayComponents/EducationComponent';
import ExperienceComponent from '../../components/displayComponents/ExperienceComponent';
import ProfileComponent from '../../components/displayComponents/ProfileComponent';
import CertificationComponent from '../../components/displayComponents/CertificationComponent';

const Home = () => {

    return (
        <div className={classes.homeContainer}>
            <ProfileComponent />
            <SkillsComponent />
            <ProjectsComponent />
            <EducationComponent />
            <ExperienceComponent />
            <CertificationComponent />
        </div>
    )
}

export default Home