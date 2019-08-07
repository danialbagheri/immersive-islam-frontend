import React, { Component } from "react";
import YouTube from "react-youtube";
// import Thumbnail from "../components/Thumbnail";
import Settings from "../assets/settings.json";
class SingleVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeId: "",
      vidId: "",
      isLoaded: false,
      video: {}
    };
  }
  componentWillMount() {
    this.getParams();
  }
  componentDidMount() {
    this.fetchVideo();
  }
  getParams() {
    const {
      match: { params }
    } = this.props;
    const youtubeId = params.youtubeId;
    const vidId = params.vidId;
    this.setState({
      youtubeId: youtubeId,
      vidId: vidId
    });
  }

  fetchVideo() {
    const baseUrl = Settings.baseUrl;
    const path = "videos/";
    const videoId = this.state.vidId;
    const url = baseUrl + path + videoId;
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
    const youtubeId = this.state.youtubeId;
    const video = this.state.video;
    const { isLoaded } = this.state;
    const opts = {
      height: "500px",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    let tag = "loading";
    let tags = video.tags;
    if (isLoaded) {
      tag = tags.map(tag => {
        return <span className="video-tag">{tag}</span>;
      });
    }
    return (
      <section className="container-fluid">
        <div className="gap-20" />
        <div className="row">
          <div className="col-12 col-md-9">
            <YouTube videoId={youtubeId} opts={opts} onReady={this._onReady} />
            <h1 className="left-align video-page-title">{video.video_title}</h1>
            <p className="left-align">{video.view_count} views</p>
            <hr className="horizontal-white" />
            <p className="left-align">{video.description}</p>
            <div className="left-align tags">Tags: {tag}</div>
          </div>
          <div className="col-12 col-md-3">
            <h5>Recommended Videos</h5>
            <hr className="horizontal-white" />
            <ul>
              {/* <li>
                <Thumbnail />
              </li>
              <li>
                <Thumbnail />
              </li>
              <li>
                <Thumbnail />
              </li> */}
            </ul>
          </div>
          <div className="gap-50" />
        </div>
      </section>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default SingleVideo;
