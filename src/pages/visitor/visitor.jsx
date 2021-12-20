import React from "react";
import close from "../../images/close.png";
import minizewindow from "../../images/windowminimize.png";
import "../../styles/visitor/visitor.scss";
import { Route, Switch } from "react-router";
import VisitorLogin from "./visitorLogin";
import VisitorList from "./visitorList";

const Visitor = (props) => {
  // console.log(props.authService, "visitor");

  return (
    <div className="animate__animated animate__zoomIn visitorContainer">
      <div className="visitor-main-canvas">
        <div className="visitor-canvas-top">
          <div className="visitor-canvas-top-icons">
            <img
              className="visitor-Minimizedwindow-icon"
              src={minizewindow}
              width="15"
              alt="사진"
            ></img>
            <img
              className="visitor-close-icon"
              src={close}
              width="25"
              alt="사진"
            />
          </div>
        </div>
        <div className="visitor_context">
          <Switch>
            <Route exact path="/visitor">
              <VisitorLogin authService={props.authService} />
            </Route>
            <Route path="/visitor/list">
              <VisitorList authService={props.authService} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Visitor;
