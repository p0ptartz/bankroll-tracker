import { React, useState } from "react";
import LandingBody from "../landingBody/landingBody";

function LandingLogin() {

    const [showBody, setShowBody] = useState(false);

    const handleCloseButtonClick = () => {
        setShowBody(true);
    };

    if (showBody) {
        return <LandingBody showBody={showBody} />;
    }
    return (
        <>

            <div className="form-modal">
                <div className="form-modal-container">

                    <form id="loginForm">
                        <div className="exit-modal">
                            <h2>Login</h2>
                            <p className="close-btn" onClick={handleCloseButtonClick}>X</p>
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

