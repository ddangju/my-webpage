import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtube/youtubeMain.scss";
import VideoList from "../youtube/videoList";
import YoutubeNav from "../youtube/youtubeNav";

const YoutubeMain = (props) => {
  console.log("1");
  const [video, setVideo] = useState([]);
  const history = useHistory();
  const youtubeKey = props.youtubeKey;
  const [user, setUser] = useState("");
  const [selected, setSelected] = useState(null);
  ///비디오 선택
  const selectVideo = (video) => {
    setSelected(video);
  };

  const search = (query) => {
    youtubeKey.search(query).then((item) => setVideo(item));
  };

  useEffect(() => {
    if (!history.location.state.youtubeKey) {
      youtubeKey.mostPopular().then((item) => setVideo(item));
    } else {
      setVideo(history.location.state.youtubeKey);
    }
    console.log("인기영상", [history.location.state.youtubeKey, youtubeKey]);
  }, [history.location.state.youtubeKey, youtubeKey]);

  ///영상을 클릭할 때 실행
  useEffect(() => {
    console.log("디테일", [history, selected, user, video, youtubeKey]);

    if (selected) {
      history.push({
        pathname: "/youtubeDetail",
        state: {
          selected: selected,
          video: video,
          user: user,
          youtubeKey: youtubeKey,
        },
      });
    }
  }, [history, selected, video, user, youtubeKey]);

  ///사용자id가 넘어오면서 실행
  useEffect(() => {
    console.log("input", [history?.location?.state?.inputValue]);
    if (localStorage.getItem("id") !== null) {
      setUser(history?.location?.state?.inputValue);
      console.log("input2", [history?.location?.state?.inputValue]);
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
