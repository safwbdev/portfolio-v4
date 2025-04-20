import React, { useState } from 'react'
import style from './ContactArea.module.scss'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { usePortfolioContext } from '../../context/PortfolioContext';

const ContactArea = ({ linkedin, github, tel, email }) => {
    const { openContacts, setOpenContacts } = usePortfolioContext()
    return (
        <div
            className={style.contactArea}>
            <button onClick={() => setOpenContacts(!openContacts)}>
                <HiDotsHorizontal />
            </button>
            <div className={style.contactButtons} style={{ visibility: openContacts ? 'visible' : 'hidden' }}>
                <a href={tel}><FaWhatsapp /></a> | <a href={email}><FaEnvelope /></a> | <a href={linkedin} target='_blank'><FaLinkedin /></a> | <a href={github} target='_blank'><FaGithub /></a>
            </div>
        </div>
    )
}

export default ContactArea