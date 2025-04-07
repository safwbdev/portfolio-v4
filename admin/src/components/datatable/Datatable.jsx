import React, { useEffect, useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import classes from './Datatable.module.scss'
import { Link, useLocation, } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.jsx';
import { API_URL, EDIT } from '../../routes.js';
import { Button, Grid, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';


const Datatable = ({ columns }) => {
    const [list, setList] = useState([]);
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const { data, loading, error, reFetch } = useFetch(`${API_URL}/${path}`);

    useEffect(() => {
        setList(data);
    }, [data]);

    useEffect(() => {
        reFetch()
    }, [path]);



    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this entry?")) {
            const getType = path[0].toUpperCase() + path.slice(1);
            try {
                await axios.delete(`${API_URL}/${path}/${id}`)
                setList(list.filter((item) => item._id !== id));
                toast.error(`${getType.slice(0, -1)} has been deleted!`)
            } catch (err) {
                console.log(err);
            }
        }
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 400,
            renderCell: (params) => {
                return (
                    <div>
                        {path !== 'skills' && (<Link to={params.row._id}>
                            <Button style={{ marginRight: 5 }} variant="contained" className={classes.viewButton}>View</Button>
                        </Link>)}
                        <Link to={`${EDIT}/${params.row._id}`}>
                            <Button style={{ marginRight: 5 }} variant="contained" color="success">Edit</Button>
                        </Link >
                        <Button
                            onClick={() => handleDelete(params.row._id)}
                            color="error"
                            variant="contained">
                            Delete
                        </Button>
                    </div >
                );
            },
        },
    ];
    return loading ? (<h1>Loading ...</h1>) : (
        <Grid
            alignContent='center'
            container
            justifyContent="center"
            marginTop={5}
            spacing={1}>
            <Grid
                // item
                display={'flex'}
                justifyContent={"space-between"}
                width={'100%'}>
                <Typography
                    component="div"
                    textTransform={"capitalize"}
                    variant="h5">
                    {path}
                </Typography>
                <Link to={`/${path}/new`}>
                    <Button variant='contained' color="success">
                        Add New {path.slice(0, -1)}
                    </Button>
                </Link>
            </Grid>
            <DataGrid
                checkboxSelection
                className={classes.datagrid}
                columns={columns.concat(actionColumn)}
                getRowId={(row) => row._id}
                rows={list}
                rowsPerPageOptions={[9]}
                pageSize={9} />
        </Grid>



    );
}
export default Datatable