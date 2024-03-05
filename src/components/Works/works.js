import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/pl-1.png'
import Portfolio2 from '../../assets/pl-2.png'
import Portfolio3 from '../../assets/pl-3.png'
import Portfolio4 from '../../assets/pl-4.png'
import Portfolio5 from '../../assets/pl-5.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>Portafolio</h2>
            <span className='worksDesc'>asjdisajdiasjdiasdjisjdiasjdisjadijasdisjaidjsadjsiadjaisdjias</span>
            <div className='worksImgs'>
                <img src={Portfolio1} alt='' className='worksImg' />
                <img src={Portfolio2} alt='' className='worksImg' />
                <img src={Portfolio3} alt='' className='worksImg' />
                <img src={Portfolio4} alt='' className='worksImg' />
                <img src={Portfolio5} alt='' className='worksImg' />
            </div>
            <button className='workBtn'>Ver más</button>
        </section>
    )
}

export default Works;