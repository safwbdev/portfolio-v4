import React from 'react'
import style from './ContactArea.module.scss'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import { usePortfolioContext } from '../../context/PortfolioContext';

const ContactArea = ({ linkedin, github, phone, email }) => {
    const { openContacts, setOpenContacts } = usePortfolioContext()
    return (
        <div className={style.contactArea}>
            <div className={style.contactButtons}>
                <div style={{ visibility: openContacts ? 'visible' : 'hidden' }} className='flex'>
                    <a href={` https://wa.me/${phone}`} target=''><FaWhatsapp /></a> | <a href={`mailto:${email}`}><FaEnvelope /></a> |
                </div>
                <button onClick={() => setOpenContacts(!openContacts)} className='mx-3'>
                    {openContacts ? (<HiX />) : (<HiOutlineMenu />)}
                </button>
                <div style={{ visibility: openContacts ? 'visible' : 'hidden' }} className='flex'>
                    | <a href={linkedin} target='_blank'><FaLinkedin /></a> | <a href={github} target='_blank'><FaGithub /></a>
                </div>
            </div>
        </div>
    )
}

export default ContactArea