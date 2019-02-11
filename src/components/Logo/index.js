import React from "react";

import { LogoWrapper } from "./element";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  path: "./assets/anim/logo.json",
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
