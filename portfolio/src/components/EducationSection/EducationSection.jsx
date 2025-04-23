import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import EducationBox from './EducationBox';
import Slider from '../Slider';
import { useInView } from "react-intersection-observer";
import SectionComponent from '../SectionComponent';

const EducationSection = ({ id }) => {
    const { educationData, setCurrentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return educationData && (
        <SectionComponent id={'education'}>
            <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10 text-center md:text-left' ref={ref}>Education</h2>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4'>
                {educationData.map((edu) => (<EducationBox key={edu._id} data={edu} />))}
            </div>
            <div className='md:hidden'>
                <Slider
                    type={'education'}
                    data={educationData}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    loop={false}
                />
            </div>
        </SectionComponent>

    )
}

export default EducationSection