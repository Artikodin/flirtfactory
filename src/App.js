import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

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
  FlirtFactory
} from "./pages";
import {
  About,
  Cursor,
  TextProvider,
  ProgressProvider,
  NavBar,
  Logo
} from "./components";

const App = () => (
  <>
    <GlobalStyle />
    <TextProvider>
      <ProgressProvider>
        <Router>
          <>
            <Cursor />
            <Logo />
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
              <Route path="*" component={Error} />
            </Switch>
            <NavBar>
              <NavBar.NavItem
                imgSrc="./assets/img/img1.jpeg"
                pathTo="/antiquite"
              >
                antiquité
              </NavBar.NavItem>
              <NavBar.NavItem
                imgSrc="./assets/img/img2.jpeg"
                pathTo="/moyen-age"
              >
                moyen-âge
              </NavBar.NavItem>
              <NavBar.NavItem
                imgSrc="./assets/img/img8.jpeg"
                pathTo="/renaissance"
              >
                renaissance
              </NavBar.NavItem>
              <NavBar.NavItem
                imgSrc="./assets/img/img3.jpeg"
                pathTo="/lumieres"
              >
                lumière
              </NavBar.NavItem>
              <NavBar.NavItem
                imgSrc="./assets/img/img4.jpeg"
                pathTo="/belle-epoque"
              >
                belle-époque
              </NavBar.NavItem>
              <NavBar.NavItem imgSrc="./assets/img/img5.jpeg" pathTo="/moderne">
                moderne
              </NavBar.NavItem>
              <NavBar.NavItem
                imgSrc="./assets/img/img6.gif"
                pathTo="/ere-numerique"
              >
                ère-numérique
              </NavBar.NavItem>
              <NavBar.NavItem imgSrc="./assets/img/img7.jpeg" pathTo="/futur">
                futur
              </NavBar.NavItem>
            </NavBar>
            <About />
          </>
        </Router>
      </ProgressProvider>
    </TextProvider>
  </>
);

export default hot(module)(App);
