import React, { useEffect } from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import CertificationBox from './CertificationBox';
import Slider from '../Slider';
import { useInView } from "react-intersection-observer";
import SectionComponent from '../SectionComponent';

const CertificationSection = ({ id }) => {
    const { certificationState, setCurrentSection } = usePortfolioContext();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return certificationState && (
        <SectionComponent id={'certifications'}>
            <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10 text-center md:text-left' ref={ref}>Certifications</h2>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4'>
                {certificationState.map((edu) => (<CertificationBox key={edu._id} data={edu} />))}
            </div>
            <div className='md:hidden'>
                <Slider
                    type={'certifications'}
                    data={certificationState}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    loop={false}
                />
            </div>
        </SectionComponent>
    )
}

export default CertificationSection