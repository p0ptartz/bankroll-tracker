import React from "react";
import "./statRow1.css"
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from 'chart.js';

export default function StatRow1() {

    ChartJS.register(ArcElement);
    const userId = localStorage.getItem('userId');
    const { loading, error, data } = useQuery(GET_USER_ENTRIES, {
        variables: { userId },
    });

    const entries = data?.getUserEntries || [];
    // entries.forEach(entry => {
    //     const date = entry.date;
    //     console.log("Date: " + date);

    // });

    // REDUCE METHOD reduces array into a single value - sum = accumlated value & entry = current object.

    const hourSum = entries.reduce((sum, entry) => {
        return sum + entry.hours;
    }, 0);

    const buyInSum = entries.reduce((sum, entry) => {
        return sum + entry.buyIn;
    }, 0);

    const cashOutSum = entries.reduce((sum, entry) => {
        return sum + entry.cashOut;
    }, 0);

    const sessionsPlayed = entries.length




    const totalMoneyWon = cashOutSum - buyInSum;
    // round up so no decimal points
    const hourly = Math.floor(totalMoneyWon / hourSum);


    const numWinningSessions = entries.reduce((count, entry) => {
        if (entry.cashOut - entry.buyIn > 0) {
            return count + 1;
        }
        return count;
    }, 0);

    // Calculate the win percentage
    const percentage = (numWinningSessions / entries.length) * 100;
    const winPercentage = Math.floor(percentage)

    const optionsChart = {
        plugins: {
            legend: true
        },
        elements: {
            arc: {
                borderWidth: 0,
            }
        },
        cutout: "70%"
    };

    const dataChart = {
        labels: ["Win %", "Lose %"],
        datasets: [
            {
                data: [winPercentage, 100 - winPercentage],
                backgroundColor: ["rgb(147, 135, 253)", "rgb(53, 44, 136)"]
            }
        ]
    };

    if (loading) {

        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error.message)
        return <p>Error: {error.message}</p>;



    }
    return (
        <>
            <div className="stat-item-1 stat-item">
                <div className="mx-3 h-100 d-flex flex-column justify-content-around total-hours">
                    <div className="d-flex justify-content-between">
                        <p className="">Total Hours Played:</p>

                        <p className={`${hourSum >= 0 ? 'text-primary' : 'red'}`}>
                            {hourSum}
                        </p>
                    </div>

                    <div className="d-flex justify-content-between ">
                        <p>Total Sessions Played: </p>
                        <p className="text-primary">{sessionsPlayed}</p>
                    </div>

                </div>


            </div>
            <div className="stat-item-2 stat-item">
                <div className="mx-3 h-100 d-flex flex-column justify-content-around total-hours">
                    <div className="d-flex justify-content-between ">
                        <p className="">Total Money Won:</p>
                        <p className={`${totalMoneyWon >= 0 ? 'green' : 'red'}`}>
                            {totalMoneyWon >= 0 ? '+ ' : '- '}
                            {Math.abs(totalMoneyWon)}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <p >Hourly Rate: </p>
                        <p className={`${hourly >= 0 ? 'green' : 'red'}`}>${hourly}</p>
                    </div>

                </div>
            </div>
            <div className="stat-item-3 stat-item">
                <div className="mx-3 h-100 d-flex justify-content-between align-items-center total-hours">
                    <p className="">Win %: <span className="text-primary">{winPercentage}%</span></p>
                    <div style={{ width: "50px", height: "50px" }}>
                        <Doughnut data={dataChart} options={optionsChart} />
                    </div>
                </div>
            </div>
        </>

    )
}