import React from "react";
import VideoItem from "../youtube/videoItem";
import "../../styles/videoList.scss";
const VideoList = (props) => {
  // console.log(props.video, "List");

  return (
    <ul className="videos">
      {props.video.map((item) => (
        <VideoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default VideoList;
