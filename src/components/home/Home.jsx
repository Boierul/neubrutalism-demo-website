import React, { useState } from 'react';
import './Home.css'
import art from "../../assets/art-1.png";
import art2 from "../../assets/art-2.png";
import art3 from "../../assets/art-3.png";

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

                    <div className="hero-art-gallery">
                        <img className={"art_1 hvr-grow"} src={art} alt={"art-1"} style={{width: "320px", height: "500px"}}/>
                        <img className={"art_2 hvr-grow"} src={art2} alt={"art-2"} style={{width: "320px", height: "500px"}}/>
                        <img className={"art_3 hvr-grow"} src={art3} alt={"art-3"} style={{width: "320px", height: "500px"}}/>
                    </div>

                    <div className="home-hero-container-body-header">
                        <p>
                            <b>Neubrutalism</b>, or <b>Neobrutalism</b> as some people call it, is a mix of regular
                            brutalism in web
                            design and more modern typography, illustration and animation standards.
                        </p>
                    </div>




                </div>


            </div>
        </div>
    );
}

export default Home;