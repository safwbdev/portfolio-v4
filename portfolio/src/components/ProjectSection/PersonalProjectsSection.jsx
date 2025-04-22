import React, { useEffect } from "react";
import { usePortfolioContext } from '../../context/PortfolioContext';
import Slider from '../Slider';
import ProjectBox from './ProjectBox';
import ProjectScreen from './ProjectScreen';
import { useInView } from "react-intersection-observer";



const PersonalProjectsSection = ({ id }) => {
    const { personalProjects, setCurrentSection } = usePortfolioContext();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return personalProjects && (
        <section id="personalProjects">
            <div className="container">
                <div className="text-left personal">
                    <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10' ref={ref}>Personal Works</h2>
                    <div className='hidden md:grid grid-cols-1 md:grid-cols-1 gap-4'>
                        <Slider
                            type={'personalPojects'}
                            data={personalProjects}
                            slidesPerView={4}
                            spaceBetween={60}
                            navigation={true}
                            loop={true}
                        />
                    </div>
                </div>
                <div className='md:hidden'>
                    <Slider type={'personalPojects'} data={personalProjects} />
                </div>
            </div>
        </section>
    )
}

export default PersonalProjectsSection