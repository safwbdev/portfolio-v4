import React from 'react'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import { usePortfolioContext } from '../../context/PortfolioContext';

const ContactArea = ({ linkedin, github, phone, email }) => {
    const { openContacts, setOpenContacts } = usePortfolioContext();

    return (
        <div
            className={`fixed bottom-2/100 left-1/2 w-fit flex justify-center z-2`}
            style={{ transform: 'translate(-50%, -50%)' }}
        >
            <div className={`flex justify-center items-center fit-content`}>
                <div className={openContacts ? 'flex' : 'hidden'}>
                    <a href={` https://wa.me/${phone}`} target=''><FaWhatsapp className='text-[1.8em] my-0 mx-[0.5em]' /></a> | <a href={`mailto:${email}`}><FaEnvelope className='text-[1.8em] my-0 mx-[0.5em]' /></a> |
                </div>
                <button onClick={() => setOpenContacts(!openContacts)} className='mx-3 bg-white border-0 flex justify-center items-center cursor-pointer rounded-4xl w-[3rem] h-[3rem]'>
                    <span className='text-black flex justify-center items-center text-center text-[1.8em]'>
                        {openContacts ? (<HiX />) : (<HiOutlineMenu />)}
                    </span>
                </button>
                <div className={openContacts ? 'flex' : 'hidden'}>
                    | <a href={linkedin} target='_blank'><FaLinkedin className='text-[1.8em] my-0 mx-[0.5em]' /></a> | <a href={github} target='_blank'><FaGithub className='text-[1.8em] my-0 mx-[0.5em]' /></a>
                </div>
            </div>
        </div >
    )
}

export default ContactArea