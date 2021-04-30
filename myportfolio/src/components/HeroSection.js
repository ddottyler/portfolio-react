import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import homescreenvid from "../public/videos/home-screen.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={homescreenvid} autoPlay loop muted />
      <h1>Welcome to my Portfolio</h1>
      <p>Take a look around...</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LET'S GO <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
