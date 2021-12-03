import React from "react";
import VideoItem from "../youtube/videoItem";
import "../../styles/videoList.scss";
const VideoList = (props) => {
  return (
    <ul className="videos">
      {props.video.map((item) => (
        <VideoItem
          key={item.id}
          item={item}
          onVideoClick={props.onVideoClick}
          display={props.display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
