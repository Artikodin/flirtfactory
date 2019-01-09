/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, Cursor } from "../../components";

const Intro = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor/>
    </Page>
  );
};

Intro.propTypes = {
  history: PropTypes.object.isRequired
};

export default Intro;