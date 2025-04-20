import React, { useEffect, useState } from 'react'
import style from "./ProfileSection.module.scss";
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../routes';
import { ContactArea } from '..';
import { FaLinkedin, FaGithub, } from "react-icons/fa6";


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
    }, [profileData]);

    return loading ? (<h2>Loading ...</h2>) : profileData && (
        <>
            <section className={style.main}>
                <img src={defaultImg}
                    alt="media"
                />
                <div className={style.headerText}>
                    <h1>{profileData.fullName}</h1>
                    <h2>{profileData.designation}</h2>
                </div>
                <div className={style.headerLinks}>
                    <a href={profileData.linkedin} target='_blank'>
                        <FaLinkedin />
                    </a>
                    <a href={profileData.github} target='_blank'>
                        <FaGithub />
                    </a>
                </div>
                <p className={style.tagLineText}>{profileData.tagline}</p>

            </section>
            <section className='desc'>
                <p>{profileData.desc}</p>
            </section>
            <ContactArea
                email={profileData.email}
                phone={profileData.phone}
                linkedin={profileData.linkedin}
                github={profileData.github}
            />
        </>
    )
}

export default ProfileSection