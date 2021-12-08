import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtubeMain.scss";
import VideoList from "../youtube/videoList";
import YoutubeNav from "../youtube/youtubeNav";
import YoutubeDetail from "./youtubeDetail";

const YoutubeMain = (props) => {
  const [video, setVideo] = useState([]);
  const history = useHistory();
  const youtubeKey = props.youtubeKey;
  const [user, setUser] = useState("");
  const [selected, setSelected] = useState(null);
  // console.log(youtubeKey, "나유튜브메인");

  // const youtube = new Youtube();

  // const goDetail = () => {
  //   console.log("Gd");
  // };
  // console.log(selected, "gd");
  const selectVideo = (video) => {
    setSelected(video);
    // console.log(video, selected);
  };

  const search = (query) => {
    youtubeKey.search(query).then((item) => setVideo(item));
  };

  useEffect(() => {
    youtubeKey.mostPopular().then((item) => setVideo(item));
  }, [youtubeKey]);

  useEffect(() => {
    if (selected) {
      history.push({
        pathname: "/youtubeDetail",
        state: { selected: selected, video: video, user: user },
      });
    }
  }, [history, selected]);

  useEffect(() => {
    if (localStorage.getItem("id") !== null) {
      setUser(history?.location?.state?.inputValue);
    } else if (localStorage.getItem("id") === "") {
      setUser("사용자");
    }
  }, [history?.location?.state?.inputValue]);

  return (
    <div>
      <YoutubeNav search={search} user={user}></YoutubeNav>
      <section className="detail_list_Container">
        {/* {selected && (
          <div className="detailContainer">
            <YoutubeDetail video={selected} />
          </div>
        )} */}
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
