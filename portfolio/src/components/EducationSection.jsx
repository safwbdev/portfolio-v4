import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const EducationSection = () => {
    const { educationData, defaultImg } = usePortfolioContext()
    return educationData && (
        <section className={style.education}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Education</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {educationData.map((edu) => (
                    <div key={edu._id} className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
                        <div className="flex justify-center pt-6 hidden md:flex">
                            <img
                                src={edu.img}
                                alt="media"
                                className='bg-white className="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md"'
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="font-bold text-xl mb-2">{edu.title}</h2>
                            <h3 className="font-extrabold text-xl mb-2">{edu.school}</h3>
                            <p className='py-3'>{edu.location}</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default EducationSection