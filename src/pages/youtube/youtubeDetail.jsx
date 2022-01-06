import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtube/youtubeDetail.scss";
import VideoList from "../youtube/videoList";
import YoutubeNav from "../youtube/youtubeNav";

const YoutubeDetail = (props) => {
  const history = useHistory();
  const state = history.location.state;
  const video = state.video;
  const [selected, setSelected] = useState(state.selected);
  const [search, setSearch] = useState(null);

  const onVideoClick = (video) => {
    setSelected(video);
  };

  const onSearch = (a) => {
    props.youtubeKey.search(a).then((item) => setSearch(item));
  };

  useEffect(() => {
    if (search) {
      history.push({
        pathname: "/youtubeMain",
        state: {
          searchList: search,
          user: history.location.state.user,
        },
      });
    }
  }, [history, search]);

  return (
    <section className="detail">
      <YoutubeNav
        search={onSearch}
        user={history.location.state.user}
      ></YoutubeNav>
      <div className="detailContainer">
        <div className="detailVideoContainer">
          <iframe
            title="youtubePlayer"
            className="iframeContainer"
            type="text/html"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${selected.id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="playerContainer">
            <h2 className="playerHeader">{selected.snippet.title}</h2>
            <h3 className="playerTitle">
              📺채널명 : {selected.snippet.channelTitle}
            </h3>
            <pre className="playerPre">{selected.snippet.description}</pre>
          </div>
        </div>
        <VideoList
          video={video}
          display={selected ? "list" : "grid"}
          withPlayer={selected ? "on" : null}
          onVideoClick={onVideoClick}
        />
      </div>
    </section>
  );
};

export default YoutubeDetail;
