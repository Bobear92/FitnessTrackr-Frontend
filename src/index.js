import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  Home,
  Activities,
  Routines,
  Login,
  Register,
  UserInfo,
} from "./components";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, SetCurrentUser] = useState({});
  // const [username, setUsername] = useState("");

  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }

  useEffect(async () => {
    const data = await getCurrentUser();
    SetCurrentUser(data.data);
  }, []);

  return (
    <Router>
      <div id="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/register">
            <Register setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/my-info">
            <UserInfo />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/routines">
            <Routines />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
