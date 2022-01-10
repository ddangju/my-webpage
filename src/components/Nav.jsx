import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";
import photo1 from "../images/001.png";
import photo3 from "../images/visitor.png";
import photo4 from "../images/004.png";
import photo6 from "../images/memo.png";

const Nav = () => {
  return (
    <div className="navContainer">
      <div className="imgContainer">
        <Link to="/intro" className="linkImg2">
          <div className="imgElement">
            <img className="lingImg" src={photo1} alt="사진" />
            <p className="nav_menu">Introduce</p>
          </div>
        </Link>

        <Link to="/todo" className="linkImg2">
          <div className="imgElement">
            <img className="lingImg" src={photo6} alt="사진" />
            <p className="nav_menu">To Do</p>
          </div>
        </Link>
        <Link to="/youtube" className="linkImg2">
          <div className="imgElement">
            <img className="lingImg" src={photo4} alt="사진" />
            <p className="nav_menu">Youtube</p>
          </div>
        </Link>
        <Link to="/visitor" className="linkImg2">
          <div className="imgElement">
            <img className="lingImg" src={photo3} alt="사진" />
            <p className="nav_menu">Visitor</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
