import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';

const EducationComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/education`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'skillsContainer'}>
            <h4>Education</h4>
            <div className='skills'>
                {data.map((skill) => (
                    <div key={skill._id}>{skill.title}</div>
                ))}
            </div>
        </div>
    )
}

export default EducationComponent