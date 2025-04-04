import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';

const SkillsComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/skills`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'skillsContainer'}>
            <h4>Skills</h4>
            <div className='skills'>
                {data.map((skill) => (
                    <div key={skill._id}>{skill.name}</div>
                ))}
            </div>
        </div>
    )
}

export default SkillsComponent