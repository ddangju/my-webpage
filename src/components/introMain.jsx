import React from "react";
import selfie from "../images/me.jpg";
import back from "../images/back.png";
import { useHistory } from "react-router-dom";

const IntroMain = () => {
  const history = useHistory();
  const mouseover = (e) => {
    if (e.target) {
      e.currentTarget.classList.add(
        "animate__animated",
        "animate__bounce",
        "animate__infinite",
        "animate__fast"
      );
    }
    console.log(e.target.classList);
  };
  const mouseLeave = (e) => {
    e.currentTarget.classList.remove(
      "animate__animated",
      "animate__bounce",
      "animate__infinite",
      "animate__fast"
    );
  };

  const goRead = () => {
    history.push("intro/read");
  };

  return (
    <div className="test">
      <div className="selfieContainer">
        <img src={selfie} alt="selfie" className="selfie" />
        <div
          className="clickHeader"
          onMouseOver={mouseover}
          onMouseLeave={mouseLeave}
          onClick={goRead}
        >
          Click me !
        </div>
      </div>
      <img src={back} alt="back" className="backImg" />
    </div>
  );
};

export default IntroMain;
