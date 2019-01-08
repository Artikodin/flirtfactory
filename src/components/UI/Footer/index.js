import React from "react";
import PropTypes from "prop-types";

import { Footer } from "./element";

const Footer = () => <Footer>footer</Footer>;

Footer.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
};

Footer.defaultProps = {
  children: "",
  backgroundColor: "white"
};

export default Footer;
