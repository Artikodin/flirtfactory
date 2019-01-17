import React from "react";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import { Wrapper, ButtonAboutClose } from "./element";
import { AboutDrawerContent } from "../index";

const AboutDrawer = ({ showed, click }) => (
  <PoseGroup id="AboutDrawer">
    {showed && (
      <AnimatedWrapper key="wrapper">
        <ButtonAboutClose onClick={click}>
          <img src="../assets/ui/Close.svg" alt="close about" />
        </ButtonAboutClose>
        <AboutDrawerContent />
      </AnimatedWrapper>
    )}
  </PoseGroup>
);

AboutDrawer.propTypes = {
  showed: PropTypes.bool.isRequired,
  click: PropTypes.func
};

AboutDrawer.defaultProps = {
  click: () => {}
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
