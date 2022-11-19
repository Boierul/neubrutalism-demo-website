import React from 'react';
import './Container.css'

function Container() {
    return (
        <>
            <div className="neubrutalism-main-container">
                <div className="neubrutalism-main-card">
                    <b>CONTAINER 1</b>
                </div>
                <div className="neubrutalism-main-card-2">
                    CONTAINER 2
                </div>
                <div className="neubrutalism-main-card-3">
                    <b>CONTAINER 3</b>
                </div>
            </div>
            <div className="neubrutalism-hero-container">
                <div className="neubrutalism-hero-container-header">
                    <h1>Explore Neubrutalism</h1>
                </div>
                <div className="neubrutalism-hero-container-body">
                    <h3>A new style that's taking over the creative industry</h3>
                </div>
            </div>
        </>
    );
}

export default Container;