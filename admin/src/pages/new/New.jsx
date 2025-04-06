import React, { useState } from 'react'
import classes from './New.module.scss'
import axios from 'axios';
import { API_URL, CERTIFICATIONS, IMG_UPLOAD_PATH, SKILLS, } from '../../routes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField, Avatar } from '@mui/material';
import useDataType from '../../hooks/useDataType';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = () => {
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const defaultImg = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
    const path = location.pathname.split("/")[1];
    const { inputData } = useDataType(path);
    const requiresImage = path !== SKILLS && path !== CERTIFICATIONS;

    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        let newData = {};
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

    return (
        <Grid container justify="center" spacing={1}>
            <Grid item md={6}>
                <Card className={classes.padding}>
                    <CardHeader title={`ADD NEW ${path.toUpperCase()}`} />
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
                                avatar={
                                    <Avatar alt="image" src={file ? URL.createObjectURL(file) : defaultImg}
                                        variant="square"
                                        sx={{ width: 150, height: 150 }} />
                                } ></CardHeader>)}
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