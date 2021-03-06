import React from "react";
import ReactDOM from "react-dom";
import "./styles/common/reset.scss";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Youtube from "./service/youtubeService";
import AuthService from "./service/auth_service";
import imgUpload from "./service/image_uploader";
import CardRepository from "./service/card_repository";
import LikeButton from "./service/like_service";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);
const authService = new AuthService();
const imgChange = new imgUpload();
const cardRepository = new CardRepository();
const likeButton = new LikeButton();

ReactDOM.render(
  <React.StrictMode>
    <App
      youtube={youtube}
      authService={authService}
      imgChange={imgChange}
      cardRepository={cardRepository}
      likeButton={likeButton}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
