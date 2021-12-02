import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/youtube.scss";
import logo from "../../images/logo.png";

const Youtube = (props) => {
  let [inputValue, setInputValue] = useState("");
  const test = useHistory();
  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className="youtubeLogin">
      <div className="youtube-main-canvas">
        <div className="youtube-canvas-top">
          <div className="youtube-canvas-top-icons">
            <img
              className="Minimizedwindow-icon"
              src="image/windowminimize.png"
              width="15"
              alt="사진"
            ></img>
            <img
              className="close-icon"
              src="image/close.png"
              width="25"
              alt="사진"
            />
          </div>
          <div className="login">
            <img src={logo} alt="사진" />
            <form className="formContainer">
              <p className="form_id">아이디</p>
              <input
                className="id_input"
                placeholder="ID"
                type="text"
                onChange={handleChange}
              />
              <p className="form_pw"> 비밀번호 </p>
              <input
                className="pw_input"
                placeholder="Password"
                type="password"
              />
              <div className="button">
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
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
