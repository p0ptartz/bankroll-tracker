import React from "react";

function LandingAbout() {


    return (
        <> {/* <!-- ABOUT --> */}
            <div className="container" id="about">
                <p className="text-center mt-5 mb-1">About</p>
                <h2 className="text-center mb-5">LEARN MORE <span className="text-warning ">ABOUT US</span></h2>
                <div className="row ">
                    <div className="col-md-8 text-center">
                        <img src="https://images.unsplash.com/photo-1589884629038-b631346a23c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique aut nobis, magni possimus
                            deleniti saepe ad inventore amet esse.</p>
                        <div className="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="red" fill="currentColor"
                                className="bi bi-check-all" viewBox="0 0 16 16">
                                <path
                                    d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />

                            </svg><span className="ps-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                                voluptatibus
                                saepe
                                harum!</span>
                        </div>

                        <div className="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="red" fill="currentColor"
                                className="bi bi-check-all" viewBox="0 0 16 16">
                                <path
                                    d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />

                            </svg> <span className="ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                                magnam.</span>
                        </div>



                        <div className="mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="red" fill="currentColor"
                                className="bi bi-check-all" viewBox="0 0 16 16">
                                <path
                                    d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />

                            </svg><span className="ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta
                                ipsam
                                earum
                                quia dolorem?</span>

                        </div>

                        <h4>Lorem ipsum dolor sit.</h4>
                    </div>
                </div>
            </div>
        </>
    )

}

export default LandingAbout