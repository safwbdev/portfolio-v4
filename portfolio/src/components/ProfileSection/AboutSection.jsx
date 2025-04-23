import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import DescBox from './DescBox';
import logos from '../../assets/logo.png'
import mas from '../../assets/mas.png'
import { useInView } from 'react-intersection-observer';
import SectionComponent from '../SectionComponent';

const AboutSection = ({ id }) => {
    const { profileData, defaultImg, openContacts, setOpenContacts, setCurrentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return profileData && (
        <SectionComponent id={'about'}>
            <div className='flex flex-col items-center justify-center md:items-stretch md:grid md:grid-cols-3 md:gap-4' ref={ref}>
                <DescBox
                    title={'Hello There!'}
                    image={defaultImg}
                    text={profileData.desc} isFirst />
                <DescBox
                    title={'Tech Stack'}
                    image={logos}
                    text={profileData.techStack}
                    linkText={<>Click <a href='#skills' className='inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mx-1'>here</a> to see what else I'm capable of</>} />
                <DescBox
                    title={`Where I'm at`}
                    image={mas}
                    text={profileData.location}
                    linkText={<span className='invisible md:visible inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer' onClick={() => setOpenContacts(!openContacts)}>Contact me</span>} />
            </div>
        </SectionComponent>

    )
}

export default AboutSection