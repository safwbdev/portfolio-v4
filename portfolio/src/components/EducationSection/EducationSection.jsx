import React from 'react'
import style from "./../../App.module.scss";
import { usePortfolioContext } from '../../context/PortfolioContext';
import EducationBox from './EducationBox';

const EducationSection = () => {
    const { educationData } = usePortfolioContext()
    return educationData && (
        <section className={style.education}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Education</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {educationData.map((edu) => (<EducationBox key={edu._id} data={edu} />))}
            </div>
        </section>
    )
}

export default EducationSection