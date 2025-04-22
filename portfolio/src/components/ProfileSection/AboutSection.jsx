import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import DescBox from './DescBox';
import logos from '../../assets/logo.png'
import mas from '../../assets/mas.png'
import { useInView } from 'react-intersection-observer';

const AboutSection = ({ id }) => {
    const { profileData, defaultImg, openContacts, setOpenContacts, setCurrentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return profileData && (
        <section id='about'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4' ref={ref}>
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
                        linkText={<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer' onClick={() => setOpenContacts(!openContacts)}>Contact me</span>} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection