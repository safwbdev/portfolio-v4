import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import EducationBox from './EducationBox';
import Slider from '../Slider';

const EducationSection = () => {
    const { educationData } = usePortfolioContext()
    return educationData && (
        <section className='flex text-left justify-center flex-col snap-center md:h-screen pt-10 md:pt-0 px-5 md:px-0'>
            <div className="container">
                <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10'>Education</h2>
                <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {educationData.map((edu) => (<EducationBox key={edu._id} data={edu} />))}
                </div>
                <div className='md:hidden'>
                    <Slider type={'education'} data={educationData} />
                </div>
            </div>
        </section>
    )
}

export default EducationSection