import React from "react";

function LandingSignup() {


    return (
        <>

            <div className="form-modal">
                <div className="form-modal-container">

                    <form id="signupForm" >
                        <div className="exit-modal">
                            <h2>Sign Up</h2>
                            <p className="close-btn">X</p>
                        </div>

                        <input type="text" className="form-input" placeholder="First Name*" required></input>
                        <input type="text" className="form-input" placeholder="Last Name" ></input>
                        <input type="email" className="form-input" placeholder="Email*" required></input>
                        <input type="password" className="form-input" placeholder="Password*" required></input>
                        <button type="submit" className="form-submit">Sign Up</button>
                    </form >
                    <p id="toggleForm">Already have an account? Sign In</p>
                </div>


            </div>
        </>
    )
}

export default LandingSignup






