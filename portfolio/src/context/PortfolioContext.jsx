import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { API_URL } from '../routes'

const portfolioContext = createContext(undefined);

const PortfolioContext = (props) => {
    const [openContacts, setOpenContacts] = useState(false)
    const [profileData, setProfileData] = useState(null)
    const [clientProjects, setClientProjects] = useState([])
    const [personalProjects, setPersonalProjects] = useState([])
    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const [isLoaded, setIsLoaded] = useState(false);
    const [expandProject, setExpandProject] = useState(false);
    const [skillData, setskillData] = useState([])
    const [currentProject, setCurrentProject] = useState(null)
    const [currentSection, setCurrentSection] = useState(0)

    const { data: sData, loading: sLoading } = useFetch(`${API_URL}/skills`);
    const { data: pData, loading: pLoading } = useFetch(`${API_URL}/users`);
    const { data: projectData, projectLoading } = useFetch(`${API_URL}/projects`);
    const { data: certificationData, loading: cLoading } = useFetch(`${API_URL}/certifications`);
    const { data: educationData, loading: eduLoading } = useFetch(`${API_URL}/education`);
    const { data: experienceData, loading: expLoading } = useFetch(`${API_URL}/experience`);

    const getTypeArray = (array) => {
        let tempArr = [];
        array.map(arr => {
            if (!tempArr.includes(arr.type)) tempArr.push(arr.type)
        })
        if (tempArr) return tempArr
    }

    useEffect(() => {
        setProfileData(pData[0])
    }, [pData])

    useEffect(() => {
        if (profileData) {
            setdefaultImg(profileData.img);
        }
    }, [profileData]);
    useEffect(() => {
        if (projectData) {
            setClientProjects(projectData.filter(val => val.type.includes('Client')));
            setPersonalProjects(projectData.filter(val => !val.type.includes('Client')))
        }
    }, [projectData]);

    useEffect(() => {
        if (sLoading && pLoading && projectLoading && cLoading && eduLoading && expLoading) return;
        if (pData.length === 0 && sData.length === 0 && projectData.length === 0 && certificationData.length === 0 && educationData.length === 0 && experienceData.length === 0) return;
        setIsLoaded(true)
    }, [sLoading, pLoading, projectLoading, cLoading, eduLoading, expLoading, sData,
        pData, projectData, certificationData, educationData, experienceData]);

    useEffect(() => {
        let tempArr = [];
        const typeArr = getTypeArray(sData);
        typeArr.map(type => {
            let tempArr2 = [];
            sData.map(d => {
                if (d.type === type) {
                    tempArr2.push(d.name)
                }

            })
            tempArr.push({
                type: type,
                skills: tempArr2
            });
        })

        if (tempArr) setskillData(tempArr)
    }, [sData])

    const values = useMemo(() => ({
        profileData,
        setProfileData,
        isLoaded,
        setIsLoaded,
        defaultImg,
        setdefaultImg,
        openContacts,
        setOpenContacts,
        skillData,
        setskillData,
        clientProjects,
        personalProjects,
        certificationData,
        educationData,
        experienceData,
        expandProject,
        setExpandProject,
        currentProject,
        setCurrentProject,
        currentSection,
        setCurrentSection
    }), [
        profileData,
        setProfileData,
        isLoaded,
        setIsLoaded,
        defaultImg,
        setdefaultImg,
        openContacts,
        setOpenContacts,
        skillData,
        setskillData,
        clientProjects,
        personalProjects,
        certificationData,
        educationData,
        experienceData,
        expandProject,
        setExpandProject,
        currentProject,
        setCurrentProject,
        currentSection,
        setCurrentSection
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