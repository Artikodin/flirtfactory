/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, NavBar } from "../../components";

const Page1 = ({ history }) => {
  // const pushInHistory = () => {
  //   history.push("/page2");
  // };

  return (
    <Page backgroundColor="#c4e6f1">
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
      {/* <TextContext.Consumer>
        {value => (
          <React.Fragment>
            <h1>{value.epoques[0].name}</h1>
            <p>{value.epoques[0].description}</p>
            <button type="button" onClick={pushInHistory}>
              to page 2
            </button>
          </React.Fragment>
        )}
      </TextContext.Consumer> */}
    </Page>
  );
};

Page1.propTypes = {
  history: PropTypes.object.isRequired
};

export default Page1;
