import React from "react";

function LandingLogin() {


    return (
        <>

            <div className="form-modal">
                <div className="form-modal-container">

                    <form id="loginForm">
                        <div className="exit-modal">
                            <h2>Login</h2>
                            <p className="exit-btn">X</p>
                        </div>

                        <input type="email" className="form-input" placeholder="Email*" required></input>
                        <input type="password" className="form-input" placeholder="Password*" required></input>
                        <button type="submit" className="form-submit">Login</button>
                    </form>
                    <p id="toggleForm">Don't have an account? Sign Up</p>
                </div>


            </div>
        </>
    )
}

export default LandingLogin

