import React from "react";
import "./statRow1.css"

export default function StatRow1() {
    return (
        <>
            <div className="stat-item-1 stat-item">
                <div className="mx-3 h-100 d-flex justify-content-between align-items-center total-hours">
                    <p className="">Total Hours Played:</p>
                    <p className="">555</p>
                </div>
            </div>
            <div className="stat-item-2 stat-item">
                <div className="mx-3 h-100 d-flex justify-content-between align-items-center total-hours">
                    <p className="">Total Money Won:</p>
                    <p className="">+25,500</p>
                </div>
            </div>
            <div className="stat-item-3 stat-item">
                <div className="mx-3 h-100 d-flex justify-content-between align-items-center total-hours">
                    <p className="">Win %: <span>60%</span></p>
                    <p className="">Hourly: <span>$150.20</span></p>
                </div>
            </div>
        </>

    )
}