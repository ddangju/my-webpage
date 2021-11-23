import React from "react";

const VideoItem = (props) => {
  console.log(props.item.snippet);
  return <div>{props.item.snippet.title}</div>;
};

export default VideoItem;
