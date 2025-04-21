import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import Slider from '../Slider';
import ProjectBox from './ProjectBox';


const ProjectsSection = () => {
    const { clientProjects,
        personalProjects, defaultImg } = usePortfolioContext();

    return (
        <>
            {clientProjects && (<section id="clientProjects">
                <div className="client text-left mb-20">
                    <h2 className='text-2xl md:text-2xl mb-4 font-bold'>Official Projects I worked on</h2>
                    <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {clientProjects.map((proj) => (<ProjectBox key={proj._id} data={proj} isClient />))}

                    </div>
                    <div className='md:hidden'>
                        <Slider />
                    </div>
                </div>
            </section>)}
            {personalProjects && (
                <section id="personalProjects">
                    <div className="text-left personal">
                        <h2 className='text-2xl md:text-2xl mb-4 font-bold'>Personal Works</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {personalProjects.map((proj) => (<ProjectBox key={proj._id} data={proj} />))}
                        </div>
                    </div>
                </section>)}
        </>
    )
}

export default ProjectsSection