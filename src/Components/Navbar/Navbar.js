import React from 'react'
import {
	FaInstagram,
	FaLinkedin,
	FaYoutube
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {Button} from "grommet"
import "./Navbar.css";
const Navbar = () => {
    return(
        <section className='navbar'>
            <section className='navbar-content'>
                <a href="/" className="navbar-item">
                    <Button primary label="About"  color={"#eb6850"} style={{ color: "white", borderRadius: "8px", fontSize: "22px", fontFamily: 'Roboto Condensed', fontWeight:'bold'}} hoverIndicator />
                </a>
                <a href="/about" className="navbar-item">
                    <Button primary label="Academics" color={"#eb6850"} style={{  color: "white",borderRadius: "8px", fontSize: "22px", fontFamily: 'Roboto Condensed', fontWeight:'bold'}} hoverIndicator />
                </a>
                <a href="/portfolio" className="navbar-item">
                    <Button primary label="Projects" color={"#eb6850"} style={{ color: "white", borderRadius: "8px", fontSize: "22px", fontFamily: 'Roboto Condensed', fontWeight:'bold'}} hoverIndicator />
                </a>
                <a href="/shop" className="navbar-item">
                    <Button primary label="Contact" color={"#eb6850"} style={{  color: "white",borderRadius: "8px", fontSize: "22px", fontFamily: 'Roboto Condensed', fontWeight:'bold' }} hoverIndicator />
                </a>
            </section>
            <section className='navbar-socials'>
                <a className= "socials-item" href='mailto:om.shah@student.csulb.edu'><FiMail /></a>
                <a className= "socials-item" href='https://linkedin.com/in/om-j-shah'><FaLinkedin /></a>
                <a className= "socials-item" href='https://www.instagram.com/omshah11/'><FaInstagram /></a>
                <a className= "socials-item" href="https://www.youtube.com/channel/UCz4h5LtIVN186q2iKlvEz0w"><FaYoutube /></a>
            </section>
        </section>
    )
}

export default Navbar;