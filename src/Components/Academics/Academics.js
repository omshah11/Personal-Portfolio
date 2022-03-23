import React from "react";
import "./Academics.css";

const Academics = () => {
    return(
        <div className="academics">
            <h1 className="acad-title">Academics</h1>
            <div className="acad-items-wrapper">
            <p className="acad-items-1">CECS 328 - Algorithms</p>
            <hr className="acad-item-separator"></hr>
            <p className="acad-items-2">CECS 277 - Object-oriented Application Development with JAVA</p>
            <hr className="acad-item-separator"></hr>
            <p className="acad-items-1">CECS 274 - Data Structures with PYTHON</p>
            <hr className="acad-item-separator"></hr>
            <p className="acad-items-2">CECS 323 - Databases</p>
            <hr className="acad-item-separator"></hr>
            <p className="acad-items-1">CECS 341 - Computer Architecture</p>
            <hr className="acad-item-separator"></hr>
            <p className="acad-items-2">CECS 229 - Discrete Structure Computer Application Development</p>
            </div>
        </div>
    )
}

export default Academics;