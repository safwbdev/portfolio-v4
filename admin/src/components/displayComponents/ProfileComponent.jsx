import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';

const ProfileComponent = () => {
    const [profileData, setProfileData] = useState(null)
    const { data, loading } = useFetch(`${API_URL}/users`);
    useEffect(() => {
        setProfileData(data[0])
    }, [data])

    return loading ? (<h2>Loading ...</h2>) : profileData && (
        <div>
            <div className="name">{profileData.fullName}</div>
            <div className="name">{profileData.designation}</div>
            <div className="name">{profileData.desc}</div>
            <div className="name">{profileData.github}</div>
            <div className="name">{profileData.linkedin}</div>
            <div className="name">{profileData.email}</div>
            <div className="name">{profileData.website}</div>
            <div className="name">{profileData.location}</div>
            <div className="name">{profileData.phone}</div>
            <div className="name">{profileData.tagline}</div>
        </div>
    )
}

export default ProfileComponent