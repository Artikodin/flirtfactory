import React from "react";
import PropTypes from "prop-types";

import { ButtonIAWrapper } from "./element";

const ButtonIA = ({ soundSrc, soundSrc2 }) => {
  const phone = React.createRef();

  const handleClick = () => {
    phone.current.style.animationPlayState = "paused";
    const audio = new Audio(soundSrc);
    const audio2 = new Audio(soundSrc2);
    audio.play();
    audio.onended = () => {
      audio2.play();
    };
  };

  return (
    <ButtonIAWrapper onClick={() => handleClick()}>
      <img ref={phone} src="./assets/ui/Phone.svg" alt="Open Drawer" />
    </ButtonIAWrapper>
  );
};

ButtonIA.propTypes = {
  soundSrc: PropTypes.string,
  soundSrc2: PropTypes.string
};

ButtonIA.defaultProps = {
  soundSrc: "./assets/sound/intro1.wav",
  soundSrc2: "./assets/sound/intro2.wav"
};

export default ButtonIA;
