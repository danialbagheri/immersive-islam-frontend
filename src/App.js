import React, { Component } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import HomePage from "./pages/HomePage";
import Videos from "./pages/Videos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleVideo from "./pages/SingleVideo";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";

class App extends Component {
  render() {
    const history = createBrowserHistory();
    // enable support for non HTML5 browsers (NO history api)
    const supportsHistory = "pushState" in window.history;
    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" history={history} component={HomePage} exact />
            <Route
              path={"/video/watch/:youtubeId&:vidId"}
              render={props => <SingleVideo {...props} />}
            />
            <Route
              path={"/videos/:type"}
              render={props => <Videos {...props} />}
            />
            <Route component={PageNotFound} />
          </Switch>
          <footer className="footer">
            <p>All rights reserved. 2019</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
