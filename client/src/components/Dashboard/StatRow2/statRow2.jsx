import React from "react";
import "./statRow2.css"

// import { GET_ENTRIES } from "../../utils/queries/entryQuery";
// import { useQuery } from "@apollo/client";




function StatRow2() {

    // const { loading, error, data } = useQuery(GET_ENTRIES)

    // checking if data is not null or undefined before accessing data.entries
    // const filteredEntry = data && data.entries ? data.entries : [];
    // console.log(filteredEntry)

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
                        <p></p>
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

export default StatRow2