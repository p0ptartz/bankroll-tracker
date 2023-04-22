import React from "react";
import "./dashboard.css"
import Profile from "../Profile/profile";
import Nav from "../Nav/nav";
import StatRow1 from "../StatRow1/statRow1";
import StatRow2 from "../StatRow2/statRow2";

function Dashboard() {
    return (
        <>
            <div className="dashboard-grid">
                <Profile />
                <Nav />
                <StatRow1 />
                <StatRow2 />
            </div>

        </>
    )
}

export default Dashboard