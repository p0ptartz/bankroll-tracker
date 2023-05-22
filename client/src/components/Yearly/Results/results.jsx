import React, { useMemo } from "react";
import './results.css'
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";


function Results() {
    const userId = localStorage.getItem("userId");

    const { loading, error, data } = useQuery(GET_USER_ENTRIES, {
        variables: { userId },
    });

    const entries = data?.getUserEntries || [];


    // removes duplicated years into one year
    const uniqueYears = useMemo(() => {
        const yearsSet = new Set(entries.map(entry => "20" + entry.date.slice(-2)));
        return Array.from(yearsSet);
    }, [entries]);

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
                                <li >
                                    <a className="dropdown-item" href="#">{year}</a>
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

export default Results