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
    const { clientProjects,
        personalProjects, defaultImg } = usePortfolioContext();

    return (
        <>
            {clientProjects && (<section id="clientProjects">
                <div className="client text-left mb-20">
                    <h2 className='text-2xl md:text-2xl mb-4 font-bold'>Official Projects I worked on</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {/* <Slider {...settings}> */}
                        {clientProjects.map((proj) => (
                            <div key={proj._id} className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
                                <img src={proj.img[0]}
                                    className='className="h-[50px] w-full object-cover"'
                                    alt="media"
                                />
                                <div className="p-5">
                                    <h4 className='text-xl md:text-xl mt-4 font-bold'>{proj.title}</h4>
                                    <p className=''>{proj.desc}</p>
                                    <p className='my-5'>
                                        {proj.demo && (<a
                                            href={proj.demo}
                                            className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                                            target='_blank'>
                                            Demo</a>)}
                                        {proj.github !== 'NA' && (<a
                                            href={proj.github}
                                            className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                                            target='_blank'>
                                            Credits</a>)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* </Slider> */}
                </div></section>)}
            {personalProjects && (
                <section id="personalProjects">
                    <div className="text-left personal">
                        <h2 className='text-2xl md:text-2xl mb-4 font-bold'>Personal Works</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {/* <Slider {...settings}> */}
                            {personalProjects.map((proj) => (
                                <div key={proj._id} className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
                                    <img src={proj.img[0]}
                                        className='className="h-[50px] w-full object-cover"'
                                        alt="media"
                                    />
                                    <div className="p-5">
                                        <h4 className='text-xl md:text-xl mt-4 font-bold'>{proj.title}</h4>
                                        <p className=''>{proj.desc}</p>
                                        <p className='my-5'>
                                            {proj.demo && (<a
                                                href={proj.demo}
                                                className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                                                target='_blank'>
                                                Demo</a>)}
                                            {proj.github && (<a
                                                href={proj.github}
                                                className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                                                target='_blank'>
                                                Github</a>)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* </Slider> */}
                    </div>
                </section>)}
        </>
    )
}

export default ProjectsSection