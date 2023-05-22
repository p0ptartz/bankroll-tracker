import React from "react";
import "./profile.css"
import { useNavigate } from "react-router-dom";



function Profile() {
    const navigate = useNavigate()
    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email')

    const handleYearly = () => {
        navigate("/yearly_results")
    }

    const handleLifetime = () => {
        navigate("/dashboard")
    }

    return (
        <>
            <div className="profile-container  p-5">
                <div id="welcome" className="my-4 ">
                    <p>WELCOME, </p>
                    <p >{userName}</p>
                    <p className="meh">{email}</p>
                </div>
                <div id="entries" className="my-4 ">
                    <p className="p-1">Entries</p>
                    <p className="m-2 pointer">Add an Entry</p>
                    <p className="m-2 pointer">View Entries</p>
                </div>
                <div id="analytics" className="my-4 ">
                    <p className="p-1 ">Analytics</p>
                    <p className="m-2 pointer" onClick={handleLifetime}>Lifetime</p>
                    <p className="m-2 pointer" onClick={handleYearly}>By Year</p>

                </div>


            </div>
        </>
    )
}


export default Profile