import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL, EDIT } from '../../routes';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, TextField } from '@mui/material';
import { userInputs } from '../../formSource';

const Profile = () => {
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
                <Card>
                    <CardMedia
                        component="img"
                        sx={{ width: 500 }}
                        image={defaultImg}
                        alt="NA"
                    />
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
                </Card>
            </Grid>
        </Grid>
    )
}

export default Profile