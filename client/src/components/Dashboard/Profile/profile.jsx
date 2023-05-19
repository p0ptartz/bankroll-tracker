import React from "react";
import "./profile.css"

function Profile() {

    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email')


    return (
        <>
            <div className="profile-container p-5">
                <div id="welcome" className="my-4">
                    <p>WELCOME, </p>
                    <p >{userName}</p>
                    <p className="meh">{email}</p>
                </div>
                <div id="entries" className="my-4 ">
                    <p className="p-1">Entries</p>
                    <p className="p-1">Add an Entry</p>
                    <p className="p-1">View Entries</p>
                </div>
                <div id="analytics" className="my-4 ">
                    <p className="p-1">Analytics</p>
                    <p className="p-1">Lifetime</p>
                    <p className="p-1">Year</p>
                    <p className="p-1">Month</p>
                </div>


            </div>
        </>
    )
}


export default Profile