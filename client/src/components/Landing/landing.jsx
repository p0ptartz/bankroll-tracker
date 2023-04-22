import React, { useEffect } from "react";
import "./landing.css"

function Landing() {
    useEffect(() => {
        const handleScroll = () => {
            let navbar = document.querySelector(".navbar");
            if (window.pageYOffset > 50) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        };
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="landing-container">
            {/* <!-- NAV BAR --> */}

            <nav className="navbar navbar-expand-lg py-3 fixed-top ">
                <div className="container ">
                    <a className="navbar-brand text-light" href="#"><span className="text-warning">d</span>P</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div className="test">
                <div className="test-2 ">
                    <div className="row h-100  align-items-center">
                        <div className="col-lg-12 h-75 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="text-center text-warning">deep <span className="text-white">Pockets</span> </h1>
                            <div className="row justify-content-center align-items-center mt-3 mb-3">

                                <div className="col-sm-6  text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Corrupti dignissimos,
                                    totam praesentium cupiditate ad beatae necessitatibus hic accusantium dolor nesciunt alias
                                    impedit
                                    quis sed porro, doloribus libero mollitia eum est.</div>

                            </div>
                            <div className="row justify-content-center">
                                <div className=" d-flex justify-content-center">
                                    <button type="button" className="btn btn-light click">Login</button>

                                    <button type="button" className="btn btn-warning click">Sign Up</button>
                                </div>


                            </div>
                        </div>
                    </div>


                </div>

                {/* <!-- ABOUT --> */}

            </div>
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

            {/* <!-- PRICING --> */}

            <section id="pricing">

                <div className="container w-75 ">
                    <div className="testimonials">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"
                            data-bs-interval="3000">
                            <div className="carousel-indicators mb-0">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="single-item">
                                        <div className="row mx-auto">
                                            <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                                    quas quaerat aliquam! Dolore suscipit ea quibusdam illum dolorum error vel.
                                                </p>
                                                <div className="row mt-4">

                                                    <div className="col-md-3 ">
                                                        <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80"
                                                            alt="" className="img-fluid rounded"></img>
                                                    </div>
                                                    <div className="col-md-9 ps-4 ">
                                                        <h4 className=" mb-0">Lorem, ipsum.</h4>
                                                        <p className="">Lorem, ipsum.</p>
                                                        <div className="">
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="carousel-item ">
                                    <div className="single-item">
                                        <div className="row mx-auto">
                                            <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                                    quas quaerat aliquam! Dolore suscipit ea quibusdam illum dolorum error vel.
                                                </p>
                                                <div className="row mt-4">

                                                    <div className="col-md-3 ">
                                                        <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                                                            alt="" className="img-fluid rounded"></img>
                                                    </div>
                                                    <div className="col-md-9 ps-4 ">
                                                        <h4 className=" mb-0">Lorem, ipsum.</h4>
                                                        <p className="">Lorem, ipsum.</p>
                                                        <div className="">
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <div className="single-item">
                                        <div className="row mx-auto">
                                            <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                                    quas quaerat aliquam! Dolore suscipit ea quibusdam illum dolorum error vel.
                                                </p>
                                                <div className="row mt-4">

                                                    <div className="col-md-3 ">
                                                        <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                                                            alt="" className="img-fluid rounded"></img>
                                                    </div>
                                                    <div className="col-md-9 ps-4 ">
                                                        <h4 className=" mb-0">Lorem, ipsum.</h4>
                                                        <p className="">Lorem, ipsum.</p>
                                                        <div className="">
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>

    )
}

export default Landing 