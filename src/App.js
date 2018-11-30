/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./theme/global";
import { Page1, Page2, Page3 } from "./pages";

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
