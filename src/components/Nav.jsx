import React from "react";
import { Route, Link } from "react-router-dom";
import "../styles/nav.scss";
import photo1 from "../images/001.png";
import photo2 from "../images/002.png";
import photo4 from "../images/004.png";
import photo6 from "../images/006.png";

const Nav = () => {
  return (
    <div className="navContainer">
      <div class="imgContainer">
        <Link to="/intro">
          <div class="imgElement">
            <img class="img" src={photo1} alt="사진" />
            <p>Introduce</p>
          </div>
        </Link>
        <Link to="/game">
          <div class="imgElement">
            <img src={photo2} alt="사진" />
            <p>Game</p>
          </div>
        </Link>
        <Link to="/todo">
          <div class="imgElement">
            <img src={photo6} alt="사진" />
            <p>TotoList</p>
          </div>
        </Link>
        <Link to="/youtube">
          <div class="imgElement">
            <img src={photo4} alt="사진" />
            <p>Youtube</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
