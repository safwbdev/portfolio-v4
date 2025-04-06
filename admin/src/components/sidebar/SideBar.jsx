import React, { useState } from 'react'
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from 'react-toastify';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PROJECTS, ROOT, SKILLS, USERS } from '../../routes';
import ConstructionIcon from '@mui/icons-material/Construction';
import { AuthContext } from '../../context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {

    const { user, dispatch } = useContext(AuthContext);
    AuthContext
    const navigate = useNavigate()
    const handleLogout = (event) => {
        if (confirm("Log out?")) {
            event.preventDefault();
            dispatch({ type: "LOGOUT" })
            toast.success(`You have logged out!`);
            navigate("/");
        }
    }

    const links = [
        { label: 'Dashboard', url: ROOT, icon: (<DashboardIcon />) },
        { label: 'Profile', url: USERS, icon: (<PersonIcon />) },
        { label: 'Skills', url: SKILLS, icon: (<ConstructionIcon />) },
        { label: 'Projects', url: PROJECTS, icon: (<BuildIcon />) },
        { label: 'Experience', url: EXPERIENCE, icon: (<BusinessIcon />) },
        { label: 'Education', url: EDUCATION, icon: (<SchoolIcon />) },
        { label: 'Certifications', url: CERTIFICATIONS, icon: (<SchoolIcon />) }
    ];

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {links.map((link, index) => (
                    <ListItem key={link.label} disablePadding>
                        <Link to={link.url} style={{ textDecoration: "none", color: "inherit" }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText primary={link.label} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar alt={user.username} src={user.img || null} />
                        </ListItemIcon>
                        <ListItemText primary={user.username} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Log Out'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

}

export default Sidebar