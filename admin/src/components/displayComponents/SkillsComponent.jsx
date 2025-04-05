import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const SkillsComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/skills`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'skillsContainer'}>
            <h4>Skills</h4>
            <Stack direction="row" spacing={1}>
                {data.map((skill) => (
                    <Chip key={skill._id} label={skill.name} />
                ))}
            </Stack>
        </div>
    )
}

export default SkillsComponent