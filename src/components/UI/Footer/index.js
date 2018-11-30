import React from "react";
import PropTypes from "prop-types";

import { Footer } from "./element";

const Footer = () => (
  <Footer>

  </Footer>
);

Page.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
};

Page.defaultProps = {
  children: "",
  backgroundColor: "white"
};

export default Footer;
