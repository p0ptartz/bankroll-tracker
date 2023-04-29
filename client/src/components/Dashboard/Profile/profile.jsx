import React from "react";
import "./profile.css"

function Profile() {

    const userId = localStorage.getItem('userId');
    console.log(userId)

    const name = "Eric"
    const email = "ewmeyers@yahoo.com"
    return (
        <>
            <div className="profile-container p-5">
                <p>WELCOME, </p>
                <p>{name}</p>
                <p className="meh">{email}</p>
            </div>
        </>
    )
}

export default Profile