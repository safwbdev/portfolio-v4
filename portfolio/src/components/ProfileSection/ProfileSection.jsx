import React from 'react'
import style from "./ProfileSection.module.scss";
import { ContactArea } from '..';
import { FaLinkedin, FaGithub, FaAddressCard } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { usePortfolioContext } from '../../context/PortfolioContext';

const ProfileSection = () => {
    const { profileData, defaultImg, openContacts, setOpenContacts } = usePortfolioContext()


    return profileData && (
        <>
            <section className={style.main}>
                <div className={style.headerText}>
                    <h1>{profileData.fullName}</h1>
                    <ReactTyped
                        strings={profileData.designation}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" disabled className={style.designation} />
                    </ReactTyped>
                    <h2>Developer</h2>
                </div>
                <div className={style.headerLinks}>
                    <a href={profileData.linkedin} target='_blank'>
                        <FaLinkedin />
                    </a>
                    <a href={profileData.github} target='_blank'>
                        <FaGithub />
                    </a>
                    <a href={profileData.website} target='_blank'>
                        <FaAddressCard />
                    </a>
                </div>
                <p className={style.tagLineText}>{profileData.tagline}</p>

            </section>
            <section >
                <div className={style.aboutMe}>
                    <div className={style.desc}>
                        <img src={defaultImg} alt="image" />
                        <h1>Hello There!</h1>
                        <p>{profileData.desc}</p>
                    </div>
                    <div className={style.techStack}>
                        <img src={defaultImg} alt="image" />
                        <h1>Tech Stack</h1>
                        <p>{profileData.techStack}</p>
                        <p>Click <a href='#skills'>HERE</a> to see what else I'm capable of</p>
                    </div>
                    <div className={style.location}>
                        <img src={defaultImg} alt="image" />
                        <h1>Where I'm at</h1>
                        <p>{profileData.location}</p>
                        <p>

                            <span onClick={() => setOpenContacts(!openContacts)}>Contact me</span></p>
                    </div>
                </div>
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