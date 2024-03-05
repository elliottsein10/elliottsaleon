import React from 'react'
import './contact.css';
import LinkedinIcon from "../../assets/linkedin.png"
import GithubIcon from "../../assets/github.png"

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className='contactPageTitle'>Contacto</h1>
                <span className='contactDesc'>Please adkasdjasjsjsjsjsjjasdhasdjhasjasj</span>
                <form className='contactForm'>
                    <input type="text" className="name" placeholder='Nombre' />
                    <input type="email" className="email" placeholder='Email' />
                    <textarea className='msg' name='message' rows="5" placeholder='Mensaje'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Enviar</button>
                    <div className='links'>
                        <img src={LinkedinIcon} alt="Linkedin" className="link" />
                        <img src={GithubIcon} alt="Github" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact