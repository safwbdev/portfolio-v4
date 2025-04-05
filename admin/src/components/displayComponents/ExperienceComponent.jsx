import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ExperienceComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/experience`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'experienceContainer'}>
            <h4>Experience</h4>
            <div className='experience'>
                {data.map((exp) => (
                    <Card key={exp._id}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                {exp.yearStart} - {exp.yearEnd}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {exp.company}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{exp.position}</Typography>
                            <Typography variant="body2">
                                {exp.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ExperienceComponent