import React from "react";
import "./statRow1.css"
import { useQuery } from "@apollo/client";
import { GET_USER_ENTRIES } from "../../../utils/queries/getUserEntriesQuery";

export default function StatRow1() {

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
    const winPercentage = (numWinningSessions / entries.length) * 100;


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
                <div className="mx-3 h-100 d-flex justify-content-between align-items-center total-hours">
                    <p className="">Total Hours Played:</p>

                    <p className={`${hourSum >= 0 ? 'purple' : 'red'}`}>
                        {hourSum}
                    </p>
                </div>
            </div>
            <div className="stat-item-2 stat-item">
                <div className="mx-3 h-100 d-flex justify-content-between align-items-center total-hours">
                    <p className="">Total Money Won:</p>
                    <p className={`${totalMoneyWon >= 0 ? 'green' : 'red'}`}>
                        {totalMoneyWon >= 0 ? '+ ' : '- '}
                        {Math.abs(totalMoneyWon)}
                    </p>
                </div>
            </div>
            <div className="stat-item-3 stat-item">
                <div className="mx-3 h-100 d-flex justify-content-between align-items-center total-hours">
                    <p className="">Win %: <span className="purple">{winPercentage}%</span></p>
                    <p >Hourly: <span className={`${hourly >= 0 ? 'green' : 'red'}`}>${hourly}</span></p>
                </div>
            </div>
        </>

    )
}