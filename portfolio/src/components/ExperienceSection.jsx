import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const ExperienceSection = () => {
    const { experienceData, defaultImg } = usePortfolioContext()

    return experienceData && (
        <section className={style.experience}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Experience</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {experienceData.map((exp) => (
                    <div key={exp._id} className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
                        <div>
                            <img
                                src={exp.img || defaultImg}
                                className='className="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md"'
                                alt="media"
                            />
                            <h4 className='text-2xl md:text-2xl mb-4 font-bold'>
                                {exp.company}
                            </h4>
                            <h5>
                                {exp.position}
                            </h5>
                            <span>
                                {exp.yearStart} - {exp.yearEnd}
                            </span>
                            <p>
                                {exp.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection