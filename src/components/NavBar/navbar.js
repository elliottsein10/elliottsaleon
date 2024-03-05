import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Inicio</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Acerca de</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portafolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contacto</button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Inicio</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(!showMenu)}>Acerca de</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(!showMenu)}>Portafolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(!showMenu)}>Contacto</Link>
            </div>
        </nav >
    )
}

export default Navbar