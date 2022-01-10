import React from "react";
import close from "../images/close.png";
import minizewindow from "../images/windowminimize.png";
import { Link } from "react-router-dom";
import "../styles/components/icons.scss";

const Icons = ({ closeBtn }) => {
  return (
    <>
      <div className="canvas-top-icons">
        <img
          className="Minimizedwindow-icon"
          src={minizewindow}
          width="15"
          alt="사진"
        ></img>
        <Link exact="true" to="/">
          <img className="close-icon" src={close} width="25" alt="사진" />
        </Link>
      </div>
    </>
  );
};

export default Icons;
