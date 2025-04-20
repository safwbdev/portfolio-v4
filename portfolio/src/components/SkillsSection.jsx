import React from 'react'
import style from "./../App.module.scss";
import { usePortfolioContext } from '../context/PortfolioContext';

const SkillsSection = () => {
    const { skillData } = usePortfolioContext();

    return skillData && (
        <section className={style.skills} id="skills">
            <h2>Skills</h2>
            {skillData.map((skill) => (
                <div className='skillSection' key={skill.type}>
                    <h4>{skill.type}</h4>
                    <div direction="row">
                        {skill.skills.map((sk) => (<span key={sk} >{sk}, </span>))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SkillsSection