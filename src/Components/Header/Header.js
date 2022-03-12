import React from "react";
import {data} from "./links";

const Header = () => {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top-logo">
                    <a href="/" className="header-logo">Logo</a>
                </section>
                <section className="header-top-navbar">
                    {/* <Navbar /> */}
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom-email">
                    om.shah@student.csulb.edu
                </section>
                <section className="header-bottom-phone">
                    +1(562)-336-9633
                </section>
            </section>
        </section>
    )
}

export default Header;