import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MockData from "../assets/mock.json";
import Settings from "../assets/settings.json";
class VideoCarousel extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      video: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    this.fetchVids();
  }
  fetchVids() {
    const base_url = Settings.baseUrl;
    const path = "videos/all/?type=";
    const type = this.props.type;
    const url = base_url + path + type + "&number=10";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(
        result => {
          this.setState({
            video: result,
            isLoaded: true
          });
        },
        error => {
          console.log(error);
        }
      );
  }
  render() {
    const settings = {
      arrows: true,
      centerPadding: "5px",
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    let thumb = <p>Currently there is no video to show</p>;
    let type = this.props.type;
    let video = this.state.video;
    let videos = video.vids;
    if (video.count >= 1) {
      thumb = videos.map((video, index) => {
        return <Thumbnail key={index} video={video} />;
      });
    }

    return (
      <div>
        <Slider {...settings}>{thumb}</Slider>
        <a className="show-more" href={`/videos/${type}`}>
          SHOW MORE
        </a>
        <div className="gap-50" />
      </div>
    );
  }
}

export default VideoCarousel;
