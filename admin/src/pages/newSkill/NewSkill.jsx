import React, { useState } from 'react'
import classes from './NewSkill.module.scss'
import { roomInputs, skillInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { HOTEL_PATH, ROOM_PATH } from '../../routes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const NewSkill = () => {
    const [info, setInfo] = useState({});
    const [hotelId, setHotelId] = useState(undefined);
    const [rooms, setRooms] = useState([]);
    const { data, loading, error } = useFetch(HOTEL_PATH);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
        try {
            await axios.post(`${ROOM_PATH}/${hotelId}`, { ...info, roomNumbers })
            toast.success(`Room has been created!`);
            navigate(`/rooms`);
        } catch (err) {
            console.log(err);

        }
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setHotelId(e.target.value)
    }


    return (
        <Grid container justify="center" spacing={1}>
            <Grid item md={6}>
                <Card className={classes.padding}>
                    <CardHeader title={`ADD NEW Skill`} />
                    <form>
                        <CardContent>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                {skillInputs.map((input) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={input.id} >
                                        <TextField
                                            id={input.id}
                                            label={input.label || ''}
                                            variant="outlined"
                                            placeholder={data[input.label]}
                                            value={info[input.id]}
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

export default NewSkill