import "./App.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Intro from "./pages/intro/Intro";
import Visitor from "./pages/visitor/visitor";
import Todo from "./pages/todo/Todo";
import Youtube from "./pages/youtube/Youtube";
import YoutubeMain from "./pages/youtube/youtubeMain";
import YoutubeDetail from "./pages/youtube/youtubeDetail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import booting from "./images/booting.png";

function App(props) {
  const youtubeKey = props.youtube;

  const startBooting = document.getElementsByClassName("bootingImg");

  // useEffect(() => {
  //   setTimeout(() => {
  //     startBooting[0].classList.add("hidden");
  //   }, 2500);
  // }, [startBooting]);

  // console.log(performance.navigation.type);
  // useEffect(() => {
  //   if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  //     window.location.href = "/";
  //   }
  // }, []);
  // console.log(props.authService, "app");
  return (
    <div className="App">
      {/* <img src={booting} alt="이미지" className="bootingImg" /> */}
      <Router>
        <Switch>
          <Route exact path="/youtubeMain">
            <YoutubeMain youtubeKey={youtubeKey} />
          </Route>
          <Route exact path="/youtubeDetail">
            <YoutubeDetail youtubeKey={youtubeKey} />
          </Route>
          <>
            <div className="container">
              <Nav></Nav>
              <div className="main">
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/intro">
                  <Intro />
                </Route>
                <Route path="/visitor">
                  <Visitor authService={props.authService} />
                </Route>
                <Route exact path="/todo">
                  <Todo />
                </Route>
                <Route exact path="/youtube">
                  <Youtube />
                </Route>
              </div>
            </div>
            <Footer />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
