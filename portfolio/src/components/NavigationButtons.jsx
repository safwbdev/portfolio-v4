import React from 'react'
import { usePortfolioContext } from '../context/PortfolioContext'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const NavigationButtons = () => {
    const { currentSection } = usePortfolioContext()

    const getAnchorLink = (num) => {
        switch (num) {
            case 0:
                return '#main'
            case 1:
                return '#about'
            case 2:
                return '#clientProjects'
            case 3:
                return '#personalProjects'
            case 4:
                return '#skills'
            case 5:
                return '#experience'
            case 6:
                return '#education'
            case 7:
                return '#certifications'
            default:
                return
        }
    }
    return (
        <div className='hidden md:flex'>
            <div className={`absolute top-1/35 right-1/50 bg-white text-black font-bold py-4 px-4 rounded-full text-xl ${currentSection === 0 && 'hidden'}`}>
                <a href={getAnchorLink(currentSection - 1)}>
                    <FaArrowUp />
                </a>
            </div>
            <div className={`absolute bottom-1/35 right-1/50 bg-white text-black font-bold py-4 px-4 rounded-full text-xl ${currentSection === 7 && 'hidden'}`}>
                <a href={getAnchorLink(currentSection + 1)}>
                    <FaArrowDown />
                </a>
            </div>
        </div>
    )
}

export default NavigationButtons