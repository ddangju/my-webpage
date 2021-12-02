import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/reset.scss";
import Youtube from "./service/youtubeService";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
