import React, { useEffect } from "react";
import { usePortfolioContext } from '../../context/PortfolioContext';
import Slider from '../Slider';
import ProjectBox from './ProjectBox';
import ProjectScreen from './ProjectScreen';
import { useInView } from "react-intersection-observer";



const ClientProjectsSection = ({ id }) => {
    const { clientProjects, setCurrentSection } = usePortfolioContext();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return clientProjects && (
        <section id="clientProjects" className="flex text-left justify-center flex-col snap-center md:h-screen pt-10 md:pt-0 px-5 md:px-0">
            <div className="container" >
                <div className="client text-left mb-20">
                    <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10 text-center md:text-left' ref={ref}>Official Projects <br className="flex md:hidden" /> I worked on</h2>
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
        </section>
    )
}

export default ClientProjectsSection