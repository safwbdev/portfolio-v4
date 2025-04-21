import React, { useEffect } from 'react'
import WAVES from 'vanta/src/vanta.waves'
const VantaBg = () => {

    useEffect(() => {
        WAVES({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x70d20,
            shininess: 3.00,
            waveHeight: 1.50,
            waveSpeed: 1.50,
            zoom: 1.39
        })
    }, [])

    return (
        <div
            className='bg'
            id='vanta'
            style={{
                // border: '1px solid red',
                // position: 'absolute',
                height: '100vh',
                width: '100%',
                zIndex: '-1',
                position: 'relative',
                top: '100%'
            }}></div>

    )
}

export default VantaBg