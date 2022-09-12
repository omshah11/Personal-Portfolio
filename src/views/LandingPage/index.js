import React from "react";
import logo from "./lp-images/profile-photo.png";
import "./index.css";
//import LandingPageWrapper from "./Wrapper";

const LandingPage = () => {
    return(
        <div className="lp-profilesection">
            <div className="lp-text">
                <p className="lp-title">Hi, I am</p>
                <h2 className="lp-name">OM SHAH</h2>
                <p>Undergraduate Computer Science student at California State University, Long Beach</p>
                <p>Expected Graduation: Fall 2023</p>
            </div>
            <div className="lp-profile-photo">
                <img src={logo} alt="Profile"/>
            </div>
        </div>
    )
}

export default LandingPage;