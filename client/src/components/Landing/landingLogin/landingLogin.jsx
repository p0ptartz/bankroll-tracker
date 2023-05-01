import { React, useState } from "react";
import LandingBody from "../landingBody/landingBody";
import { useMutation } from "@apollo/client"
import { LOGIN_MUTATION } from "../../../utils/mutations/loginMutation";
import { useNavigate } from "react-router-dom";


function LandingLogin() {
    const navigate = useNavigate()
    const [showBody, setShowBody] = useState(false);
    const [login, { loading, error }] = useMutation(LOGIN_MUTATION)

    const handleLogin = async (e) => {
        e.preventDefault();

        // input values
        const email = e.target.email.value
        const password = e.target.password.value


        try {
            const { data } = await login({
                variables: { email, password },
            });

            // testing the data in the console
            // console.log(data)
            // const userId = data.login._id;
            // console.log(userId)
            // localStorage.setItem('userId', user._id);


            localStorage.setItem('userName', data.login.firstName);
            localStorage.setItem('email', data.login.email);


            console.log("WOOOO YOU DID IT")
            // redirect to dashboard
            navigate("/dashboard");

        } catch (error) {
            console.log("Error occurred:", error)
        }
    }

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

                    <form id="loginForm" onSubmit={handleLogin}>
                        <div className="exit-modal">
                            <h2>Login</h2>
                            <p className="close-btn" onClick={handleCloseButtonClick}>X</p>
                        </div>

                        <input name="email" type="email" className="form-input" placeholder="Email*" required></input>
                        <input name="password" type="password" className="form-input" placeholder="Password*" required></input>
                        <button type="submit" className="form-submit">Login</button>
                    </form>
                    <p id="toggleForm">Don't have an account? Sign Up</p>
                </div>


            </div>
        </>
    )
}

export default LandingLogin

