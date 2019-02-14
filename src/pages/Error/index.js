import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Page } from "../../components";

const Error = ({ history }) => (
  <Page history={history} backgroundColor="#c4e6f1">
    <ErrorWrapper id="error">
      <img src="./assets/img/404.jpg" alt="flirt factory error" />
    </ErrorWrapper>
  </Page>
);

Error.propTypes = {
  history: PropTypes.object.isRequired
};

export default Error;

export const ErrorWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: red;
  position: relative;

  img {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media screen and (max-aspect-ratio: 1920/1080) {
      height: 100%;
    }
    @media screen and (min-aspect-ratio: 1920/1080) {
      width: 100%;
    }
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
  }
`;
