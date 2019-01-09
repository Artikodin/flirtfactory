import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { Page, Cursor } from "../../components";

const Intro = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor />
      <BackgroundImage>
        <h1>Bonjour tu es sur la Flirt Factory</h1>
        <Link to="/antiquite">Démarrer</Link>
      </BackgroundImage>
    </Page>
  );
};

Intro.propTypes = {
  // history: PropTypes.object.isRequired
};

export default Intro;

export const BackgroundImage = styled.div`
  background-image: url("./assets/img/start.jpg");
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
