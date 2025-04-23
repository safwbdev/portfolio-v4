import React, { useEffect } from 'react'
import { ContactArea } from '..';
import { FaLinkedin, FaGithub, FaAddressCard } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { usePortfolioContext } from '../../context/PortfolioContext';
import VantaBg from '../VantaBg';
import { useInView } from 'react-intersection-observer';
import SectionComponent from '../SectionComponent';

const ProfileSection = ({ id }) => {
    const { profileData, setCurrentSection } = usePortfolioContext()
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) setCurrentSection(id);
    }, [inView]);



    return profileData && (
        <>
            <VantaBg />
            <SectionComponent id={'main'} noContainer>

                <div className={`flex flex-col text-left`}>
                    <h1 className='mb-4 text-3xl pl-8 font-bold leading-none md:text-8xl md:pl-0' ref={ref}>{profileData.fullName}</h1>
                    <ReactTyped
                        strings={profileData.designation}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input
                            type="text"
                            disabled
                            className={`mb-2 md:mb-4 text-2xl pl-8 font-extrabold md:text-7xl md:pl-0 uppercase placeholder:text-white `} />
                    </ReactTyped>
                    <h2 className='mb-4 text-2xl pl-8 font-bold md:text-6xl md:pl-0 '>Developer</h2>
                </div>
                <div className={`flex my-[3em] mx-0`}>
                    <a href={profileData.linkedin} className='text-[2.5em]' target='_blank'>
                        <FaLinkedin className='m-[0.2em]' />
                    </a>
                    <a href={profileData.github} className='text-[2.5em]' target='_blank'>
                        <FaGithub className='m-[0.2em]' />
                    </a>
                    <a href={profileData.website} className='text-[2.5em]' target='_blank'>
                        <FaAddressCard className='m-[0.2em]' />
                    </a>
                </div>
                <p className={'text-[1.8rem] italic'}>{profileData.tagline}</p>

            </SectionComponent>
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