import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import SkillBox from './SkillBox';
import Slider from '../Slider';
import { useInView } from "react-intersection-observer";

const SkillsSection = ({ id }) => {
    const { skillData, setCurrentSection } = usePortfolioContext();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return skillData && (
        <section className='flex text-left justify-center flex-col snap-center md:h-screen pt-10 md:pt-0 px-5 md:px-0' id="skills">
            <div className="container">
                <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10' ref={ref}>Skills</h2>
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
            </div>
        </section>
    )
}

export default SkillsSection