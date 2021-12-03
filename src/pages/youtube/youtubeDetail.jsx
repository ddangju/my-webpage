import React from "react";
import "../../styles/youtubeDetail.scss";

const YoutubeDetail = (props) => {
  // console.log(props);
  return (
    // <div>
    //   <h2>{props.video.snippet.title}</h2>
    // </div>
    <section className="detail">
      <iframe
        className="iframeContainer"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${props.video.id}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default YoutubeDetail;
