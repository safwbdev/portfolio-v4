import React from 'react'
import style from "./../../App.module.scss";
import { usePortfolioContext } from '../../context/PortfolioContext';
import CertificationBox from './CertificationBox';

const CertificationSection = () => {
    const { certificationData } = usePortfolioContext();

    return certificationData && (
        <section className={style.certifications}>
            <h2 className='mb-4 text-3xl pl-8 font-bold md:text-4xl'>Certifications</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {certificationData.map((edu) => (<CertificationBox key={edu._id} data={edu} />))}
            </div>
        </section>
    )
}

export default CertificationSection