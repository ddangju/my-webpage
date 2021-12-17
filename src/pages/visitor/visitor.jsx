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
    <div className="animate__animated animate__zoomIn todoContainer">
      <div className="todo-main-canvas">
        <div className="todo-canvas-top">
          <div className="todo-canvas-top-icons">
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
          <Route exact path="/visitor">
            <VisitorLogin authService={props.authService} />
          </Route>
          <Route path="/visitor/list">
            <VisitorList />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Visitor;
