import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtubeMain.scss";
import VideoList from "../youtube/videoList";
import Nav from "../youtube/youtubeNav";
import YoutubeDetail from "./youtubeDetail";

const YoutubeMain = (props) => {
  const [video, setVideo] = useState([]);
  const [name, setName] = useState();
  const history = useHistory();
  const youtubeKey = props.youtubeKey;
  const [selected, setSelected] = useState(null);
  // console.log(youtubeKey, "나유튜브메인");

  // const youtube = new Youtube();

  // const goDetail = () => {
  //   console.log("Gd");
  // };

  const selectVideo = (video) => {
    console.log(video);
    setSelected(video);
  };

  const search = (query) => {
    youtubeKey.search(query).then((item) => setVideo(item));
  };

  useEffect(() => {
    youtubeKey.mostPopular().then((item) => setVideo(item));
  }, [youtubeKey]);

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
      <section className="detail_list_Container">
        {selected && (
          <div className="detailContainer">
            <YoutubeDetail video={selected} />
          </div>
        )}
        <div className="listContainer">
          <VideoList
            video={video}
            onVideoClick={selectVideo}
            display={selected ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default YoutubeMain;
