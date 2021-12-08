import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtubeDetail.scss";
import VideoList from "../youtube/videoList";
import YoutubeNav from "../youtube/youtubeNav";
import "../../styles/youtubeDetail.scss";

const YoutubeDetail = (props) => {
  const history = useHistory();
  const state = history.location.state;
  const video = state.video;
  const [selected, setSelected] = useState(state.selected);

  console.log(history.location.state);
  const onVideoClick = (video) => {
    setSelected(video);
  };
  return (
    <section className="detail">
      <YoutubeNav user={history.location.state.user}></YoutubeNav>
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
          <h2>{selected.snippet.title}</h2>
          <h3>{selected.snippet.channelTitle}</h3>
          <pre>{selected.snippet.description}</pre>
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
