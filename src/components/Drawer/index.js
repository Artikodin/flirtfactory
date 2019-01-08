import React from "react";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import { Wrapper } from "./element";

const Drawer = ({ children, showed }) => (
  <PoseGroup id="Drawer">
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
    opacity: 1,
    transition: {
      duration: 500,
      ease: "easeIn"
    }
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 500,
      ease: "easeOut"
    }
  }
});

export default Drawer;
