import React from "react";
import "./profile.css"

function Profile() {

    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email')






    return (
        <>
            <div className="profile-container p-5">
                <p>WELCOME, </p>
                <p>{userName}</p>
                <p className="meh">{email}</p>
            </div>
        </>
    )
}

export default Profile