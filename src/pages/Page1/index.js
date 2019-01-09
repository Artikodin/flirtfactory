/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";


import { Page, Cursor } from "../../components";

const Page1 = () => {
  return (
    <Page backgroundColor="#c4e6f1">
      <Cursor/>
    </Page>
  );
};

Page1.propTypes = {
  history: PropTypes.object.isRequired
};

export default Page1;