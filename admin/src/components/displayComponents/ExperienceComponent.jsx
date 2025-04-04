import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';

const ExperienceComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/experience`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'skillsContainer'}>
            <h4>Experience</h4>
            <div className='skills'>
                {data.map((skill) => (
                    <div key={skill._id}>{skill.company}</div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceComponent