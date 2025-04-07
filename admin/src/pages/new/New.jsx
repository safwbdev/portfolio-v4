import React, { useEffect, useState } from 'react'
import classes from './New.module.scss'
import axios from 'axios';
import { API_URL, CERTIFICATIONS, IMG_UPLOAD_PATH, PROJECTS, SKILLS, } from '../../routes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField, Avatar, ImageList, ImageListItem, Fab } from '@mui/material';
import useDataType from '../../hooks/useDataType';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import CloseIcon from '@mui/icons-material/Close';

const New = () => {
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [files, setFiles] = useState("");
    const [defaultImg, setDefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const path = location.pathname.split("/")[1];
    const { inputData } = useDataType(path);
    const requiresImage = path !== SKILLS && path !== CERTIFICATIONS;
    const requiresMultiImage = path === PROJECTS;

    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        let newData = {};
        if (file || files) {
            if (file) {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                try {

                    const uploadRes = await axios.post(IMG_UPLOAD_PATH, data);
                    const { url } = uploadRes.data;
                    newData = { ...info, img: url };
                } catch (err) {
                    console.log(err);
                }
            }
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
                newData = { ...info, img: list, };
            }
        } else {
            newData = { ...info };
        }
        try {
            await axios.post(`${API_URL}/${path}`, newData)
            toast.success(`New Entry has been created!`);
            navigate(`/${path}`);
        } catch (err) {
            console.log(err);
        }
    }


    const UploadImageButton = () => (<>
        <label htmlFor="file"
            style={{
                alignItems: "center",
                display: "flex",
                width: 'max-content'
            }}>
            <DriveFolderUploadOutlinedIcon
                className={classes.icon} style={{ marginRight: '.3em' }} />
            {requiresMultiImage ? "Upload Images" : "Upload Image"}
        </label>
        {requiresMultiImage ? (
            <input
                type="file"
                id="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                style={{ display: "none" }}
            />) : (<input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
            />)}
    </>);

    useEffect(() => {
        if (requiresMultiImage && files) setDefaultImg(URL.createObjectURL(files[0]));
        if (!requiresMultiImage && file) setDefaultImg(URL.createObjectURL(file))
    }, [files, file])


    return (
        <Grid container justify="center" spacing={1}>
            <Grid item md={6}>
                <Card className={classes.padding}>
                    <CardHeader title={`ADD NEW ${path.toUpperCase()}`} />
                    <form>
                        <CardContent>
                            {requiresImage && (
                                <Grid
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                    container
                                    justifyContent='space-between'
                                    rowSpacing={4}>
                                    <Grid item xs={1} display={'flex'}>
                                        <CardHeader
                                            title={<UploadImageButton />}
                                            avatar={<Avatar alt="image" src={defaultImg}
                                                variant="square"
                                                sx={{ width: 150, height: 150 }} />} />

                                    </Grid>
                                    <Grid item xs={12}>
                                        {files && requiresMultiImage && (
                                            <ImageList
                                                sx={{ width: 600, height: 250 }}
                                                cols={3} rowHeight={164}>
                                                {Object.values(files).map((item, index) => (
                                                    <ImageListItem key={index}>
                                                        <img
                                                            srcSet={URL.createObjectURL(files[index])}
                                                            src={URL.createObjectURL(files[index])}
                                                            alt='hotelImg'
                                                            loading="lazy"
                                                        />
                                                        <Fab
                                                            color="primary"
                                                            aria-label="add"
                                                            style={{
                                                                position: 'absolute',
                                                                right: 5,
                                                                top: 5
                                                            }}>
                                                            <CloseIcon />
                                                        </Fab>
                                                    </ImageListItem>
                                                ))}
                                            </ImageList>

                                        )}
                                    </Grid>
                                </Grid>
                            )}
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                {inputData.map((input) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={input.id} >
                                        <TextField
                                            id={input.id}
                                            label={input.label || ''}
                                            variant="outlined"
                                            placeholder={input.placeholder}
                                            onChange={handleChange}
                                            fullWidth
                                            type={input.type} />
                                    </Grid>
                                ))}
                            </Grid>
                            <CardActions>
                                <Button variant='contained' fullWidth onClick={handleClick}>Create</Button>
                            </CardActions>
                        </CardContent>
                    </form>
                </Card>
            </Grid>
        </Grid>
    )
}

export default New