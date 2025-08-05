import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
    PROFILE_PATH,
    SKILL_PATH,
    PROJECT_PATH,
    CERTIFICATION_PATH,
    EDUCATION_PATH,
    EXPERIENCE_PATH,
    STATIC_MODE
} from '../routes'
import axios from 'axios';
import { certificationData, educationData, experienceData, profileData, projectData, skillData } from '../utils/data';

const portfolioContext = createContext(undefined);

const getTypeArray = (array) => {
    let tempArr = [];
    array.map(arr => {
        if (!tempArr.includes(arr.type)) tempArr.push(arr.type)
    })
    if (tempArr) return tempArr
}

const sortSkills = (skillArr) => {
    let tempArr = [];
    const typeArr = getTypeArray(skillArr);
    typeArr.map(type => {
        let tempArr2 = [];
        skillArr.map(d => {
            if (d.type === type) {
                tempArr2.push(d.name)
            }
        })
        tempArr.push({
            type: type,
            skills: tempArr2
        });
    })

    if (tempArr) return tempArr
}

const PortfolioContext = (props) => {
    const [profileState, setProfileState] = useState(STATIC_MODE ? profileData : null);
    const [clientProjects, setClientProjects] = useState(STATIC_MODE ? projectData.filter(val => val.type.includes('Client')) : null);
    const [personalProjects, setPersonalProjects] = useState(STATIC_MODE ? projectData.filter(val => val.type.includes('Personal')) : null);
    const [certificationState, setCertificationState] = useState(STATIC_MODE ? certificationData : null);
    const [educationState, setEducationState] = useState(STATIC_MODE ? educationData : null);
    const [experienceState, setExperienceState] = useState(STATIC_MODE ? experienceData : null);
    const [skillState, setskillState] = useState(STATIC_MODE ? sortSkills(skillData) : null);
    const [defaultImg, setdefaultImg] = useState(STATIC_MODE ? profileData.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");

    const [isLoaded, setIsLoaded] = useState(false);
    const [openContacts, setOpenContacts] = useState(false);
    const [expandProject, setExpandProject] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [currentSection, setCurrentSection] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            const profile = await axios(PROFILE_PATH);
            const skills = await axios(SKILL_PATH);
            const projects = await axios(PROJECT_PATH);
            const certifications = await axios(CERTIFICATION_PATH);
            const education = await axios(EDUCATION_PATH);
            const experience = await axios(EXPERIENCE_PATH);

            setProfileState(profile.data[0])
            setdefaultImg(profile.data[0].img)
            setClientProjects(projects.data.filter(val => val.type.includes('Client')))
            setPersonalProjects(projects.data.filter(val => !val.type.includes('Personal')))
            setCertificationState(certifications.data)
            setEducationState(education.data)
            setExperienceState(experience.data)
            setskillState(sortSkills(skills.data))
            setIsLoaded(true)

        };

        if (STATIC_MODE) {
            setIsLoaded(true)
        } else {
            fetchData();
        }
    }, []);

    const values = useMemo(() => ({
        isLoaded,
        defaultImg,
        openContacts,
        setOpenContacts,
        expandProject,
        setExpandProject,
        currentProject,
        setCurrentProject,
        currentSection,
        setCurrentSection,
        profileState,
        skillState,
        clientProjects,
        personalProjects,
        certificationState,
        educationState,
        experienceState,
    }), [
        isLoaded,
        defaultImg,
        openContacts,
        setOpenContacts,
        expandProject,
        setExpandProject,
        currentProject,
        setCurrentProject,
        currentSection,
        setCurrentSection,
        profileState,
        skillState,
        clientProjects,
        personalProjects,
        certificationState,
        educationState,
        experienceState,
    ])

    return (
        <portfolioContext.Provider value={values}>
            {props.children}
        </portfolioContext.Provider>
    )
}

const usePortfolioContext = () => {
    const context = useContext(portfolioContext);
    if (!context) {
        throw new Error('Error!');
    }
    return context
}
export { PortfolioContext, usePortfolioContext }