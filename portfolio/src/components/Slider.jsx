import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import ProjectBox from './ProjectSection/ProjectBox';
import ExperienceBox from './ExperienceSection/ExperienceBox';
import EducationBox from './EducationSection/EducationBox';
import CertificationBox from './CertificationSection/CertificationBox';
import SkillBox from './SkillsSection/SkillBox';

const Slider = ({ data, type }) => {

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
            default:
                break;
        }
    }
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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