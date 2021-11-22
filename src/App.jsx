import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Intro from "./pages/intro/Intro";
import Game from "./pages/game/Game";
import Todo from "./pages/todo/Todo";
import Youtube from "./pages/youtube/Youtube";
import YoutubeMain from "./pages/youtube/youtubeMain";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/youtubeMain" component={YoutubeMain}></Route>
          <>
            <div className="container">
              {/* <div className="navContainer"></div> */}
              <Nav></Nav>
              <div className="main">
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/intro" component={Intro}></Route>
                <Route exact path="/game" component={Game}></Route>
                <Route exact path="/todo" component={Todo}></Route>
                <Route exact path="/youtube" component={Youtube}></Route>
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
