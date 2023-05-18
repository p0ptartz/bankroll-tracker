import React from "react";
import "./statRow2.css";
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement
} from 'chart.js'

// LINE GRAPH ATTEMPT ref: https://www.youtube.com/watch?v=cxKNhSzxafg

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)


function StatRow2() {
    const userId = localStorage.getItem("userId");
    const { loading, error, data } = useQuery(GET_USER_ENTRIES, {
        variables: { userId },
    });

    const entries = data?.getUserEntries || [];


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error.message);
        return <p>Error: {error.message}</p>;
    }

    const recentSessions = entries.slice(-5);
    recentSessions.sort((a, b) => new Date(b.date) - new Date(a.date));

    const sortedEntries = entries.slice().sort((a, b) => new Date(a.date) - new Date(b.date)); // sort entries by date by oldest date

    const optionsChart = {
        plugins: {
            legend: true
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 123, 173, 0.20)',
                },
                ticks: {
                    beginAtZero: true,
                    color: '#AFAFAF'
                }
            },
            y: {
                grid: {
                    color: (context) => (context.tick.value === 0 ? '#B72D2D' : 'rgba(0, 123, 173, 0.20)'),
                },
                ticks: {
                    beginAtZero: true,
                    color: '#AFAFAF'

                }
            }
        }
    }
    const dataChart = {
        labels: ["", ...sortedEntries.map(entry => entry.date)],
        datasets: [
            {
                label: 'Total Win/Loss',
                data: [0, ...entries.reduce((accumulator, entry) => { // using spread operator to spread into new array
                    const difference = entry.cashOut - entry.buyIn;
                    const lastValue = accumulator.length > 0 ? accumulator[accumulator.length - 1] : 0;
                    return [...accumulator, lastValue + difference];
                }, [])],
                backgroundColor: '#EAEC87',
                borderColor: '#2DB75E',
                borderWidth: 1.3,
                pointRadius: 0

            }
        ]
    };

    return (
        <>
            <div className="graph-item-1 stat-item">
                <Line
                    data={dataChart}
                    options={optionsChart}
                >
                </Line>
            </div>
            <div className="most-recent-container">
                <div className="most-recent ">
                    <div className="recent-header d-flex align-items-center ">
                        <p className="mx-3">Recent Sessions:</p>
                    </div>

                    {recentSessions.map((entry) => {
                        const location = entry.location;
                        const capitalizedLocation = location
                            .split(" ")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ");
                        const date = entry.date;
                        const sum = entry.cashOut - entry.buyIn;

                        return (
                            <div className="recent-session ">
                                <div className="mx-3 h-100 d-flex justify-content-between align-items-center">
                                    <p className="recent-session-p purple">
                                        {capitalizedLocation}
                                        <br />{" "}
                                        {/* <span className="recent-session-location">Bensalem, PA</span>{" "} */}
                                    </p>
                                    <p className="recent-date">
                                        {" "}
                                        <span className="">{date}</span>{" "}
                                    </p>
                                    <p className="win-loss">
                                        <span className={`${sum >= 0 ? "green" : "red"}`}>{sum}</span>{" "}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


        </>
    );
}


export default StatRow2;
