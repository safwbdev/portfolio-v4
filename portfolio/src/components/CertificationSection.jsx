import React from 'react'
import useFetch from '../hooks/useFetch';
import { API_URL } from '../routes';

const CertificationSection = () => {
    const { data, loading } = useFetch(`${API_URL}/certifications`);
    const defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
    return loading ? (<h2>Loading...</h2>) : (
        <div className={'certificationContainer'}>
            <h4>Certification</h4>
            <div direction="row" spacing={1}>
                {data.map((edu) => (
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
        </div>
    )
}

export default CertificationSection