import React from 'react';
import './Container.css'
import closeButton from '../../assets/close_button.png'
import minimizeButton from '../../assets/minimize_button.png'

function Container() {
    return (
        <>
            <div className="neubrutalism-container">
                <div className="neubrutalism-main-card-3">
                    <div className="neubrutalism-form-container-nav">
                        <h2>FORM CONTAINER</h2>
                        <br/>
                        <div>
                            <img className={"neubrutalism-functional-icons"} src={minimizeButton}
                                 alt={"minimize-button"}/>
                            <img className={"neubrutalism-functional-icons"} src={closeButton} alt={"close-button"}/>
                        </div>
                    </div>



                    <div className="neubrutalism-form form-first-child">
                        <input type="text" required="required"/>
                        <span>First Name</span>
                    </div>

                    <div className="neubrutalism-form">
                        <input type="text" required="required"/>
                        <span>Last Name</span>
                    </div>

                    <div className="neubrutalism-form">
                        <input type="text" required="required"/>
                        <span>Email Address</span>
                    </div>

                    <div className="neubrutalism-form">
                        <input type="text" required="required"/>
                        <span>Password</span>
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div className="neubrutalism-form-button">
                            <b>Submit</b>
                        </div>
                    </div>


                </div>

                <div className="neubrutalism-main-card">
                    <b>Select category</b>
                </div>

            </div>
        </>
    );
}

export default Container;