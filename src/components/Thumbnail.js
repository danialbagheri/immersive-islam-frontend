import React from "react";

export default class Thumbnail extends React.Component {
  render() {
    const vid = this.props.video;
    const url = "/video/watch/" + vid.youtube_id + "&" + vid.id;
    return (
      <a class="video-thumbnail-link" href={url}>
        <img
          className="video-thumbnail"
          src={vid.thumbnail_url}
          alt={vid.video_title}
        />
        <p className="thumbnail-title">{vid.video_title}</p>
        <div className="gap-20" />
      </a>
    );
  }
}
