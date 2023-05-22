import React from "react";
import "./dashboard.css";
import Profile from "./Profile/profile";
import Nav from "./Nav/nav";
import StatRow1 from "./StatRow1/statRow1";
import StatRow2 from "./StatRow2/statRow2";

function Dashboard() {
    return (
        <>
            <div className="dash-container">


                <div className="profile-g-container">
                    <Profile />
                </div>


                <div className="dashboard-grid">
                    <Nav />
                    <StatRow1 />
                    <StatRow2 />

                </div>
            </div>
        </>
    );
}

export default Dashboard;
