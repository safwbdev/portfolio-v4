import React, { useEffect, useState } from 'react'
import classes from './Edit.module.scss'
import useFetch from '../../hooks/useFetch'
import { API_URL, CERTIFICATIONS, IMG_UPLOAD_PATH, SKILLS } from '../../routes'
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
    Grid,
    TextField,
} from '@mui/material';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import useDataType from '../../hooks/useDataType'

const Edit = () => {
    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[3];
    const { data, loading } = useFetch(`${API_URL}/${path}/${id}`);
    const { inputData } = useDataType(path);
    const requiresImage = path !== SKILLS && path !== CERTIFICATIONS;

    const [info, setInfo] = useState({});
    const [file, setFile] = useState("");
    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const navigate = useNavigate()

    useEffect(() => {
        setInfo(data);
    }, [data])

    useEffect(() => {
        if (!requiresImage) return;
        if (path !== 'skills' && info) {
            setdefaultImg(info.img);
            if (path === 'projects' && info.img && info.img.length > 0) {
                setdefaultImg(info.img);
            }
        }
    }, [info])


    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async () => {
        let updatedData = {};
        if (file) {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            try {
                const uploadRes = await axios.post(IMG_UPLOAD_PATH, data);
                const { url } = uploadRes.data;
                updatedData = { ...info, img: url };
            } catch (err) {
                console.log(err);

            }

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
                                        Upload new Image
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        style={{ display: "none" }}
                                    />
                                </>}
                                // FIXME: ICON BUG HERE
                                avatar={
                                    <Avatar alt="image" src={file ? URL.createObjectURL(file) : defaultImg}
                                        variant="square"
                                        sx={{ width: 150, height: 150 }} />
                                } ></CardHeader>)}
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

export default Edit