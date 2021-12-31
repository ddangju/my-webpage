import React from "react";
import "../../styles/intro/intro.scss";
import IntroMain from "../../components/introMain";
import { Route, Switch } from "react-router-dom";
import Read from "./read";
import Icons from "../../components/icons";

const Intro = () => {
  return (
    <div className="animate__animated animate__zoomIn introContainer">
      <div className="intro-main-canvas">
        <div className="intro-canvas-top">
          <Icons />
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
