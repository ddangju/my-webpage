import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../../styles/youtube.scss";

const Youtube = () => {
  // console.log(useLocation);
  let [inputValue, setInputValue] = useState("");
  const test = useHistory();
  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  // const saved = localStorage.getItem("todo");
  // if (saved !== null) {
  //   const parseTodo = JSON.parse(saved);
  //   inputValue(parseTodo);
  // }
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
            {/* <form action="intropage/updownGame.html"> */}
            <form>
              <p className="form_id">아이디</p>
              <input placeholder="ID" type="text" onChange={handleChange} />
              <p className="form_pw"> 비밀번호 </p>
              <input placeholder="Password" type="password" />
              <div className="button">
                <button
                  type="submit"
                  onClick={() =>
                    test.push({
                      pathname: "/youtubeMain",
                      state: inputValue,
                    })
                  }
                >
                  Login
                </button>
              </div>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
