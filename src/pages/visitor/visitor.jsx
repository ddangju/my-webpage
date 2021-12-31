import React from "react";
import "../../styles/visitor/visitor.scss";
import { Route, Switch, Link } from "react-router-dom";
import VisitorLogin from "./visitorLogin";
import VisitorList from "./visitorList";
import { useHistory } from "react-router-dom";
import Icons from "../../components/icons";

const Visitor = (props) => {
  const history = useHistory();

  return (
    <div className="animate__animated animate__zoomIn visitorContainer">
      <div className="visitor-main-canvas">
        <div className="visitor-canvas-top">
          <Icons></Icons>
        </div>
        <div className="visitor_context">
          <Switch>
            <Route exact path="/visitor">
              <VisitorLogin authService={props.authService} />
            </Route>
            <Route path="/visitor/list">
              <VisitorList
                authService={props.authService}
                imgChange={props.imgChange}
                cardRepository={props.cardRepository}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Visitor;
