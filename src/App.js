import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Page/Home";
import Summary from "./Components/Summary/Summary";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shows/:id">
            <Summary />
          </Route>
        </Switch>

    </Router>
    </>
  );
}

export default App;
