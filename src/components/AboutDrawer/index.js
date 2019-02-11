import React from "react";
import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";

import { Wrapper, ButtonAboutClose } from "./element";
import { AboutDrawerContent } from "../index";

const AboutDrawer = ({ showed, click }) => (
  <PoseGroup id="AboutDrawer">
    {showed && (
      <AnimatedWrapper key="wrapper">
        <ButtonAboutClose onClick={() => click()}>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-1830.000000, -70.000000)" fill="#ffffff">
              <g id="Group-6" transform="translate(1790.000000, 30.000000)">
                <g id="Croix" transform="translate(40.000000, 40.000000)">
                  <polygon points="16.8781393 2.98427949e-13 19.4419073 2.563768 2.563768 19.4419073 3.0375702e-13 16.8781393" />
                  <polygon points="19.4419073 16.8781393 16.8781393 19.4419073 3.0908609e-13 2.563768 2.563768 2.89546165e-13" />
                </g>
              </g>
            </g>
          </svg>
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
