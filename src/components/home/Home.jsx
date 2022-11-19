import React from 'react';
import './Home.css'
import minimizeButton from "../../assets/minimize_button.png";
import art from "../../assets/art-1.png";

function Home({handleClick}) {
    return (
        <div className="home-main">
            <div className="home-hero-container">

                <div className="home-hero-container-header">
                    <h1>Explore Neubrutalism</h1>

                    <div className="home-hero-container-body-button" onClick={handleClick}>
                        <b>Next Section</b>
                    </div>
                </div>

                <h2 style={{color:"white"}}>A design style merges chaotic visuals with good typography.</h2>

                <div className="home-hero-container-body">

                    <div className="home-hero-container-body-header">
                        <p>
                            <b>Neubrutalism</b>, or <b>Neobrutalism</b> as some people call it, is a mix of regular
                            brutalism in web
                            design and more modern typography, illustration and animation standards.
                        </p>
                    </div>


                    <div>
                        <img className={"art"} src={art} alt={"art-1"} style={{width: "280px", height: "400px"}}/>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Home;