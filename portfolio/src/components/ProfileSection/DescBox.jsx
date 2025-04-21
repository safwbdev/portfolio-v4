import React from 'react'

const DescBox = ({ title, text, image, linkText, isFirst }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
        <div className={`flex justify-center pt-6 md:flex ${!isFirst && 'hidden'}`}>
            <img className="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md" src={image} alt="Sunset in the mountains" />
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-300 text-base">{text}</p>
            {linkText && (<p className="text-gray-300 text-base pt-5">{linkText}</p>)}
        </div>
    </div>
)


export default DescBox