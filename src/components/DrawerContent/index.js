import React from "react";
import PropTypes from "prop-types";

import { DrawerHeader, TextContext } from "../index";
import { DrawerLayout, MainContent, MainContentLayout } from "./element";

import { Markup } from "interweave";

/* eslint-disable */

const DrawerContent = ({ number }) => (
  <DrawerLayout id="Drawer-layout">
    <DrawerHeader />
    <MainContentLayout id="MainContentLayout">
      <TextContext.Consumer>
        {value => (
          <MainContent id="MainContent">
            <h2 id="MainContent-date">{value.epoques[number].date}</h2>
            <h1 id="MainContent-title">{value.epoques[number].name}</h1>
            <div id="MainContent-text">
              <Markup content={value.epoques[number].description} />
            </div>
            <div id="MainContent-gallery">
              <figure className="ContentImg">
                <img
                  src="../assets/img/epoques/Antiquite.jpg"
                  alt="Antiquité"
                />
                <figcaption>Antiquité</figcaption>
              </figure>
              <figure className="ContentImg">
                <img
                  src="../assets/img/epoques/Antiquite2.jpg"
                  alt="Antiquité"
                />
                <figcaption>Antiquité</figcaption>
              </figure>
            </div>
          </MainContent>
        )}
      </TextContext.Consumer>
    </MainContentLayout>
  </DrawerLayout>
);

DrawerContent.propTypes = {
  number: PropTypes.number
};

DrawerContent.defaultProps = {
  number: 0
};

export default DrawerContent;
