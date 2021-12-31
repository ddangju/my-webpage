import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtube/youtube.scss";
import youtubeGjf from "../../images/youtube.gif";
import youtubeLogo from "../../images/youtubeLogo.svg";
import Icons from "../../components/icons";

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
          <Icons />
        </div>
        <div className="login">
          <img src={youtubeGjf} alt="사진" className="youtubeGif" />
          <img src={youtubeLogo} alt="사진" className="youtubeLogo" />
          <form className="formContainer">
            <input
              className="id_input"
              placeholder="사용자 이름을 입력하세요"
              type="text"
              onChange={handleChange}
            />
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
