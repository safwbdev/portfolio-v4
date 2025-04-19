import React from 'react'
import useFetch from '../hooks/useFetch';
import { API_URL } from '../routes';

const ProjectsSection = () => {
    const { data, loading } = useFetch(`${API_URL}/projects`);
    const defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'projectsContainer'}>
            <h4>Projects</h4>
            <div className="row">
                {data.map((proj) => (
                    <div key={proj._id}>
                        <div>
                            <img src={proj.img[0] || defaultImg}
                                alt="media"
                            />
                            <h2>
                                {proj.type}
                            </h2>
                            <h5 variant="h5" component="div">
                                {proj.title}
                            </h5>
                            <span sx={{ color: 'text.secondary', mb: 1.5 }}>{proj.stack}</span>
                            <p>
                                {proj.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection