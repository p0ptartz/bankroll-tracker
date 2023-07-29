import { React, useState } from "react";
import LandingBody from "../landingBody/landingBody";
import { useMutation } from "@apollo/client"
import { SIGNUP_MUTATION } from "../../../utils/mutations/signupMutation";
import { useNavigate } from "react-router-dom";

function LandingSignup() {
    const navigate = useNavigate()
    const [showBody, setShowBody] = useState(false);
    const [signup] = useMutation(SIGNUP_MUTATION)

    const handleSignup = async (e) => {
        e.preventDefault();
        //input values
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        console.log("the values work")

        try {
            // signup mutation
            const { data } = await signup({
                variables: { firstName, lastName, email, password },

            });
            console.log("there is data below")
            console.log(data)
            localStorage.setItem('userId', data.signup.id)
            localStorage.setItem('userName', data.signup.firstName);
            localStorage.setItem('email', data.signup.email);
            console.log("wooooo you signed up")
            navigate("/dashboard")

        } catch (error) {

            console.error(error);

        }

    };

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

                    <form id="signupForm" onSubmit={handleSignup} >
                        <div className="exit-modal">
                            <h2>Sign Up</h2>
                            <p className="close-btn" onClick={handleCloseButtonClick}>X</p>
                        </div>

                        <input name="firstName" type="text" className="form-input" placeholder="First Name*" required></input>
                        <input name="lastName" type="text" className="form-input" placeholder="Last Name" ></input>
                        <input name="email" type="email" className="form-input" placeholder="Email*" required></input>
                        <input name="password" type="password" className="form-input" placeholder="Password*" required></input>
                        <button type="submit" className="form-submit">Sign Up</button>
                    </form >

                </div>


            </div>
        </>
    )
}

export default LandingSignup







