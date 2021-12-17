import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.scss";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Youtube from "./service/youtubeService";
import AuthService from "./service/auth_service";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);
const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
