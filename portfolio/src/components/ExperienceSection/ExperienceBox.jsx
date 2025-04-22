import React from 'react'

const ExperienceBox = ({ data }) => {
    const { img, company, position, yearStart, yearEnd, desc } = data

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
            <div className="flex justify-center pt-6 hidden md:flex">
                <img
                    src={img}
                    className='className="h-[125px] w-[125px] object-cover rounded-full border-2 shadow-md"'
                    alt="media"
                />
            </div>
            <div className="p-5 flex flex-col items-center justify-center text-center">
                <h2 className="font-bold text-xl mb-2">{company}</h2>
                <h3 className="font-extrabold text-xl mb-2">{position}</h3>
                <p className='py-3'>{yearStart} - {yearEnd}</p>
                <p className='hidden'>{desc}</p>
            </div>
        </div>
    )
}

export default ExperienceBox