import React from 'react'
import classes from './Home.module.scss'
import SkillsComponent from '../../components/displayComponents/SkillsComponent';
import ProjectsComponent from '../../components/displayComponents/ProjectsComponent';
import EducationComponent from '../../components/displayComponents/EducationComponent';
import ExperienceComponent from '../../components/displayComponents/ExperienceComponent';

const Home = () => {

    return (
        <div className={classes.homeContainer}>
            <SkillsComponent />
            <ProjectsComponent />
            <EducationComponent />
            <ExperienceComponent />
        </div>
    )
}

export default Home