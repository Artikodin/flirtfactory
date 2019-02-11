import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import GlobalStyle from "./theme/global";
import {
  Intro,
  Antiquite,
  BelleEpoque,
  Contemporain,
  Futur,
  Error,
  Lumieres,
  Moderne,
  MoyenAge,
  Renaissance,
  FlirtFactory,
  Test
} from "./pages";

import {
  Cursor,
  TextProvider,
  ProgressProvider,
  Logo,
  Transition
} from "./components";

class App extends React.Component {
  state = {
    transition: false
  };

  render() {
    const { transition } = this.state;
    return (
      <>
        <GlobalStyle />
        <TextProvider>
          <ProgressProvider>
            <BrowserRouter>
              <Route
                render={({ location }) => (
                  <>
                    <Cursor />
                    <Logo />
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        timeout={5000}
                        classNames="transition"
                      >
                        <Switch location={location}>
                          <Route exact path="/" component={Intro} />
                          <Route
                            exact
                            path="/antiquite"
                            component={Antiquite}
                          />
                          <Route
                            exact
                            path="/belle-epoque"
                            component={BelleEpoque}
                          />
                          <Route
                            exact
                            path="/contemporain"
                            component={Contemporain}
                          />
                          <Route exact path="/futur" component={Futur} />
                          <Route exact path="/lumieres" component={Lumieres} />
                          <Route exact path="/moderne" component={Moderne} />
                          <Route exact path="/moyen-age" component={MoyenAge} />
                          <Route
                            exact
                            path="/renaissance"
                            component={Renaissance}
                          />
                          <Route
                            exact
                            path="/flirtfactory"
                            component={FlirtFactory}
                          />
                          <Route exact path="/test" component={Test} />
                          <Route path="*" component={Error} />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                    <Transition visible={transition} />
                  </>
                )}
              />
            </BrowserRouter>
          </ProgressProvider>
        </TextProvider>
      </>
    );
  }
}

export default hot(module)(App);
