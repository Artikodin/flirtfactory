import React from "react";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import { Wrapper } from "./element";

const Page = ({ children, showed }) => (
  <PoseGroup>
    {showed && <AnimatedWrapper key="wrapper">{children}</AnimatedWrapper>}
  </PoseGroup>
);

Page.propTypes = {
  children: PropTypes.node,
  showed: PropTypes.bool
};

Page.defaultProps = {
  children: "",
  showed: false
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

export default Page;
