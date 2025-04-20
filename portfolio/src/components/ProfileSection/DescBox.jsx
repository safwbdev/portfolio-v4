import React from 'react'

const DescBox = ({ title, text, image, linkText }) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg border-1 rounded-md">
            <div className="flex justify-center pt-6 hidden md:flex">
                <img class="h-[250px] w-[250px] object-cover rounded-full border-2 shadow-md" src={image} alt="Sunset in the mountains" />
            </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-300 text-base">{text}</p>
                {linkText && (<p class="text-gray-300 text-base pt-5">{linkText}</p>)}
            </div>
        </div>
    )
}

export default DescBox