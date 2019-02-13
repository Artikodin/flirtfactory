import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";

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
  TextProvider,
  ProgressProvider,
  Logo,
  GlobalSound,
  TransitionSwitch
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
                    <Logo />
                    <GlobalSound />
                    <TransitionSwitch location={location}>
                      <Route exact path="/" component={Intro} />
                      <Route exact path="/antiquite" component={Antiquite} />
                      <Route
                        exact
                        path="/belleepoque"
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
                      <Route exact path="/moyenage" component={MoyenAge} />
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
                    </TransitionSwitch>
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
