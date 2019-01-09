/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import { Page, Cursor } from "../../components";

const Renaissance = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor/>
    </Page>
  );
};

Renaissance.propTypes = {
  history: PropTypes.object.isRequired
};

export default Renaissance;
