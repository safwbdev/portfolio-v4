import React from 'react'

const CertificationBox = ({ data }) => {
    const { title, school, location, date } = data
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
            <div className="p-5">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <h3 className="font-extrabold text-xl mb-2">{school}</h3>
                <p className='py-3'>{location}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default CertificationBox