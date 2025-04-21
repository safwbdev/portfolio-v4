import React from 'react'

const SkillBox = ({ data }) => {
    return (
        <div className='mb-4'>
            <h4 className='text-2xl md:text-2xl mb-4 font-bold'>{data.type}</h4>
            <div direction="row">
                {data.skills.map((skill) => (<span key={skill} className='inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mx-1 my-1' >{skill}</span>))}
            </div>
        </div>
    )
}

export default SkillBox