import React from "react";
import "../../styles/youtubeItem.scss";

const VideoItem = (props) => {
  // console.log(props.onVideoClick
  const displayType = props.display === "list" ? "list" : "grid";
  return (
    <li
      className={`videoContainer ${displayType}`}
      onClick={() => props.onVideoClick(props.item)}
    >
      <div className="videoElements">
        <img
          src={props.item.snippet.thumbnails.medium.url}
          className="video"
          alt="video"
        />
        <div className="titleContainer">
          <p className="title">{props.item.snippet.title}</p>
          <p className="channel">{props.item.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
