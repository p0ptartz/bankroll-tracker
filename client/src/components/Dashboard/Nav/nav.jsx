import React from "react"
import "./nav.css"
import { useMutation } from "@apollo/client";
import { ADD_ENTRY } from '../../../utils/mutations/addEntryMutation'


export default function Nav() {

    const [addEntry, { loading, error }] = useMutation(ADD_ENTRY);

    const handleAddEntry = async (e) => {
        e.preventDefault()
        const userId = localStorage.getItem('userId');
        console.log("userId: " + userId)
        const form = e.target
        const formData = new FormData(form);

        const rawDate = formData.get('date');
        const date = new Date(rawDate).toLocaleDateString('en-US', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        });
        const variables = {
            userId: userId,
            date: date,
            location: formData.get('location'),
            buyIn: parseFloat(formData.get('buyIn')),
            cashOut: parseFloat(formData.get('cashOut')),
            hours: parseFloat(formData.get('hours')),
            stake: formData.get('stake'),
            gameType: formData.get('gameType'),
        }
        try {
            await addEntry({ variables });

            form.reset();
            form.submit();

        } catch (error) {
            console.log("Error occurred:", error)
        }

    }

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

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add A Session</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleAddEntry}>
                                <input type="date" name="date" id="" className="w-100 my-2 py-1" />
                                <input type="text" name="location" id="" className="w-100 my-2 py-1" />
                                <input type="text" name="buyIn" id="" className="w-100 my-2 py-1" />
                                <input type="text" name="cashOut" id="" className="w-100 my-2 py-1" />
                                <input type="text" name="hours" id="" className="w-100 my-2 py-1" />
                                <select name="stake" id="" className="w-100 my-2 py-1">
                                    <option value="1/2">1/2</option>
                                    <option value="1/3">1/3</option>
                                    <option value="2/2">2/2</option>
                                    <option value="2/5">2/5</option>
                                    <option value="5/5">5/5</option>
                                    <option value="5/10">5/10</option>
                                    <option value="10/10">10/10</option>
                                    <option value="10/25">10/25</option>
                                    <option value="25/25">25/25</option>
                                    <option value="25/50">25/50</option>
                                </select>
                                <select name="gameType" id="" className="w-100 my-2 py-1">
                                    <option value="PLO">PLO</option>
                                    <option value="NLHE">NLHE</option>
                                    <option value="PLO5">PLO5</option>
                                </select>
                                <div className="modal-footer">


                                </div>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}