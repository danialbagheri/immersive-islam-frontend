import React, { Component } from "react";
import VideoCarousel from "../components/VideoCarousel";
import HeroImmage from "../components/HeroImage";
import MockData from "../assets/mock.json";
class HomePage extends Component {
  render() {
    console.log();
    return (
      <section>
        <HeroImmage />
        <div className="gap-20" />
        <h2 className="second-title">Featured Videos</h2>
        <VideoCarousel type="featured" />
        <h2 className="second-title">Recent Videos</h2>
        <VideoCarousel type="recent" />
        <h2 className="second-title">Recommended Video</h2>
        <VideoCarousel type="recommended" />
      </section>
    );
  }
}

export default HomePage;
