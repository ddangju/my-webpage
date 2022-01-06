import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtube/youtubeMain.scss";
import VideoList from "../youtube/videoList";
import YoutubeNav from "../youtube/youtubeNav";

const YoutubeMain = (props) => {
  console.log("youtubeMain");
  // console.log(props.youtubeKey, ">>>>>>>>>>>>>");
  const [video, setVideo] = useState([]);
  const history = useHistory();
  const state = history.location.state;
  // console.log(state.inputValue, "나는state");

  // const searchList = history.location.state.searchList;
  const youtubeKey = props.youtubeKey;
  const [user, setUser] = useState("");
  const [selected, setSelected] = useState();
  ///비디오 선택
  const selectVideo = (video) => {
    setSelected(video);
  };

  const search = (query) => {
    youtubeKey.search(query).then((item) => setVideo(item));
  };

  const inputValue = state.inputValue;
  localStorage.setItem("id", JSON.stringify(inputValue));
  useEffect(() => {
    console.log("4");
    const saved = localStorage.getItem("id");
    if (saved !== null) {
      setUser(saved);
    }
    // console.log(name, "name");
    // if (saved === "") {
    //   setName("사용자");
    // }
  }, [inputValue]);

  useEffect(() => {
    console.log("1");

    // console.log("input", [history?.location?.state?.inputValue]);
    // if (localStorage.getItem("id") !== null) {
    //   setUser(state?.inputValue);
    //   // console.log("input2", [history?.location?.state?.inputValue]);
    // }
    if (localStorage.getItem("id") === '""') {
      setUser("사용자");
    }
    if (history.location.state.user) {
      setUser(history.location.state.user);
    }
  }, [state?.inputValue, history.location.state.user]);

  //detail에서 넘어오는 state가 없으면 mostPopular(item)을 set
  //들어오면 youtubekey에 담긴 값을 set
  useEffect(() => {
    console.log("2");

    if (!state.searchList) {
      youtubeKey.mostPopular().then((item) => setVideo(item));
    } else {
      setVideo(state.searchList);
    }
    // console.log("인기영상", [state.searchList]);
  }, [state.searchList, youtubeKey]);

  ///영상을 클릭할 때 실행
  useEffect(() => {
    console.log("3");
    // console.log("디테일", [history, selected, user, video, youtubeKey]);
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
          <VideoList video={video} onVideoClick={selectVideo} />
        </div>
      </section>
    </div>
  );
};

export default YoutubeMain;
