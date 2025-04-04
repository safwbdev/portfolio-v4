import React, { useEffect, useState } from 'react'
import classes from './Single.module.scss'
import useFetch from '../../hooks/useFetch'
import { API_URL } from '../../routes'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Typography,
    ImageList,
    ImageListItem,
    Grid,
    CardHeader
} from '@mui/material';
import useDataType from '../../hooks/useDataType';

// import { educationInputs, projectInputs } from '../../formSource';

const Single = () => {

    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[2];

    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const [files, setFiles] = useState();

    const { data, loading } = useFetch(`${API_URL}/${path}/${id}`);
    const { inputData } = useDataType(path);

    useEffect(() => {
        if (path === 'users') {
            setdefaultImg(data.img);
        }
        if (path === 'hotels' && data.photos && data.photos.length > 0) {
            setFiles(data.photos)
            setdefaultImg(data.photos[0]);
        }
    }, [data])

    const DisplayData = () => inputData.map((arr) => (
        <div className={classes.descText} key={arr.id}>
            <span>
                {arr.label}:
            </span>
            {data[arr.id] || 'NA'}</div>
    ))


    return loading ? (<CircularProgress />) : (
        <Grid
            alignContent='center'
            container
            justifyContent="center"
            marginTop={5}
            spacing={1}>
            <Card sx={{ display: 'flex', width: '100%' }}>
                {path !== 'rooms' && (<CardMedia
                    component="img"
                    sx={{ width: 500 }}
                    image={defaultImg}
                    alt="NA"
                />)}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1  auto' }}>
                        <Typography component="div" variant="h5">
                            {data.username}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            {path === 'users' ? data.isAdmin ? 'Admin' : 'General User' : ''}
                        </Typography>
                        <DisplayData />
                    </CardContent>
                </Box>
            </Card>
            {files && (
                <Card sx={{ width: '100%' }}>
                    <CardHeader title="All Images" />
                    <CardContent sx={{ flex: '1  auto' }}>
                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {files.map((item, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        srcSet={item}
                                        src={item}
                                        alt='hotelImg'
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </CardContent>
                </Card>)}
        </Grid>
    )
}

export default Single