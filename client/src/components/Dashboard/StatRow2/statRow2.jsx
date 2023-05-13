import React from "react";
import "./statRow2.css"
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";





function StatRow2() {
    // console.log("stat row2")
    const userId = localStorage.getItem('userId');
    const { loading, error, data } = useQuery(GET_USER_ENTRIES, {
        variables: { userId },
    });
    // console.log("user id here: " + userId)
    // console.log("DATA!? " + JSON.stringify(data));
    const entries = data?.getUserEntries || [];
    entries.forEach(entry => {
        const date = entry.date;
        // console.log("Date: " + date);
        // You can perform further operations with the date value here
    });

    if (loading) {

        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error.message)
        return <p>Error: {error.message}</p>;



    }


    const recentSessions = entries.slice(0, 5)

    return (
        <>
            <div className="graph-item-1 stat-item">

            </div>
            <div className="most-recent-container">
                <div className="most-recent ">
                    <div className="recent-header d-flex align-items-center ">
                        <p className="mx-3">Recent Sessions:</p>
                    </div>



                    {recentSessions.map(entry => {
                        const location = entry.location
                        const capitalizedLocation = location
                            .split(" ") // Split the string by spaces to get an array of words
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
                            .join(" "); // Join the words back into a single string with spaces
                        const date = entry.date
                        const sum = entry.cashOut - entry.buyIn

                        return <div className="recent-session ">

                            <div className="mx-3 h-100 d-flex justify-content-between align-items-center">
                                <p className="recent-session-p">{capitalizedLocation}<br /> <span className="recent-session-location">Bensalem, PA</span> </p>
                                <p className="recent-date"> <span className="">{date}</span> </p>
                                <p className="win-loss"><span className={`${sum >= 0 ? 'green' : 'red'}`}>{sum}</span> </p>
                            </div>

                        </div>
                    })}


                </div>

            </div>
        </>
    )
}

export default StatRow2