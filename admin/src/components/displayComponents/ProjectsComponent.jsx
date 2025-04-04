import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';

const ProjectsComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/projects`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'skillsContainer'}>
            <h4>Projects</h4>
            <div className='skills'>
                {data.map((skill) => (
                    <div key={skill._id}>{skill.title}</div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsComponent