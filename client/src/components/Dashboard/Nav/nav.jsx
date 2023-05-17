import React from "react"
import "./nav.css"

export default function Nav() {
    return (
        <section className="dashboard-nav ">
            <div>
                <h5 className="py-1"><span className="text-warning">deep</span><span className="text-white">pockets</span>
                </h5>
            </div>
            <div className="text-end">
                <a className=" logout py-1 " href="">Logout</a>
            </div>
            <div className="d-flex flex-column justify-content-end py-2">
                <h2 className="text-white" >DASHBOARD</h2>
                <p className="fs-6 purple" >Welcome to your dashboard!</p>
            </div>
            <div className="d-flex flex-column justify-content-end align-items-end py-3">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="px-4 py-2 session-btn">ADD A SESSION</button>
            </div>

            {/* ADD A SESSION MODAL */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add A Session</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}