import React, { useEffect, useState } from 'react'
import classes from './Edit.module.scss'
import useFetch from '../../hooks/useFetch'
import { API_URL, IMG_UPLOAD_PATH } from '../../routes'
import {
    userInputs,
    roomInputs
} from '../../editFormSource'
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
import { skillInputs } from '../../formSource';

const Edit = () => {
    const path = location.pathname.split("/")[1];
    const id = location.pathname.split("/")[3];
    const { data, loading } = useFetch(`http://localhost:8800/api/${path}/${id}`);
    const requiresImage = path === 'users' || path === 'hotels';

    const [info, setInfo] = useState({});
    const [file, setFile] = useState("");
    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const navigate = useNavigate()

    useEffect(() => {
        setInfo(data);
    }, [data])

    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }


    const getDataType = () => {
        switch (path) {
            case 'users':
                return userInputs;
            case 'skills':
                return skillInputs;
            case 'projects':
                return userInputs;
            case 'experience':
                return roomInputs;
            case 'education':
                return roomInputs;
            default:
                return null;
        }
    }

    const handleClick = async () => {
        const updatedData = { ...info };

        try {
            await axios.put(`http://localhost:8800/api/${path}/${id}`, updatedData);
            const getType = path[0].toUpperCase() + path.slice(1);
            toast.success(`${getType.slice(0, -1)} has been updated!`);
            navigate(`/${path}`)
        } catch (err) {
            console.log(err);
        }
    }

    const displayData = (array) => array.map((input) => {
        console.log(input.id);
        console.log(input.id);
        return (
            <Grid size={{ xs: 12, sm: 6 }} key={input.id} >
                <TextField
                    id={input.id}
                    label={input.label || ''}
                    variant="outlined"
                    placeholder={data[input.label]}
                    value={info[input.id]}
                    onChange={handleChange}
                    fullWidth
                    type={input.type}
                    disabled={input.id === 'username'} />
            </Grid>
        )
    })


    return loading ? (<CircularProgress />) : (
        <Grid container justify="center" spacing={1}>
            <Grid item md={6}>
                <Card className={classes.padding}>
                    <CardHeader title={`EDIT ${path.toLocaleUpperCase().slice(0, -1)}`} />
                    <form>
                        <CardContent>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                {displayData(getDataType())}
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