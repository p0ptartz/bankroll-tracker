import React from "react";
import "./statRow2.css";
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    BarElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement
);

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

    const sortedEntries = entries.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

    const optionsChart = {
        responsive: true,
        maintainAspectRatio: false,
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
    };

    const dataChart = {
        labels: ["", ...sortedEntries.map(entry => entry.date)],
        datasets: [
            {
                label: 'Total Win/Loss',
                data: [0, ...entries.reduce((accumulator, entry) => {
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

    const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const monthlyResults = labels.reduce((accumulator, month) => {
        return { ...accumulator, [month]: 0 };
    }, {});

    entries.forEach(entry => {
        const month = new Date(entry.date).toLocaleString('default', { month: 'short' });
        const difference = entry.cashOut - entry.buyIn;
        monthlyResults[month] += difference;
    });

    const barData = labels.map(month => Math.abs(monthlyResults[month]));

    const barDataChart = {
        labels: labels,
        datasets: [
            {
                label: 'Monthly Results',
                data: barData,
                backgroundColor: barData.map(value => monthlyResults[labels[barData.indexOf(value)]] < 0 ? '#B72D2D' : '#EAEC87'),
                borderColor: 'transparent',
                borderWidth: 1.3,
            }
        ]
    };

    const barOptionsChart = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: true
        },
        scales: {
            x: {
                type: 'category',
                grid: {
                    color: 'rgba(0, 123, 173, 0.20)',
                },
                ticks: {
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
    };

    return (
        <>
            <div className="graph-item-1 stat-item">
                <Line
                    data={dataChart}
                    options={optionsChart}
                />
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
                            <div className="recent-session " key={entry.id}>
                                <div className="mx-3 h-100 d-flex justify-content-between align-items-center">
                                    <p className="recent-session-p purple">
                                        {capitalizedLocation}
                                        <br />
                                        {/* <span className="recent-session-location">Bensalem, PA</span>{" "} */}
                                    </p>
                                    <p className="recent-date">
                                        {" "}
                                        <span className="">{date}</span>{" "}
                                    </p>
                                    <p className="win-loss">
                                        <span className={`${sum >= 0 ? "green" : "red"}`}>{Math.abs(sum)}</span>{" "}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className="graph-item-2">
                <p id="monthly-title" className="px-5 text-white ">Earnings by Month:</p>
                <div className="monthly-chart px-2">

                    <Bar
                        data={barDataChart}
                        options={barOptionsChart}
                    />
                </div>
                <div className="month-color">
                    <div className="colors">
                        <div className="yellow-color">

                        </div>
                        <p className="py-2 px-2 text-white">Positive Earnings</p>
                    </div>
                    <div className="colors">
                        <div className="red-color">

                        </div>
                        <p className="py-2 px-2 text-white">Negative Earnings</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default StatRow2;
