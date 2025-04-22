import React, { useEffect } from 'react'
import style from "./ProfileSection.module.scss";
import { ContactArea } from '..';
import { FaLinkedin, FaGithub, FaAddressCard } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { usePortfolioContext } from '../../context/PortfolioContext';
import VantaBg from '../VantaBg';
import { useInView } from 'react-intersection-observer';

const ProfileSection = ({ id }) => {
    const { profileData, setCurrentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);

    return profileData && (
        <>
            <VantaBg />
            <section className={style.main} id='main'>
                <div className={style.headerText}>
                    <h1 className='mb-4 text-4xl pl-12 font-bold leading-none md:text-8xl md:pl-0' ref={ref}>{profileData.fullName}</h1>
                    <ReactTyped
                        strings={profileData.designation}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" disabled
                            className={`mb-4 text-3xl pl-12 font-extrabold md:text-7xl md:pl-0 uppercase ${style.designation}`} />
                    </ReactTyped>
                    <h2 className='mb-4 text-3xl pl-12 font-bold md:text-6xl md:pl-0 '>Developer</h2>
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