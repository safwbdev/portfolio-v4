import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const SkillsSection = () => {
    const { skillData } = usePortfolioContext();

    return skillData && (
        <section className={style.skills} id="skills" style={{ textAlign: 'left' }}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {skillData.map((skill) => (
                    <div className='mb-4' key={skill.type}>
                        <h4 className='text-2xl md:text-2xl mb-4 font-bold'>{skill.type}</h4>
                        <div direction="row">
                            {skill.skills.map((sk) => (<span key={sk} className='inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mx-1' >{sk}</span>))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection