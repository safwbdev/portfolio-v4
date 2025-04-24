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
            className={`relative z-[-1] h-full w-full top-[100%]`}
            id='vanta' />

    )
}

export default VantaBg