import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext'

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
                <img src={img[0]}
                    className='className="h-[50px] w-full object-cover'
                    alt="media"
                />
            </div>
            <div className="md:p-5">
                <h4 className='text-xl md:text-xl md:mt-4 font-bold'>{title}</h4>
                <p className='hidden md:block text-ellipsis overflow-hidden projectDesc px-5 md:p-0'>{desc}</p>
                <button onClick={openProject} style={{ border: '1px solid white', margin: '1em 0', padding: '.5em', cursor: 'pointer' }}>More details</button >
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