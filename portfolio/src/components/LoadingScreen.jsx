import React from 'react'
import { ReactTyped } from "react-typed";

const LoadingScreen = () => {
    return (
        <div className='loadingScreen h-screen flex justify-center items-center' >
            <h1 className='mb-4 text-4xl pl-8 font-bold leading-none uppercase md:text-8xl md:pl-0'>
                Loading<ReactTyped strings={["..."]} typeSpeed={40} backSpeed={50} loop />
            </h1>
        </div>
    )
}

export default LoadingScreen