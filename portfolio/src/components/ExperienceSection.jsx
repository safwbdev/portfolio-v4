import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const ExperienceSection = () => {
    const { experienceData, defaultImg } = usePortfolioContext()

    return experienceData && (
        <section className={style.experience}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Experience</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {experienceData.map((exp) => (
                    <div key={exp._id} className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
                        <div className="flex justify-center pt-6 hidden md:flex">
                            <img
                                src={exp.img || defaultImg}
                                className='className="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md"'
                                alt="media"
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="font-bold text-xl mb-2">{exp.company}</h2>
                            <h3 className="font-extrabold text-xl mb-2">{exp.position}</h3>
                            <p className='py-3'>{exp.yearStart} - {exp.yearEnd}</p>
                            {/* <p>{exp.desc}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection