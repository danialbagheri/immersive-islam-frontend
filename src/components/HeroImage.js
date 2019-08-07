import React from "react";

export default class HeroImage extends React.Component {
  render() {
    const HeroImage = {
      backgroundImage: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 59%,
    rgba(0, 0, 0, 0.65) 100%
  ),url(${require("../assets/homepage/banner.jpg")})`
    };
    return (
      <header className="hero-image" style={HeroImage}>
        <div className="hero-shade">
          <h1 className="hero-title">Welcome to Immersive Islam</h1>
          <h2 className="hero-second-line">
            New home for Islamic immersive content
          </h2>
        </div>
      </header>
    );
  }
}
