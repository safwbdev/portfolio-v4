import React from 'react'
import parse from 'html-react-parser';

const DescBox = ({ title, text, image, linkText, isFirst }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-0 md:border-1 rounded-md mb-8">
        <div className={`hidden md:flex justify-center pt-6 md:flex ${!isFirst && 'hidden'}`}>
            <img className="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md" src={image} alt="Sunset in the mountains" />
        </div>
        <div className="py-0 md:px-6 md:py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <div className="text-gray-300 text-base">{parse(text)}</div>
            {linkText && (<p className="text-gray-300 text-base pt-5">{linkText}</p>)}
        </div>
    </div>
)


export default DescBox