import { React, useEffect } from "react"


function LandingNav() {
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

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <>
            {/* <!-- NAV BAR --> */}

            <nav className="navbar navbar-expand-lg py-3 fixed-top ">
                <div className="container ">
                    <a className="navbar-brand text-light" href="#"><span className="text-warning">d</span>P</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default LandingNav