import React from "react";
import PropTypes from "prop-types";

import { Page, TextContext, NavBar } from "../../components";

const Page1 = ({ history }) => {
  const pushInHistory = () => {
    history.push("/page2");
  };

  return (
    <Page backgroundColor="#c4e6f1">
      <NavBar>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=0"
          pathTo="/"
        >
          Antiquité
        </NavBar.NavItem>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=1"
          pathTo="/page2"
        >
          Moyen-age
        </NavBar.NavItem>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=2"
          pathTo="/page3"
        >
          Renaissance
        </NavBar.NavItem>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=3"
          pathTo="/page3"
        >
          Lumière
        </NavBar.NavItem>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=4"
          pathTo="/page3"
        >
          Belle-époque
        </NavBar.NavItem>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=5"
          pathTo="/page3"
        >
          Moderne
        </NavBar.NavItem>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=6"
          pathTo="/page3"
        >
          Ère-numérique
        </NavBar.NavItem>
        <NavBar.NavItem
          imgSrc="https://picsum.photos/250/140?image=7"
          pathTo="/page3"
        >
          Futur
        </NavBar.NavItem>
      </NavBar>
      <TextContext.Consumer>
        {value => (
          <React.Fragment>
            <h1>{value.epoques[0].name}</h1>
            <p>{value.epoques[0].description}</p>
            <button type="button" onClick={pushInHistory}>
              to page 2
            </button>
          </React.Fragment>
        )}
      </TextContext.Consumer>
    </Page>
  );
};

Page1.propTypes = {
  history: PropTypes.object.isRequired
};

export default Page1;
