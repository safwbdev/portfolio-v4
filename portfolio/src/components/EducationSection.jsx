import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const EducationSection = () => {
    const { educationData, defaultImg } = usePortfolioContext()
    return educationData && (
        <section className={style.education}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Education</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {educationData.map((edu) => (
                    <div key={edu._id} className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
                        <img
                            src={edu.img || defaultImg}
                            alt="media"
                            className='className="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md"'
                        />
                        <h2>{edu.title}</h2>
                        <h5>{edu.school}</h5>
                        <h5>{edu.location}</h5>
                        <p>{edu.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EducationSection