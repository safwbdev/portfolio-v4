import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const ExperienceSection = () => {
    const { experienceData, defaultImg } = usePortfolioContext()

    return experienceData && (
        <section className={style.experience}>
            <h4>Experience</h4>
            <div direction="row" spacing={1}>
                {experienceData.map((exp) => (
                    <div key={exp._id}>
                        <div>
                            <img
                                src={exp.img || defaultImg}
                                alt="media"
                            />
                            <h5>
                                {exp.yearStart} - {exp.yearEnd}
                            </h5>
                            <h4 variant="h5" component="div">
                                {exp.company}
                            </h4>
                            <span>{exp.position}</span>
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