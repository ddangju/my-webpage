import React from "react";
import "../../styles/youtubeItem.scss";

const VideoItem = (props) => {
  // console.log(props.item.snippet.thumbnails.medium);
  return (
    <li className="videoContainer">
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
