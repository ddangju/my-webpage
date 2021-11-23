import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtubeMain.scss";
import VideoList from "../youtube/videoList";

const YoutubeMain = (props) => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyCU6eEd0vE7rPsnuhwggrOsoKd7ACYB-hQ&key=AIzaSyCU6eEd0vE7rPsnuhwggrOsoKd7ACYB-hQ",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  let [name, setName] = useState();
  const history = useHistory();

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
      <h4>{name}님, 안녕하세요</h4>
      <VideoList video={video} />
    </div>
  );
};

export default YoutubeMain;
