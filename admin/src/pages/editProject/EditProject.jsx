import React, { useEffect, useState } from 'react'
import classes from './EditProject.module.scss'
import useFetch from '../../hooks/useFetch'
import { API_URL, CERTIFICATIONS, IMG_UPLOAD_PATH, PROJECTS, SKILLS } from '../../routes'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CircularProgress,
    Fab,
    Grid,
    ImageList,
    ImageListItem,
    TextField,
} from '@mui/material';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from '@mui/icons-material/Close';

import useDataType from '../../hooks/useDataType'

const EditProject = () => {
    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[3];
    const { data, loading } = useFetch(`${API_URL}/${path}/${id}`);
    const { inputData } = useDataType(path);
    const requiresImage = path !== SKILLS && path !== CERTIFICATIONS;

    const [info, setInfo] = useState({});
    const [files, setFiles] = useState("");
    const [previewImages, setPreviewImages] = useState([]);
    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const navigate = useNavigate()

    useEffect(() => {
        setInfo(data);
    }, [data])

    useEffect(() => {
        if (!requiresImage) return;
        if (path === PROJECTS && info.img && info.img.length > 0) {
            setdefaultImg(info.img[0]);
            setPreviewImages(info.img)
        }
    }, [info])


    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async () => {
        let updatedData = {};
        if (files) {
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "upload");
                    const uploadRes = await axios.post(IMG_UPLOAD_PATH, data);
                    const { url } = uploadRes.data;
                    return url
                }));

            updatedData = { ...info, img: list, };

        } else {
            updatedData = { ...info };
        }

        try {
            await axios.put(`${API_URL}/${path}/${id}`, updatedData);
            const getType = path[0].toUpperCase() + path.slice(1);
            toast.success(`${getType.slice(0, -1)} has been updated!`);
            navigate(`/${path}`)
        } catch (err) {
            console.log(err);
        }
    }

    // Update Preview 
    useEffect(() => {
        setPreviewImages([])
        Object.values(files).map((item, index) => {
            setPreviewImages(prev => [...prev, URL.createObjectURL(files[index])]);
        })


    }, [files])



    return loading ? (<CircularProgress />) : (
        <Grid container justify="center" spacing={1}>
            <Grid md={6}>
                <Card className={classes.padding}>
                    <CardHeader title={`EDIT ${path.toLocaleUpperCase().slice(0, -1)}`} />
                    <form>
                        <CardContent>
                            {requiresImage && (<CardHeader title={
                                <>
                                    <label htmlFor="file"
                                        style={{
                                            alignItems: "center",
                                            display: "flex",
                                            width: 'max-content'
                                        }}>
                                        <DriveFolderUploadOutlinedIcon
                                            className={classes.icon} style={{ marginRight: '.3em' }} />
                                        Upload new Images
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        multiple
                                        onChange={(e) => setFiles(e.target.files)}
                                        style={{ display: "none" }}
                                    />
                                </>}
                                // FIXME: ICON BUG HERE
                                avatar={
                                    <Avatar alt="image" src={files ? URL.createObjectURL(files[0]) : defaultImg}
                                        variant="square"
                                        sx={{ width: 150, height: 150 }} />} >

                            </CardHeader>)}
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                {inputData.map((input) => (<Grid size={{ xs: 12, sm: 6 }} key={input.id} >
                                    <TextField
                                        id={input.id}
                                        label={input.label || ''}
                                        variant="outlined"
                                        placeholder={data[input.label]}
                                        value={info[input.id]}
                                        onChange={handleChange}
                                        fullWidth
                                        type={input.type} />
                                </Grid>))}
                            </Grid>
                            {previewImages && (
                                <ImageList
                                    sx={{ width: 600, height: 250 }}
                                    cols={3} rowHeight={164}>
                                    {previewImages.map((item, index) => {
                                        return (
                                            <ImageListItem key={index}>
                                                <img
                                                    srcSet={item}
                                                    src={item}
                                                    alt='hotelImg'
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        )
                                    })}
                                </ImageList>
                            )}
                        </CardContent>
                        <CardActions>
                            <Button fullWidth variant='contained' onClick={handleClick}>Update</Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    )
}

export default EditProject