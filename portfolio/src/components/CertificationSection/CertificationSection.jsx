import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import CertificationBox from './CertificationBox';
import Slider from '../Slider';

const CertificationSection = () => {
    const { certificationData } = usePortfolioContext();

    return certificationData && (
        <section className='flex text-left justify-center flex-col snap-center md:h-screen pt-10 md:pt-0 px-5 md:px-0'>
            <div className="container">
                <h2 className='mb-4 text-3xl font-bold md:text-5xl mb-10'>Certifications</h2>
                <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {certificationData.map((edu) => (<CertificationBox key={edu._id} data={edu} />))}
                </div>
                <div className='md:hidden'>
                    <Slider
                        type={'certifications'}
                        data={certificationData}
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={false}
                        loop={false}
                    />
                </div>
            </div>
        </section>
    )
}

export default CertificationSection