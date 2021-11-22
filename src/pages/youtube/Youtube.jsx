import React from "react";
import { Link } from "react-router-dom";
import "../../styles/youtube.scss";

const Youtube = () => {
  return (
    <div class="youtubeLogin">
      <div class="youtube-main-canvas">
        <div class="youtube-canvas-top">
          <div class="youtube-canvas-top-icons">
            <image
              class="Minimizedwindow-icon"
              src="image/windowminimize.png"
              width="15"
            ></image>
            <image class="close-icon" src="image/close.png" width="25"></image>
          </div>
          <div class="login">
            {/* <form action="intropage/updownGame.html"> */}
            <form>
              <p class="form_id">아이디 </p>
              <input placeholder="ID" type="text" />
              <p class="form_pw"> 비밀번호 </p>
              <input placeholder="Password" type="password" />
              <Link to="/youtubeMain">
                <div class="button">
                  <button type="submit">Login</button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
