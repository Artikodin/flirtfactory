/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, Cursor } from "../../components";

const Lumieres = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor/>
    </Page>
  );
};

Lumieres.propTypes = {
  history: PropTypes.object.isRequired
};

export default Lumieres;
