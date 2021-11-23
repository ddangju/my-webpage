import React from "react";
import VideoItem from "../youtube/videoItem";

const VideoList = (props) => {
  // console.log(props.video, "List");

  return (
    <div>
      <ul>
        {props.video.map((item) => (
          <VideoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
