import React from "react";
import Profile from "../Dashboard/Profile/profile";
import Nav from "../Dashboard/Nav/nav";
import Results from "./Results/results";

function Yearly() {
    return (
        <div className="dashboard-grid">
            <Nav />
            <Profile />
            <Results />

        </div>
    )
}

export default Yearly