import React from "react";

function LandingBody() {
    return (
        <>
            <div className="test">
                <div className="test-2 ">
                    <div className="row h-100  align-items-center">
                        <div className="col-lg-12 h-75 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="text-center text-warning">deep <span className="text-white">Pockets</span> </h1>
                            <div className="row justify-content-center align-items-center mt-3 mb-3">

                                <div className="col-sm-6  text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Corrupti dignissimos,
                                    totam praesentium cupiditate ad beatae necessitatibus hic accusantium dolor nesciunt alias
                                    impedit
                                    quis sed porro, doloribus libero mollitia eum est.</div>

                            </div>
                            <div className="row justify-content-center">
                                <div className=" d-flex justify-content-center">
                                    <button type="button" className="btn btn-light click" >Login</button>

                                    <button type="button" className="btn btn-warning click">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login">
                <div className="login-container">

                    {/* Login Form */}
                    <form id="loginForm">
                        <h2>Login</h2>
                        <input type="email" className="form-input" placeholder="Email*" required></input>
                        <input type="password" className="form-input" placeholder="Password*" required></input>
                        <button type="submit" className="form-submit">Login</button>
                    </form>

                    {/* Sign Up Form */}
                    <form id="signupForm" >
                        <h2>Sign Up</h2>
                        <input type="text" className="form-input" placeholder="First Name*" required></input>
                        <input type="text" className="form-input" placeholder="Last Name" ></input>
                        <input type="email" className="form-input" placeholder="Email*" required></input>
                        <input type="password" className="form-input" placeholder="Password*" required></input>
                        <button type="submit" className="form-submit">Sign Up</button>
                    </form >

                    <p id="toggleForm">Don't have an account? Sign Up</p>

                </div>


            </div>




        </>

    )
}

export default LandingBody