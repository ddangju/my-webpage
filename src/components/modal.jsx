import React from "react";
import "../styles/modal/modal.scss";
import icons1 from "../images/005.png";
import icons2 from "../images/002.png";
import icons3 from "../images/007.png";

const Modal = ({ off }) => {
  return (
    <div>
      <div className="start-container">
        <div className="start-styling">
          <div className="yeondows98">yeondows98</div>
        </div>
        <div className="start-modal">
          <div className="first-box">
            <img src={icons1} alt="icons" className="icons1" />
            <div className="icon1-text">프로그램</div>
          </div>
          <div className="second-box">
            <img src={icons3} alt="icons" className="icons1" />
            <div className="icon1-text">즐겨찾기</div>
          </div>
          <div className="third-box">
            <img src={icons2} alt="icons" className="icons1" />
            <div className="icon1-text">휴지통</div>
          </div>
          <div className="four-box" onClick={off}>
            <img src={icons1} alt="icons" className="icons1" />
            <div className="icon1-text">시스템 종료</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
