import { React, useState } from "react";
import LandingBody from "../landingBody/landingBody";
import { useMutation } from "@apollo/client"
import { LOGIN_MUTATION } from "../../../utils/mutations/loginMutation";
import { useNavigate } from "react-router-dom";


function LandingLogin() {
    const navigate = useNavigate()
    const [showBody, setShowBody] = useState(false);
    const [login] = useMutation(LOGIN_MUTATION)
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        // input values
        const email = e.target.email.value
        const password = e.target.password.value


        try {
            const { data } = await login({
                variables: { email, password },
            });

            console.log("Data: ", data);
            localStorage.setItem('userId', data.login.id)
            localStorage.setItem('userName', data.login.firstName);
            localStorage.setItem('email', data.login.email);

            setLoading(false);
            // redirect to dashboard
            navigate("/dashboard");

        } catch (error) {
            setLoading(false);
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
                        <button type="submit" className="form-submit"> {loading ? <div className="spinner"></div> : "Login"}</button>
                    </form>
                    <p> <br />for demo purposes, login using:  <br />Email: sarah@mail.com <br /> Password: password <br /></p>
                </div>


            </div>
        </>
    )
}

export default LandingLogin

