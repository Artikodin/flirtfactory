import React from "react";
import PropTypes from "prop-types";

import { ButtonIAWrapper } from "./element";

const ButtonIA = ({ soundSrc }) => {
  const phone = React.createRef();

  const handleClick = () => {
    phone.current.style.animationPlayState = "paused";
    const audio = new Audio(soundSrc);
    audio.play();
  };

  return (
    <ButtonIAWrapper onClick={() => handleClick()}>
      <img ref={phone} src="./assets/ui/Phone.svg" alt="Open Drawer" />
    </ButtonIAWrapper>
  );
};

ButtonIA.propTypes = {
  soundSrc: PropTypes.string
};

ButtonIA.defaultProps = {
  soundSrc: "./assets/sound/intro1.wav"
};

export default ButtonIA;
