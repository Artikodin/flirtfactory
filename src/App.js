import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

import {
  About,
  Cursor,
  TextProvider,
  ProgressProvider,
  NavBar,
  Logo,
  ProgressContext
} from "./components";

const App = () => (
  <>
    <GlobalStyle />
    <TextProvider>
      <ProgressProvider>
        <Router>
          <>
            <ProgressContext.Consumer>
              {({ ages }) => (
                <>
                  <Cursor />
                  <Logo />
                  <TransitionGroup>
                    <Switch>
                      <Route exact path="/" component={Intro} />
                      <Route exact path="/antiquite" component={Antiquite} />
                      <Route
                        exact
                        path="/belle-epoque"
                        component={BelleEpoque}
                      />
                      <Route
                        exact
                        path="/ere-numerique"
                        component={EreNumerique}
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
                  </TransitionGroup>
                  <NavBar>
                    <NavBar.NavItem
                      imgSrc={
                        ages.antiquite
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/antiquite"
                    >
                      antiquité
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.moyenage
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/moyen-age"
                    >
                      moyen-âge
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.renaissance
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/renaissance"
                    >
                      renaissance
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.lumieres
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/lumieres"
                    >
                      lumière
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.belleepoque
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/belle-epoque"
                    >
                      belle-époque
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.moderne
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/moderne"
                    >
                      moderne
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.erenumerique
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/ere-numerique"
                    >
                      ère-numérique
                    </NavBar.NavItem>
                    <NavBar.NavItem
                      imgSrc={
                        ages.futur
                          ? "./assets/img/img1.jpeg"
                          : "./assets/img/img2.jpeg"
                      }
                      pathTo="/futur"
                    >
                      futur
                    </NavBar.NavItem>
                  </NavBar>
                  <About />
                </>
              )}
            </ProgressContext.Consumer>
          </>
        </Router>
      </ProgressProvider>
    </TextProvider>
  </>
);

export default hot(module)(App);
