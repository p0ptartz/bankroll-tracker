import React from "react";

function LandingLogin() {


    return (
        <>

            <div className="form-modal">
                <div className="form-modal-container">

                    <form id="loginForm">
                        <h2>Login</h2>
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





                    // <form id="signupForm" >
                    //     <h2>Sign Up</h2>
                    //     <input type="text" className="form-input" placeholder="First Name*" required></input>
                    //     <input type="text" className="form-input" placeholder="Last Name" ></input>
                    //     <input type="email" className="form-input" placeholder="Email*" required></input>
                    //     <input type="password" className="form-input" placeholder="Password*" required></input>
                    //     <button type="submit" className="form-submit">Sign Up</button>
                    // </form >

                    // 