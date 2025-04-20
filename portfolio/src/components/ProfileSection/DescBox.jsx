import React from 'react'
import style from "./DescBox.module.scss";

const DescBox = ({ title, text, image, linkText }) => {
    return (

        <div class={style.descBox}>
            <div class={style.circularPortrait}>
                <img src={image} alt="Hello There" />
            </div>
            <div class="px-6 py-5">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-400 text-base">{text}</p>
                {linkText && (<p class="text-gray-700 text-base">{linkText}</p>)}
            </div>
        </div>
    )
}

export default DescBox