import React from "react";

import { LogoWrapper } from "./element";

import Lottie from "react-lottie";
import * as LogoAnim from "../../assets/lottie/logo.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LogoAnim.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Logo = () => (
  <LogoWrapper>
    <Lottie
      options={defaultOptions}
      height="auto"
      width="auto"
      alt="logo flirt factory"
    />
  </LogoWrapper>
);

export default Logo;
