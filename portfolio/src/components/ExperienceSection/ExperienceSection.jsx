import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import ExperienceBox from './ExperienceBox';
import Slider from '../Slider';
import { useInView } from "react-intersection-observer";

const ExperienceSection = ({ id }) => {
    const { experienceData, setCurrentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return experienceData && (
        <section className='flex text-left justify-center flex-col snap-center md:h-screen pt-10 md:pt-0 px-5 md:px-0' id='experience'>
            <div className="container">
                <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10 text-center md:text-left' ref={ref}>Experience</h2>
                <div className='hidden md:grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {experienceData.map((exp) => (<ExperienceBox key={exp._id} data={exp} />))}
                </div>
                <div className='md:hidden'>
                    <Slider
                        type={'experience'}
                        data={experienceData}
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={false}
                        loop={false}
                    />
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection