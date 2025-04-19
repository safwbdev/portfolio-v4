import React from 'react'
import useFetch from '../hooks/useFetch';
import { API_URL } from '../routes';

const ExperienceSection = () => {
    const { data, loading } = useFetch(`${API_URL}/experience`);
    const defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'experienceContainer'}>
            <h4>Experience</h4>
            <div direction="row" spacing={1}>
                {data.map((exp) => (
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
        </div>
    )
}

export default ExperienceSection