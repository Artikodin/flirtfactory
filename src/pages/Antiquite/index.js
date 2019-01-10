/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, InterestTag } from "../../components";

const Antiquite = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <InterestTag xPos={"200px"} yPos={"200px"}>Antiquite</InterestTag>
    </Page>
  );
};

Antiquite.propTypes = {
  history: PropTypes.object.isRequired
};

export default Antiquite;
