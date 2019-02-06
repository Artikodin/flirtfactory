import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

const PhoneCube = ({ icon }) => (
  <Wrapper>
    <img src={`./assets/ui/${icon}.svg`} alt="" />
  </Wrapper>
);

PhoneCube.propTypes = {
  icon: PropTypes.string.isRequired
};

export default PhoneCube;
