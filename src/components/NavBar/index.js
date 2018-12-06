import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";
import NavItem from "./NavItem";

const NavBar = ({ children }) => <Wrapper>{children}</Wrapper>;

NavBar.NavItem = NavItem;

NavBar.propTypes = {
  children: PropTypes.node
};

NavBar.defaultProps = {
  children: ""
};

export default NavBar;
