import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';
import { Link } from 'react-router-dom';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';


const ProfileComponent = () => {
    const [profileData, setProfileData] = useState(null)
    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const { data, loading } = useFetch(`${API_URL}/users`);

    useEffect(() => {
        setProfileData(data[0])
    }, [data])

    useEffect(() => {
        if (profileData) {
            setdefaultImg(profileData.img);
        }
    }, [profileData])
    return loading ? (<h2>Loading ...</h2>) : profileData && (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 500 }}
                image={defaultImg}
                title="media"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {profileData.fullName}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {profileData.designation}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                    {profileData.tagline}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {profileData.location}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {profileData.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">email: {profileData.email}</Button>
                <Button size="small">tel: {profileData.phone}</Button>
                <Link to={profileData.linkedin}>
                    <Button size="small">LinkedIn</Button>
                </Link>
                <Link to={profileData.github}>
                    <Button size="small">Github</Button>
                </Link>
                <Link to={profileData.website}>
                    <Button size="small">Website</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default ProfileComponent