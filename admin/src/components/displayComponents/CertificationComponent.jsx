import React from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';
import {
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from '@mui/material';

const CertificationComponent = () => {
    const { data, loading } = useFetch(`${API_URL}/certifications`);
    const defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
    return loading ? (<h2>Loading...</h2>) : (
        <div className={'certificationContainer'}>
            <h4>Certification</h4>
            <Stack direction="row" spacing={1}>
                {data.map((edu) => (
                    <Card key={edu._id}>
                        <CardContent>
                            <CardMedia
                                sx={{ height: 50 }}
                                image={edu.img || defaultImg}
                                title="media"
                            />
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

export default CertificationComponent