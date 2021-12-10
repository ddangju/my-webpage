import React from "react";
import selfie from "../images/me.jpg";
import back from "../images/back.png";
import { useHistory } from "react-router-dom";

const IntroMain = () => {
  const history = useHistory();
  const mouseover = (e) => {
    console.log(e.target.classList);
    if (e.target) {
      e.target.classList.add(
        "animate__animated",
        "animate__bounce",
        "animate__infinite",
        "animate__fast"
      );
    }
  };
  const mouseLeave = (e) => {
    e.target.classList.remove(
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
    <div>
      <img src={back} alt="back" className="backImg" />
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
    </div>
  );
};

export default IntroMain;
