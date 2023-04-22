import React from "react";
import "./statRow2.css"

export default function StatRow2() {
    return (
        <>
            <div className="graph-item-1 stat-item">

            </div>
            <div className="most-recent-container">
                <div className="most-recent ">
                    <div className="recent-header d-flex align-items-center ">
                        <p className="mx-3">Recent Sessions:</p>
                    </div>

                    <div className="recent-session ">
                        <div className="mx-3 h-100 d-flex justify-content-between align-items-center">
                            <p className="recent-session-p">Parx<br /> <span className="recent-session-location">Bensalem, PA</span> </p>
                            <p className="recent-date">4/20/2023</p>
                            <p className="win-loss">+2600</p>
                        </div>

                    </div>
                    <div className="recent-session">

                    </div>
                    <div className="recent-session">

                    </div>
                    <div className="recent-session">

                    </div>
                    <div className="recent-session">

                    </div>
                </div>

            </div>
        </>
    )
}