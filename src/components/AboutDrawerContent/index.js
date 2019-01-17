import React from "react";
import PropTypes from "prop-types";

/* eslint-disable */

import { DrawerLayout, AboutLayout, About } from "./element";

const AboutDrawerContent = () => (
  <DrawerLayout id="Drawer-layout">
    <div class="line line__top" />
    <div class="line line__bottom" />
    <div class="line line__right" />
    <div class="line line__left" />
    <marquee scrollamount="10">
      About About About About About About About About About About About About About About About
      About About About About About About About About About About About About About About About
      About About About About About About About About About About About About About About About
      About About About About About About About About About About About About About About About
      About About About About About About About About About About About About About About About
      About About About About About About About About About About About About About About About
      About About About About About About About About About About About About About About About
    </marquee>
    <AboutLayout id="About-layout">
      <About id="About">
        <h2 id="About-title">About</h2>
        <div id="About-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            turpis non lorem vehicula pharetra. Pellentesque maximus enim sed
            massa placerat, ut hendrerit sem iaculis. Nunc vel erat egestas,
            interdum nunc vitae, sagittis justo. Aliquam sit amet ante
            scelerisque eros faucibus tempus ac sit amet tellus. Nulla eget
            felis et lacus aliquam iaculis nec a lacus. Morbi vel est ut libero
            ultricies mollis. Sed facilisis iaculis venenatis. Cras id laoreet
            sem. Curabitur molestie purus dui, at commodo leo sodales sed.
          </p>
        </div>
      </About>
    </AboutLayout>
  </DrawerLayout>
);

AboutDrawerContent.propTypes = {
  number: PropTypes.number
};

AboutDrawerContent.defaultProps = {
  number: 0
};

export default AboutDrawerContent;
