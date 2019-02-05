import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import { TransitionGroup } from "react-transition-group";

import GlobalStyle from "./theme/global";
import {
  Intro,
  Antiquite,
  BelleEpoque,
  EreNumerique,
  Futur,
  Error,
  Lumieres,
  Moderne,
  MoyenAge,
  Renaissance,
  FlirtFactory,
  Test
} from "./pages";

import { Cursor, TextProvider, ProgressProvider, Logo } from "./components";

const App = () => (
  <>
    <GlobalStyle />
    <TextProvider>
      <ProgressProvider>
        <Router>
          <>
            <Cursor />
            <Logo />
            <TransitionGroup>
              <Switch>
                <Route exact path="/" component={Intro} />
                <Route exact path="/antiquite" component={Antiquite} />
                <Route exact path="/belle-epoque" component={BelleEpoque} />
                <Route exact path="/ere-numerique" component={EreNumerique} />
                <Route exact path="/futur" component={Futur} />
                <Route exact path="/lumieres" component={Lumieres} />
                <Route exact path="/moderne" component={Moderne} />
                <Route exact path="/moyen-age" component={MoyenAge} />
                <Route exact path="/renaissance" component={Renaissance} />
                <Route exact path="/flirtfactory" component={FlirtFactory} />
                <Route exact path="/test" component={Test} />
                <Route path="*" component={Error} />
              </Switch>
            </TransitionGroup>
          </>
        </Router>
      </ProgressProvider>
    </TextProvider>
  </>
);

export default hot(module)(App);
