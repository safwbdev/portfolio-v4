import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import parse from 'html-react-parser';
import Slider from '../Slider';
import { HiXCircle } from "react-icons/hi";

const ProjectScreen = () => {

    const { expandProject, setExpandProject, currentProject, setCurrentProject } = usePortfolioContext();

    if (!currentProject) return;

    const { img, title, desc, demo, github, type } = currentProject

    const closeScreen = () => {
        setCurrentProject(null)
        setExpandProject(false)
    }

    return (
        <>
            {/* BACKDROP */}
            <div
                className={`bg-black/75 z-2 absolute w-full h-full top-0 left-0 items-center justify-center ${expandProject && currentProject ? 'flex' : 'hidden'}`}
                onClick={closeScreen}>
            </div>
            {/* MODAL  */}
            <div className="absolute bg-zinc-900 flex z-3 flex-col left-0 md:left-45 top-0 md:w-9/12 md:flex-row md:top-[30vh]">
                <HiXCircle className='absolute z-4 right-[0.3em] top-[0.3em] text-4xl cursor-pointer' onClick={closeScreen} />
                <div className="gallery flex-1">
                    <Slider
                        type={'gallery'}
                        data={img}
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true}
                        loop={false}
                    />
                </div>
                <div className="details flex-1 flex flex-col p-5" >
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='text-left py-6'>{parse(desc)}</p>
                    <p className='text-left'>
                        {demo && (<a
                            href={demo}
                            className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                            target='_blank'>
                            Demo</a>)}
                        {github !== 'NA' && (<a
                            href={github}
                            className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                            target='_blank'>
                            {type === 'Client' ? 'Credits' : 'Github'}</a>)}
                    </p>
                </div>

            </div>
        </>
    )
}

export default ProjectScreen