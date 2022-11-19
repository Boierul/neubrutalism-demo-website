import React from 'react';
import './MiddleContainer.css'
import BackgroundSVG from "../../assets/waves-final.svg";

function MiddleContainer() {
    return (
        <div className="middle-container" style={{backgroundImage: `url(${BackgroundSVG})`}}>

        </div>
    );
}

export default MiddleContainer;