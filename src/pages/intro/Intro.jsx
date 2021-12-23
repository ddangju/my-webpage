import React from "react";
import "../../styles/intro/intro.scss";
import close from "../../images/close.png";
import minizewindow from "../../images/windowminimize.png";
import IntroMain from "../../components/introMain";
import { Route, Switch } from "react-router-dom";
import Read from "./read";

const Intro = () => {
  return (
    <div className="animate__animated animate__zoomIn introContainer">
      <div className="intro-main-canvas">
        <div className="intro-canvas-top">
          <div className="intro-canvas-top-icons">
            <img
              className="intro-Minimizedwindow-icon"
              src={minizewindow}
              width="15"
              alt="사진"
            ></img>
            <img
              className="intro-close-icon"
              src={close}
              width="25"
              alt="사진"
            />
          </div>
        </div>
        <Switch>
          <Route exact path="/intro">
            <IntroMain />
          </Route>
          <Route path="/intro/read">
            <Read />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Intro;
