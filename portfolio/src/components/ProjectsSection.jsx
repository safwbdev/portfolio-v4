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
            <div className="row">
                {/* <Slider {...settings}> */}
                {projectData.map((proj) => (
                    <div key={proj._id}>
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
                ))}
                {/* </Slider> */}
            </div>
        </section>
    )
}

export default ProjectsSection