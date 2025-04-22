import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

import { Pagination, Navigation } from 'swiper/modules';
import ProjectBox from './ProjectSection/ProjectBox';
import ExperienceBox from './ExperienceSection/ExperienceBox';
import EducationBox from './EducationSection/EducationBox';
import CertificationBox from './CertificationSection/CertificationBox';
import SkillBox from './SkillsSection/SkillBox';

const Slider = ({ data, type, slidesPerView, spaceBetween, navigation, loop, pagination }) => {

    const GetBox = ({ boxData }) => {

        switch (type) {
            case 'clientPojects':
                return <ProjectBox data={boxData} isClient />
            case 'personalPojects':
                return <ProjectBox data={boxData} />
            case 'experience':
                return <ExperienceBox data={boxData} />
            case 'education':
                return <EducationBox data={boxData} />
            case 'certifications':
                return <CertificationBox data={boxData} />
            case 'skills':
                return <SkillBox data={boxData} />
            case 'gallery':
                console.log(boxData);
                return <img src={boxData} />
            default:
                break;
        }
    }
    return (
        <Swiper
            className="mySwiper"
            loop={loop}
            navigation={navigation}
            modules={[Pagination, Navigation]}
            pagination={{
                clickable: pagination,
            }}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
        >
            {data.map((aData) => (
                <SwiperSlide>
                    <GetBox boxData={aData} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider