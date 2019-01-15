/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, AudioVisualizer } from "../../components";

const BelleEpoque = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <AudioVisualizer />
    </Page>
  );
};

BelleEpoque.propTypes = {
  history: PropTypes.object.isRequired
};

export default BelleEpoque;
