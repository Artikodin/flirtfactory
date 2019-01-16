import React from "react";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import { Wrapper } from "./element";

const AboutDrawer = ({ children, showed }) => (
  <PoseGroup id="AboutDrawer">
    {showed && (
      <AnimatedWrapper key="wrapper">
        test test
        {children}
      </AnimatedWrapper>
    )}
  </PoseGroup>
);

AboutDrawer.propTypes = {
  children: PropTypes.node,
  showed: PropTypes.bool.isRequired
};

AboutDrawer.defaultProps = {
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

export default AboutDrawer;
