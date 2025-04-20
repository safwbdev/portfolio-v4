import React from 'react'
import style from "./ProfileSection.module.scss";
import { ContactArea } from '..';
import { FaLinkedin, FaGithub, FaAddressCard } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { usePortfolioContext } from '../../context/PortfolioContext';
import DescBox from './DescBox';
import logos from '../../assets/logo.png'
import mas from '../../assets/mas.png'

const ProfileSection = () => {
    const { profileData, defaultImg, openContacts, setOpenContacts } = usePortfolioContext()


    return profileData && (
        <>
            <section className={style.main}>
                <div className={style.headerText}>
                    <h1 className='mb-4 text-4xl pl-8 font-bold leading-none md:text-8xl md:pl-0'>{profileData.fullName}</h1>
                    <ReactTyped
                        strings={profileData.designation}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" disabled
                            className={`mb-4 text-3xl pl-8 font-extrabold md:text-7xl md:pl-0 uppercase ${style.designation}`} />
                    </ReactTyped>
                    <h2 className='mb-4 text-3xl pl-8 font-bold md:text-6xl md:pl-0'>Developer</h2>
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
            <section>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <DescBox
                        title={'Hello There!'}
                        image={defaultImg}
                        text={profileData.desc} />
                    <DescBox
                        title={'Tech Stack'}
                        image={logos}
                        text={profileData.techStack}
                        linkText={<>Click <a href='#skills' className='inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mx-1'>here</a> to see what else I'm capable of</>} />
                    <DescBox
                        title={`Where I'm at`}
                        image={mas}
                        text={profileData.location}
                        linkText={<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer' onClick={() => setOpenContacts(!openContacts)}>Contact me</span>} />
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