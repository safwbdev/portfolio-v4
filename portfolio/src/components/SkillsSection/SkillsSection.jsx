import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import SkillBox from './SkillBox';
import Slider from '../Slider';
import { useInView } from "react-intersection-observer";
import SectionComponent from '../SectionComponent';

const SkillsSection = ({ id }) => {
    const { skillData, setCurrentSection } = usePortfolioContext();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return skillData && (
        <SectionComponent id={'skills'}>
            <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10 text-center md:text-left' ref={ref}>Skills</h2>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-2 gap-4'>
                {skillData.map((skill) => (<SkillBox key={skill.type} data={skill} />))}
            </div>
            <div className='md:hidden'>
                <Slider
                    type={'skills'}
                    data={skillData}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={false}
                    loop={true}
                />
            </div>
        </SectionComponent>
    )
}

export default SkillsSection