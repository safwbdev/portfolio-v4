import React from 'react'

const SectionComponent = ({ children, id, noContainer }) => {
    return (
        <section className='flex justify-center items-center flex-col h-screen snap-center text-left pt-10 md:pt-0 px-5 md:px-0' id={id}>
            {noContainer ? (<>{children}</>) : (<div className="container">{children}</div>)}
        </section>
    )
}

export default SectionComponent