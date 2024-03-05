import React from 'react';
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className="hello">Hola,</span>
                <span className="introText">Soy <span className="introName">Elliott</span><br />Programador Fullstack</span>
                <p className="introPara">Desarrollador de páginas web y aplicaciones móviles a tu medida. <br /></p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Contratación</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section >
    )
}

export default Intro;