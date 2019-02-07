import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

import { Picto } from "../..";

const PhoneCube = ({ name }) => (
  <Wrapper>
    <Picto name={name} />
  </Wrapper>
);

PhoneCube.propTypes = {
  name: PropTypes.string.isRequired
};

export default PhoneCube;
