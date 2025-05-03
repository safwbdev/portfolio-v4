import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext'
import parse from 'html-react-parser';

const ProjectBox = ({ data, isClient }) => {
    const { img, title, desc, demo, github } = data
    const { setExpandProject, setCurrentProject } = usePortfolioContext();

    const openProject = () => {
        setExpandProject(true);
        setCurrentProject(data);
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
            <div className="p-9 md:p-0">
                <img src={img[0]} alt="media" />
            </div>
            <div className="md:p-5">
                <h4 className='text-xl md:text-xl md:mt-4 font-bold'>{title}</h4>
                <div className='hidden md:block text-ellipsis overflow-hidden projectDesc px-5 md:p-0'>
                    {parse(desc)}
                </div>
                <button
                    onClick={openProject}
                    className='border-1 my-[1em] mx-0 p-[0.5em] cursor-pointer rounded'>
                    More details
                </button>
                <p className='my-5'>
                    {demo && (<a
                        href={demo}
                        className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                        target='_blank'>
                        Demo</a>)}
                    {github !== 'NA' && (<a
                        href={github}
                        className='inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1'
                        target='_blank'>
                        {isClient ? 'Credits' : 'Github'}</a>)}
                </p>
            </div>
        </div>
    )
}

export default ProjectBox