import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtubeMain.scss";
import VideoList from "../youtube/videoList";
import Nav from "../youtube/youtubeNav";

const YoutubeMain = (props) => {
  const [video, setVideo] = useState([]);
  let [name, setName] = useState();
  const history = useHistory();
  const youtubeKey = props.youtubeKey;
  // console.log(youtubeKey, "나유튜브메인");

  // const youtube = new Youtube();

  const search = (query) => {
    youtubeKey.search(query).then((item) => setVideo(item));
  };

  useEffect(() => {
    youtubeKey.mostPopular().then((item) => setVideo(item));
  }, []);

  const inputValue = history.location.state.inputValue;

  localStorage.setItem("id", JSON.stringify(inputValue));
  useEffect(() => {
    const saved = localStorage.getItem("id");
    if (saved !== null) {
      setName(saved);
    }
  }, [inputValue]);

  return (
    <div>
      <Nav search={search} name={name}></Nav>
      <VideoList video={video} />
    </div>
  );
};

export default YoutubeMain;
