import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import ExperienceBox from './ExperienceBox';
import Slider from '../Slider';
import { useInView } from "react-intersection-observer";
import SectionComponent from '../SectionComponent';

const ExperienceSection = ({ id }) => {
    const { experienceState, setCurrentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return experienceState && (
        <SectionComponent id={'experience'}>
            <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10 text-center md:text-left' ref={ref}>Experience</h2>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-4 gap-4'>
                {experienceState.map((exp) => (<ExperienceBox key={exp._id} data={exp} />))}
            </div>
            <div className='md:hidden'>
                <Slider
                    type={'experience'}
                    data={experienceState}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    loop={false}
                />
            </div>
        </SectionComponent>
    )
}

export default ExperienceSection