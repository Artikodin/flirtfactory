import React from "react";
import PropTypes from "prop-types";

import { DrawerNav } from "./element";

const DrawerHeader = ({ children }) => (
  <DrawerNav id="Drawer-nav">
    <ul>
      <li className="active">INDEX</li>
      <li>ABOUT</li>
    </ul>
    <div>{children}</div>
  </DrawerNav>
);

DrawerHeader.propTypes = {
  children: PropTypes.node
};

DrawerHeader.defaultProps = {
  children: ""
};

export default DrawerHeader;
