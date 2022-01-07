import React from "react";
import VideoItem from "../youtube/videoItem";
import "../../styles/youtube/videoList.scss";
const VideoList = (props) => {
  const displayType = props.withPlayer === "on" ? "on" : null;
  // console.log("list");
  // console.log(props.video, ">>>>>>>>>>>>>>>>>>>>>>>>>>");

  return (
    <ul className={`videos ${displayType}`}>
      {props.video.map((item) => console.log(item, "아이템!!!!!!"))}
      {props.video.map((item, idx) => (
        <VideoItem
          key={idx}
          item={item}
          onVideoClick={props.onVideoClick}
          display={props.display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
