import React, { Component } from "react";
import Thumbnail from "../components/Thumbnail";
// import Thumbnail from "../components/Thumbnail";
import Settings from "../assets/settings.json";

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      videos: {}
    };
  }

  componentDidMount() {
    this.fetchVideo();
  }

  fetchVideo() {
    const {
      match: { params }
    } = this.props;
    const type = params.type;
    const baseUrl = Settings.baseUrl;
    const path = "videos/all/?count=100&type=";
    const url = baseUrl + path + type;
    console.log(url);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(
        result => {
          this.setState({
            videos: result,
            isLoaded: true
          });
        },
        error => {
          console.log(error);
        }
      );
  }
  render() {
    const { videos, isLoaded } = this.state;
    // mocking thumbnail while fetching the data
    const vids = videos.vids;
    let i;
    let loading = [];
    function load() {
      loading.push(
        <div className="col-3 col-md-3 col-sm-6">
          <p className="placeholder-video">Loading...</p>
        </div>
      );
    }
    if (!isLoaded) {
      for (i = 0; i < 25; i++) {
        load();
      }
    } else {
      loading = vids.map(video => {
        return (
          <div className="col-6 col-md-3 col-sm-6 col-xs-6">
            <Thumbnail video={video} />
          </div>
        );
      });
    }

    return (
      <div className="container">
        <div className="gap-20" />
        <div className="row">{loading}</div>
      </div>
    );
  }
}

export default Videos;
