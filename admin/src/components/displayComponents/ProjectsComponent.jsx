import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const ProjectsComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/projects`);

    return loading ? (<h2>Loading...</h2>) : (
        <div className={'projectsContainer'}>
            <h4>Projects</h4>
            <Stack direction="row" spacing={1}>
                {data.map((proj) => (
                    <Card key={proj._id}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                {proj.type}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {proj.title}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{proj.stack}</Typography>
                            <Typography variant="body2">
                                {proj.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </div>
    )
}

export default ProjectsComponent