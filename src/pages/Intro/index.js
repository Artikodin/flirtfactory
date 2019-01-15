import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { Page, SyncDragAndDrop } from "../../components";

const Intro = () => (
  <Page backgroundColor="#c4e6f1">
    <BackgroundImage>
      <h1>Bonjour tu es sur la Flirt Factory</h1>
      <SyncDragAndDrop />
      {/* <Link to="/antiquite">Démarrer</Link> */}
    </BackgroundImage>
  </Page>
);

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
