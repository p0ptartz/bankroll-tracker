import React, { useEffect } from "react";
import "./landing.css"
import LandingNav from "./landingNav/landingNav";
import LandingBody from "./landingBody/landingBody";
import LandingAbout from "./landingAbout/landingAbout";
import LandingReview from "./landingReview/landingReview";
import LandingLogin from "./landingLogin/landingLogin";


function Landing() {

    return (
        <div className="landing-container">
            <LandingNav />
            <LandingBody />
            <LandingAbout />
            <LandingReview />
        </div>

    )
}

export default Landing 