import React from 'react'
import classes from './List.module.scss'
import { useLocation } from 'react-router-dom';
import Datatable from '../../components/datatable/Datatable';
// import { Datatable } from '../../components'

const List = ({ columns }) => {

    const location = useLocation();
    const path = location.pathname.split("/")[1];

    return (
        <div className={classes.list}>
            <Datatable columns={columns} />
        </div>
    )
}

export default List