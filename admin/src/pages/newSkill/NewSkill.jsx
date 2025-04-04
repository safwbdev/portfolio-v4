import React, { useState } from 'react'
import classes from './NewSkill.module.scss'
import { skillInputs } from '../../formSource';
import axios from 'axios';
import { API_URL, } from '../../routes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material';

const NewSkill = () => {
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const path = location.pathname.split("/")[1];

    const handleChange = (e) => {
        setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/${path}`, { ...info })
            toast.success(`Skill has been created!`);
            navigate(`/skills`);
        } catch (err) {
            console.log(err);

        }
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

export default NewSkill