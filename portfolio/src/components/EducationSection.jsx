import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const EducationSection = () => {
    const { educationData, defaultImg } = usePortfolioContext()
    return educationData && (
        <section className={style.education}>
            <h4>Education</h4>
            <div direction="row" spacing={1}>
                {educationData.map((edu) => (
                    <div key={edu._id}>
                        <div>
                            <img
                                src={edu.img || defaultImg}
                                alt="media"
                            />
                            <h2>
                                {edu.title}
                            </h2>
                            <h5>
                                {edu.school}
                            </h5>
                            <h5>{edu.location}</h5>
                            <p>
                                {edu.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EducationSection