import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtube/youtube.scss";
import close from "../../images/close.png";
import minizewindow from "../../images/windowminimize.png";
import youtubeGjf from "../../images/youtube.gif";
import youtubeLogo from "../../images/youtubeLogo.svg";

const Youtube = (props) => {
  let [inputValue, setInputValue] = useState("");
  const test = useHistory();
  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className="animate__animated animate__zoomIn youtubeLogin">
      <div className="youtube-main-canvas">
        <div className="youtube-canvas-top">
          <div className="youtube-canvas-top-icons">
            <img
              className="Minimizedwindow-icon"
              src={minizewindow}
              width="15"
              alt="사진"
            ></img>
            <img className="close-icon" src={close} width="25" alt="사진" />
          </div>
        </div>
        <div className="login">
          <img src={youtubeGjf} alt="사진" className="youtubeGif" />
          <img src={youtubeLogo} alt="사진" className="youtubeLogo" />
          <form className="formContainer">
            {/* <p className="form_id">사용자 이름</p> */}
            <input
              className="id_input"
              placeholder="사용자 이름을 입력하세요"
              type="text"
              onChange={handleChange}
            />
            {/* <p className="form_pw"> 비밀번호 </p>
              <input
                className="pw_input"
                placeholder="Password"
                type="password"
              /> */}
            <button
              className="login_button"
              type="submit"
              onClick={() =>
                test.push({
                  pathname: "/youtubeMain",
                  state: {
                    inputValue: inputValue,
                  },
                })
              }
            >
              입장하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
