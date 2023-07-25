import React, { useMemo } from "react";
import './results.css'
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";

function Results() {
    const userId = localStorage.getItem("userId");

    const data = useQuery(GET_USER_ENTRIES, {
        variables: { userId },
    });

    // Move the 'entries' inside the useMemo callback function
    const uniqueYears = useMemo(() => {
        const entries = data?.getUserEntries || [];
        const yearsSet = new Set(entries.map(entry => "20" + entry.date.slice(-2)));
        return Array.from(yearsSet);
    }, [data?.getUserEntries]);

    return (
        <section className="results">
            <div className="results-grid">
                <div className="date-choice">
                    <div className="btn-group">
                        <button className=" btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Years
                        </button>
                        <ul className="dropdown-menu">
                            {uniqueYears.map(year => (
                                <li key={year}>
                                    <a className="dropdown-item" href="google.com">{year}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <h1 className="text-warning text-center coming-soon">IN DEVELOPMENT, COMING SOON!</h1>
            </div>
        </section>
    )
}

export default Results;
