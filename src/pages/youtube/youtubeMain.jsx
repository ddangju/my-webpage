import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtubeMain.scss";
import VideoList from "../youtube/videoList";
import Nav from "../youtube/youtubeNav";

const YoutubeMain = (props) => {
  const [video, setVideo] = useState([]);
  let [name, setName] = useState();
  const history = useHistory();
  console.log(props.youtubeKey);
  const youtubeKey = props.youtubeKey;
  // console.log(youtubeKey, "나유튜브메인");

  // const youtube = new Youtube();

  const search = (query) => {
    youtubeKey.search(query).then((item) => setVideo(item));
    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) =>
    //     result.items.map((item) => ({ ...item, id: item.id.videoId }))
    //   )
    //   .then((items) => setVideo(items))
    //   // .then((result) => setVideo(result.items))
    //   .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    youtubeKey.mostPopular().then((item) => setVideo(item));
    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // fetch(
    //   "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideo(result.items))
    //   .catch((error) => console.log("error", error));
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
