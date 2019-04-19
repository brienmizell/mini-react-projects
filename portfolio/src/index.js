import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/App";
import Jokes from "./components/Jokes";
import MusicMaster from "./projects/music-master";
import DateCountdown from "./projects/date-countdown";
import RemindMe from "./projects/remind-me";
import Header from "./components/Header";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
      <Route
        path="/music-master"
        render={() => (
          <Header>
            <MusicMaster />
          </Header>
        )}
      />
      <Route
        path="/date-countdown"
        render={() => (
          <Header>
            <DateCountdown />
          </Header>
        )}
      />
      <Route
        path="/remind-me"
        render={() => (
          <Header>
            <RemindMe />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
