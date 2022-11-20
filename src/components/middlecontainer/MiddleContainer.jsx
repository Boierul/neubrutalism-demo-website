import React from 'react';
import './MiddleContainer.css'
import BackgroundSVG from "../../assets/waves-final.svg";

function MiddleContainer() {
    return (
        <div className="middle-container" style={{backgroundImage: `url(${BackgroundSVG})`}}>
            <div className="marquee-w">
                <div className="marquee">
                    <span>Typography plays a very important role in this style, but it behaves in a lot more conservative ways.&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
        </div>
    );
}

export default MiddleContainer;