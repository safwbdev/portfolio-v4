import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';
import {
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material';

const EducationComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/education`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'educationContainer'}>
            <h4>Education</h4>
            <Stack direction="row" spacing={1}>
                {data.map((edu) => (
                    <Card key={edu._id}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                {edu.title}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {edu.school}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{edu.location}</Typography>
                            <Typography variant="body2">
                                {edu.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </div>
    )
}

export default EducationComponent