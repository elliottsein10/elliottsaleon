import React, { useRef } from 'react'
import './contact.css';
import LinkedinIcon from "../../assets/linkedin.png"
import GithubIcon from "../../assets/github.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ywj96lp', 'template_igwfnfi', form.current, {
                publicKey: 'tFPdgHw0kYezmE4kZSt2P',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset()
                    alert('Correo enviado!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className='contactPageTitle'>Contacto</h1>
                <span className='contactDesc'>Please adkasdjasjsjsjsjsjjasdhasdjhasjasj</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Nombre' name='your_name' />
                    <input type="email" className="email" placeholder='Email' email='your_email' />
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