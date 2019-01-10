import React from "react";
// import PropTypes from "prop-types";

import { Page, Cursor } from "../../components";

const Error = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor />
      <div>erreur 404</div>
    </Page>
  );
};

Error.propTypes = {
  // history: PropTypes.object.isRequired
};

export default Error;
