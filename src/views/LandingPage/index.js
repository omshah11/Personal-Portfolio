import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "./lp-images/profile-photo.png";
import "./index.css";
//import LandingPageWrapper from "./Wrapper";

const LandingPage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1451px)' });
    const textStyle = isMobile ? 'text-mobile' : 'text-desktop';
    const profilePhoto = isMobile ? 'profilePhoto-mobile' : 'profilePhoto-desktop';
    return(
        <div className={textStyle}>
            <div className="lp-text" id="ABOUT">
                <p className="lp-title">Hi, I am</p>
                <h2 className="lp-name">OM SHAH</h2>
                <p>Undergraduate Computer Science student at California State University, Long Beach</p>
                <p>Expected Graduation: Fall 2023</p>
            </div>
            <div className={profilePhoto}>
                <img src={logo} alt="Profile"/>
            </div>
        </div>
    )
}

export default LandingPage;