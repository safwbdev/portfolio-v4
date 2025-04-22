import React from 'react'

const LoadingScreen = () => {
    return (
        <div className='loadingScreen h-screen flex justify-center items-center' >
            <h1 className='mb-4 text-4xl pl-8 font-bold leading-none uppercase md:text-8xl md:pl-0'>
                Loading...
            </h1>
        </div>
    )
}

export default LoadingScreen