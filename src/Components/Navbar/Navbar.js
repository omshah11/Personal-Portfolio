import React from 'react'
import {Button, dark} from "grommet"
import "./Navbar.css";
const Navbar = () => {
    return(
        <section className='navbar'>
            <a href="/" className="navbar-item">
                <Button primary label="About" color={"#000000"} style={{ borderRadius: "2px" }} hoverIndicator />
            </a>
            <a href="/about" className="navbar-item">
                <Button primary label="Academics" color={"#000000"} style={{ borderRadius: "2px" }} hoverIndicator />
            </a>
            <a href="/portfolio" className="navbar-item">
                <Button primary label="Projects" color={"#000000"} style={{ borderRadius: "2px" }} hoverIndicator />
            </a>
            <a href="/shop" className="navbar-item">
                <Button primary label="Contact" color={"#000000"} style={{ borderRadius: "2px" }} hoverIndicator />
            </a>
        </section>
    )
}

export default Navbar;