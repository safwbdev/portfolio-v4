import React from 'react'
import style from "./../App.module.scss";
import useFetch from '../hooks/useFetch';
import { API_URL } from '../routes';

const EducationSection = () => {
    const { data, loading } = useFetch(`${API_URL}/education`);
    const defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
    return loading ? (<h2>Loading...</h2>) : (
        <section className={style.education}>
            <h4>Education</h4>
            <div direction="row" spacing={1}>
                {data.map((edu) => (
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