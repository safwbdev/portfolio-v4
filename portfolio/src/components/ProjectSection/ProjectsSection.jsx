import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import Slider from '../Slider';
import ProjectBox from './ProjectBox';
import ProjectScreen from './ProjectScreen';


const ProjectsSection = () => {
    const { clientProjects, personalProjects } = usePortfolioContext();

    return (
        <>
            {clientProjects && (<section id="clientProjects">
                <div className="container">
                    <div className="client text-left mb-20">
                        <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10'>Official Projects I worked on</h2>
                        <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {clientProjects.map((proj) => (<ProjectBox key={proj._id} data={proj} isClient />))}

                        </div>
                        <div className='md:hidden'>
                            <Slider type={'clientPojects'} data={clientProjects}
                                slidesPerView={1}
                                spaceBetween={60}
                                navigation={true}
                                loop={false} />
                        </div>
                    </div>
                </div>
                <ProjectScreen />
            </section>)}
            {personalProjects && (
                <section id="personalProjects">
                    <div className="container">
                        <div className="text-left personal">
                            <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10'>Personal Works</h2>
                            <div className='hidden md:grid grid-cols-1 md:grid-cols-1 gap-4'>
                                <Slider
                                    type={'personalPojects'}
                                    data={personalProjects}
                                    slidesPerView={4}
                                    spaceBetween={60}
                                    navigation={true}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <Slider type={'personalPojects'} data={personalProjects} />
                        </div>
                    </div>
                </section>)}
        </>
    )
}

export default ProjectsSection