import React, { useEffect } from 'react'
import SectionComponent from '../SectionComponent'
import { useInView } from "react-intersection-observer";
import { usePortfolioContext } from '../../context/PortfolioContext';
import { FaArrowDown } from "react-icons/fa";

const ContactSection = ({ id }) => {

    const { setCurrentSection, currentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return (
        <SectionComponent id={'contactMe'}>
            <div
                ref={ref}
                className='flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-4xl md:text-6xl text-center'>
                    Interested in reaching out?
                </h1>
                <h2
                    className={`${currentSection === 8 ? 'flex' : 'hidden'} font-bold text-xl md:text-4xl fixed bottom-25/100 md:bottom-15/100 left-1/2 w-full flex justify-center z-2`}
                    style={{ transform: 'translate(-50%, -50%)' }}>
                    Click here to see how
                </h2>
                <FaArrowDown
                    className={`${currentSection === 8 ? 'flex' : 'hidden'} font-bold text-6xl fixed bottom-10/100 md:bottom-7/100 left-1/2 w-fit flex justify-center z-2`}
                    style={{ transform: 'translate(-50%, -50%)' }} />
            </div>
        </SectionComponent>
    )
}

export default ContactSection