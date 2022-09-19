import React from "react";
import useMediaQuery from "react-responsive";
import Navbar from "../Navbar/index";
import {Button} from "grommet"
import "./Header.css";


const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const headerTop = isMobile ? 'header-top-mobile' : 'header-top-desktop';
    return (
        <section className="header">
            <section className={headerTop}>
                <section className="header-top__logo">
                    <a href="/" className="header-logo">
                        OM SHAH
                        {/* <img src="../images/logo.png" alt="Logo" /> */}
                    </a>
                </section>
                <section className="header-top__navbar">
                    <Navbar />
                    <hr className="header-top__seperator" />
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__email">
                <Button primary label="om.shah@student.csulb.edu" color={"#000000"} style={{ borderRadius: "2px"}} hoverIndicator/>
                </section>
                <section className="header-bottom__phone">
                <Button primary label="+1(562)-336-9633" color={"#000000"} style={{ borderRadius: "2px"}} hoverIndicator/>
                </section>
            </section>
        </section>
    )
}

export default Header;