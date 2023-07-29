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
                    <p className="navbar-brand text-light"><span className="text-warning">d</span>P</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default LandingNav