import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';
// import Slider from "react-slick";

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

const ProjectsSection = () => {
    const { projectData, defaultImg } = usePortfolioContext();

    return projectData && (
        <section className={style.projects}>
            <h4>Projects</h4>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {/* <Slider {...settings}> */}
                {projectData.map((proj) => (
                    <div key={proj._id} className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
                        <img src={proj.img[0] || defaultImg}
                            className='className="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md"'
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
                ))}
                {/* </Slider> */}
            </div>
        </section>
    )
}

export default ProjectsSection