import React from "react";
import './results.css'
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";


function Results() {
    const userId = localStorage.getItem("userId");
    const { loading, error, data } = useQuery(GET_USER_ENTRIES, {
        variables: { userId },
    });

    const entries = data?.getUserEntries || [];




    return (
        <section className="results">
            <div className="results-grid">
                <div className="date-choice">
                    <div className="btn-group">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Results