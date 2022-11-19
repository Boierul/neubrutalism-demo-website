import React from 'react';
import './Home.css'

function Home({handleClick}) {
    return (
        <div className="home-main">
            <div className="home-hero-container">

                <div className="home-hero-container-header">
                    <h1>Explore Neubrutalism</h1>
                </div>

                <div className="home-hero-container-body">
                    <h3>A new style that's taking over the creative industry</h3>

                    <div className="home-hero-container-body-button" onClick={handleClick}>
                        <b>Next Section</b>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;