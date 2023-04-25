import { React, useState } from "react";
import LandingLogin from "../landingLogin/landingLogin";
import LandingSignup from "../landingSignup/landingSignup";

function LandingBody() {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleLoginButtonClick = () => {
        setShowLoginForm(true);
    };
    const handleSignupButtonClick = () => {
        setShowSignupForm(true);
    };
    return (
        <>
            <div className="test">
                <div className="test-2 ">
                    {showLoginForm && <LandingLogin showLoginForm={showLoginForm} />}
                    {showSignupForm && <LandingSignup showSignupForm={showSignupForm} />}
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
                                    <button type="button" className="btn btn-light click" onClick={handleLoginButtonClick}>Login</button>

                                    <button type="button" className="btn btn-warning click" onClick={handleSignupButtonClick}>Sign Up</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </>

    )
}

export default LandingBody