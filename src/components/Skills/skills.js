import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/web-design.png'
import MobileDesign from '../../assets/mobile-design.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Habilidades</span>
            <span className='skillDesc'>Soy un programador fullstacks dedicado a la creacion de páginas web.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>lorem ipsum</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>WebDesign</h2>
                        <p>lorem ipsum</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={MobileDesign} alt='MobileDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>AppDesign</h2>
                        <p>lorem ipsum</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;