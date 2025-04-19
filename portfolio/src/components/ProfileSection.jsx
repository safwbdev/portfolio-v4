import React, { useEffect, useState } from 'react'
import style from "./../App.module.scss";
import useFetch from '../hooks/useFetch';
import { API_URL } from '../routes';


const ProfileSection = () => {
    const [profileData, setProfileData] = useState(null)
    const [defaultImg, setdefaultImg] = useState("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    const { data, loading } = useFetch(`${API_URL}/users`);

    useEffect(() => {
        setProfileData(data[0])
    }, [data])

    useEffect(() => {
        if (profileData) {
            setdefaultImg(profileData.img);
        }
    }, [profileData])
    return loading ? (<h2>Loading ...</h2>) : profileData && (
        <section className={style.main}>
            <img src={defaultImg}
                alt="media"
            />
            <div>
                <h4>
                    {profileData.fullName}
                </h4>
                <h6>
                    {profileData.designation}
                </h6>
                <p>
                    {profileData.tagline}
                </p>
                <p>{profileData.location}</p>
                <p>{profileData.desc}</p>
            </div>
            <div>
                <button size="small">email: {profileData.email}</button>
                <button size="small">tel: {profileData.phone}</button>
                <a href={profileData.linkedin}>
                    <button size="small">LinkedIn</button>
                </a>
                <a href={profileData.github}>
                    <button size="small">Github</button>
                </a>
                <a href={profileData.website}>
                    <button size="small">Website</button>
                </a>
            </div>
        </section>
    )
}

export default ProfileSection