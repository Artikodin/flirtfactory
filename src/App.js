import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import posed, { PoseGroup } from "react-pose";

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
  TransitionRoute
} from "./components";

class App extends React.Component {
  render() {
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
                    <PoseGroup>
                      <RoutesContainer key={location.key}>
                        <Switch location={location}>
                          <TransitionRoute exact path="/" component={Intro} />
                          <TransitionRoute
                            exact
                            path="/antiquite"
                            component={Antiquite}
                          />
                          <TransitionRoute
                            exact
                            path="/belle-epoque"
                            component={BelleEpoque}
                          />
                          <TransitionRoute
                            exact
                            path="/contemporain"
                            component={Contemporain}
                          />
                          <TransitionRoute
                            exact
                            path="/futur"
                            component={Futur}
                          />
                          <TransitionRoute
                            exact
                            path="/lumieres"
                            component={Lumieres}
                          />
                          <TransitionRoute
                            exact
                            path="/moderne"
                            component={Moderne}
                          />
                          <TransitionRoute
                            exact
                            path="/moyen-age"
                            component={MoyenAge}
                          />
                          <TransitionRoute
                            exact
                            path="/renaissance"
                            component={Renaissance}
                          />
                          <TransitionRoute
                            exact
                            path="/flirtfactory"
                            component={FlirtFactory}
                          />
                          <TransitionRoute
                            exact
                            path="/test"
                            component={Test}
                          />
                          <TransitionRoute path="*" component={Error} />
                        </Switch>
                      </RoutesContainer>
                    </PoseGroup>
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

// const TransitionRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => <Component {...props} />} />
// );

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 1 }
});

export default hot(module)(App);
