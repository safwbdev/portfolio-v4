import React, { useState } from 'react'
import style from './ContactArea.module.scss'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const ContactArea = ({ linkedin, github, tel, email }) => {
    const [open, setopen] = useState(false)
    return (
        <div
            className={style.contactArea}>
            <button onClick={() => setopen(!open)}>
                <HiDotsHorizontal />
            </button>
            <div className={style.contactButtons} style={{ visibility: open ? 'visible' : 'hidden' }}>
                <a href={tel}><FaWhatsapp /></a> | <a href={email}><FaEnvelope /></a> | <a href={linkedin} target='_blank'><FaLinkedin /></a> | <a href={github} target='_blank'><FaGithub /></a>
            </div>
            {/* {open && (
        )} */}
        </div>
    )
}

export default ContactArea