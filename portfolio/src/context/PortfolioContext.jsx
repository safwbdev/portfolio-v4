import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
    PROFILE_PATH,
    SKILL_PATH,
    PROJECT_PATH,
    CERTIFICATION_PATH,
    EDUCATION_PATH,
    EXPERIENCE_PATH
} from '../routes'
import axios from 'axios';

const portfolioContext = createContext(undefined);

const PortfolioContext = (props) => {
    const [openContacts, setOpenContacts] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [clientProjects, setClientProjects] = useState(null);
    const [personalProjects, setPersonalProjects] = useState(null);
    const [certificationData, setCertificationData] = useState(null);
    const [educationData, setEducationData] = useState(null);
    const [experienceData, setExperienceData] = useState(null);
    const [skillData, setskillData] = useState(null);
    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const [isLoaded, setIsLoaded] = useState(false);
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

            setProfileData(profile.data[0])
            setdefaultImg(profile.data[0].img)
            setClientProjects(projects.data.filter(val => val.type.includes('Client')))
            setPersonalProjects(projects.data.filter(val => !val.type.includes('Client')))
            setCertificationData(certifications.data)
            setEducationData(education.data)
            setExperienceData(experience.data)
            setskillData(sortSkills(skills.data))
            setIsLoaded(true)
        };
        fetchData();
    }, []);

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
        profileData,
        skillData,
        clientProjects,
        personalProjects,
        certificationData,
        educationData,
        experienceData,
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
        profileData,
        skillData,
        clientProjects,
        personalProjects,
        certificationData,
        educationData,
        experienceData,
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