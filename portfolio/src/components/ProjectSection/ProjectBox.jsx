import React from 'react'

const ProjectBox = ({ data, isClient }) => {
    const { img, title, desc, demo, github } = data
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
            <img src={img[0]}
                className='className="h-[50px] w-full object-cover"'
                alt="media"
            />
            <div className="p-5">
                <h4 className='text-xl md:text-xl mt-4 font-bold'>{title}</h4>
                <p className=''>{desc}</p>
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