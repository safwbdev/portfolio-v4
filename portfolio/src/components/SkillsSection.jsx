import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { API_URL } from '../routes';

const SkillsSection = () => {
    const [skillData, setskillData] = useState([])
    const { data, loading } = useFetch(`${API_URL}/skills`);

    const getTypeArray = (array) => {
        let tempArr = [];
        array.map(arr => {
            if (!tempArr.includes(arr.type)) tempArr.push(arr.type)
        })
        if (tempArr) return tempArr
    }

    useEffect(() => {
        let tempArr = [];
        const typeArr = getTypeArray(data);
        typeArr.map(type => {
            let tempArr2 = [];
            data.map(d => {
                if (d.type === type) {
                    tempArr2.push(d.name)
                }

            })
            tempArr.push({
                type: type,
                skills: tempArr2
            });
        })

        if (tempArr) setskillData(tempArr)
    }, [data])

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'skillsContainer'}>
            <h2>Skills</h2>
            {skillData.map((skill) => (
                <div className='skillSection' key={skill.type}>
                    <h4>{skill.type}</h4>
                    <div direction="row">
                        {skill.skills.map((sk) => (<span key={sk} >{sk}, </span>))}
                    </div>
                </div>
            ))}


        </div>
    )
}

export default SkillsSection