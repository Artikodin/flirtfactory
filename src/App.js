import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Page1, Page2 } from "./pages";

const App = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
