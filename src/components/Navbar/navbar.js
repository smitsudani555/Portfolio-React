import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {

    const [showMenu,setshowMenu] = useState(false);

    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo "/>

            <div className="desktopment">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior:"smooth"});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />
                Contact Me
            </button>
            
            <img src={menu} alt="Menu" className="mobmenu" onClick={() => setshowMenu(!showMenu)}/>

            <div className="navment" style={{display : showMenu?'flex' : 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setshowMenu(false)}className="ListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setshowMenu(false)}className="ListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setshowMenu(false)}className="ListItem">Portfolio</Link>
                
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}  className="ListItem" onClick={() => setshowMenu(false)}>Contact</Link>
            </div>

        </nav>
    )
}
export default Navbar

