import React from "react";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import { Wrapper } from "./element";

const Drawer = ({ children, showed }) => (
  <PoseGroup>
    {showed && <AnimatedWrapper key="wrapper">{children}</AnimatedWrapper>}
  </PoseGroup>
);

Drawer.propTypes = {
  children: PropTypes.node,
  showed: PropTypes.bool.isRequired
};

Drawer.defaultProps = {
  children: ""
};

const AnimatedWrapper = posed(Wrapper)({
  enter: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: 300,
    opacity: 0
  }
});

export default Drawer;
