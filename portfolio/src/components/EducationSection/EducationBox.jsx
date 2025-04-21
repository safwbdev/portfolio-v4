import React from 'react'

const EducationBox = ({ data }) => {
    const { img, title, school, location } = data
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
            <div className="flex justify-center pt-6 hidden md:flex">
                <img
                    src={img}
                    alt="media"
                    className='bg-white className="h-[150px] w-[150px] object-cover rounded-full border-2 shadow-md"'
                />
            </div>
            <div className="p-5 flex flex-col items-center justify-center text-center">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <h3 className="font-extrabold text-xl mb-2">{school}</h3>
                <p className='py-3'>{location}</p>
            </div>
        </div>
    )
}


export default EducationBox