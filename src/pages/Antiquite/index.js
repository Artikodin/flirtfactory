/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, Cursor } from "../../components";

const Antiquite = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor />
    </Page>
  );
};

Antiquite.propTypes = {
  history: PropTypes.object.isRequired
};

export default Antiquite;
