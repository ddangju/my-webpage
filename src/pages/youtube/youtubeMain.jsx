import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtubeMain.scss";
import VideoList from "../youtube/videoList";
import Nav from "../youtube/youtubeNav";

const YoutubeMain = (props) => {
  const [video, setVideo] = useState([]);
  let [name, setName] = useState();
  const history = useHistory();

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCT4sWJm_bgXreVMubNOjQ5-MgwfQjJEhM&key=AIzaSyCT4sWJm_bgXreVMubNOjQ5-MgwfQjJEhM`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   // .then((result) => setVideo(result.items))
    //   .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const inputValue = history.location.state;

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
