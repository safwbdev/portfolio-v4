import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const CertificationSection = () => {
    const { certificationData, defaultImg } = usePortfolioContext()
    return certificationData && (
        <section className={style.certifications}>
            <h4>Certification</h4>
            <div direction="row" spacing={1}>
                {certificationData.map((edu) => (
                    <div key={edu._id}>
                        <div>
                            <img src={edu.img || defaultImg}
                                alt="media"
                            />
                            <h2>
                                {edu.title}
                            </h2>
                            <h5>
                                {edu.school}
                            </h5>
                            <span>{edu.location}</span>
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

export default CertificationSection