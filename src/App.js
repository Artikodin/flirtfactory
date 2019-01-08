/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import GlobalStyle from "./theme/global";
import { Page1, Page2, Page3 } from "./pages";
import { TextProvider, NavBar, Logo, ButtonDrawer } from "./components";

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <TextProvider>
      <Router>
        <div>
          <Logo />
          <ButtonDrawer />
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/page3" component={Page3} />
          </Switch>
          <NavBar>
            <NavBar.NavItem
              imgSrc="./assets/img/img1.jpeg"
              pathTo="/"
            >
              Antiquité
            </NavBar.NavItem>
            <NavBar.NavItem
              imgSrc="./assets/img/img2.jpeg"
              pathTo="/page2"
            >
              Moyen-age
            </NavBar.NavItem>
            <NavBar.NavItem
              imgSrc="./assets/img/img8.jpeg"
              pathTo="/page3"
            >
              Renaissance
            </NavBar.NavItem>
            <NavBar.NavItem
              imgSrc="./assets/img/img3.jpeg"
              pathTo="/page3"
            >
              Lumière
            </NavBar.NavItem>
            <NavBar.NavItem
              imgSrc="./assets/img/img4.jpeg"
              pathTo="/page3"
            >
              Belle-époque
            </NavBar.NavItem>
            <NavBar.NavItem
              imgSrc="./assets/img/img5.jpeg"
              pathTo="/page3"
            >
              Moderne
            </NavBar.NavItem>
            <NavBar.NavItem
              imgSrc="./assets/img/img6.gif"
              pathTo="/page3"
            >
              Ère-numérique
            </NavBar.NavItem>
            <NavBar.NavItem
              imgSrc="./assets/img/img7.jpeg"
              pathTo="/page3"
            >
              Futur
            </NavBar.NavItem>
          </NavBar>
        </div>
      </Router>
    </TextProvider>
  </React.Fragment>
);

export default hot(module)(App);
