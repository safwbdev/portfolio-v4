import React from 'react'
import style from "./../../App.module.scss";
import { usePortfolioContext } from '../../context/PortfolioContext';
import ExperienceBox from './ExperienceBox';

const ExperienceSection = () => {
    const { experienceData, defaultImg } = usePortfolioContext()

    return experienceData && (
        <section className={style.experience}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Experience</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {experienceData.map((exp) => (<ExperienceBox key={exp._id} data={exp} />))}
            </div>
        </section>
    )
}

export default ExperienceSection