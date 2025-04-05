import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL, EDIT } from '../../routes';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, TextField } from '@mui/material';
import { userInputs } from '../../formSource';

const Profile = () => {
    const [profileData, setProfileData] = useState(null)
    const { data, loading } = useFetch(`${API_URL}/users`);
    useEffect(() => {
        setProfileData(data[0])
    }, [data])

    const ProfileSection = () => loading ? (<h2>Loading ...</h2>) : profileData && (
        <div>
            <div className="name">{profileData.fullName}</div>
            <div className="name">{profileData.designation}</div>
            <div className="name">{profileData.desc}</div>
            <div className="name">{profileData.github}</div>
            <div className="name">{profileData.linkedin}</div>
            <div className="name">{profileData.email}</div>
            <div className="name">{profileData.website}</div>
            <div className="name">{profileData.location}</div>
            <div className="name">{profileData.phone}</div>
            <div className="name">{profileData.tagline}</div>
        </div>
    )


    const DisplayData = () => userInputs.map((input) => (
        <Grid size={{ xs: 12, sm: 6 }} key={input.id} >
            <TextField
                id={input.id}
                label={input.label || ''}
                variant="outlined"
                placeholder={data[input.label]}
                value={profileData[input.id]}
                fullWidth
                disabled
                type={input.type} />
        </Grid>
    ))

    return loading ? (<CircularProgress />) : profileData && (

        <Grid container justify="center" spacing={1}>
            <Grid item md={6}>
                <Card className={''}>
                    {/* <CardHeader title={`EDIT `} /> */}
                    <form>
                        <CardContent>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <DisplayData />
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Link to={`${EDIT}/${profileData._id}`}>
                                <Button variant="contained" color="success">Edit</Button>
                            </Link >
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Profile