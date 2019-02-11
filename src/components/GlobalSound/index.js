import React from "react";
import PropTypes from "prop-types";

import ReactHowler from "react-howler";

class GlobalSound extends React.Component {
  state = {
    playedOnce: false
  };

  static propTypes = {
    playing: PropTypes.bool,
    unlocked: PropTypes.bool,
    age: PropTypes.string
  };

  static defaultProps = {
    playing: false,
    unlocked: false,
    age: ""
  };

  render() {
    const { playing, age, unlocked } = this.props;
    console.log(playing + " " + age + " " + unlocked);
    return (
      <>
        <ReactHowler
          src="./assets/sound/flirtfactory.mp3"
          preload
          html5
          volume={0.3}
          playing={playing}
        />
        {unlocked === false && (
          <ReactHowler src="./assets/sound/SonOFF.mp3" volume={0.4} playing />
        )}
        {unlocked && (
          <>
            <ReactHowler
              src="./assets/sound/SonActivation.mp3"
              volume={0.7}
              autoplay={false}
              loop={false}
              // playing={unlocked}
              onend={() => console.log("ok")}
            />
            <ReactHowler
              src={`./assets/sound/${age}ON.mp3`}
              preload
              html5
              volume={0.3}
              playing={playing}
            />
          </>
        )}
      </>
    );
  }
}

export default GlobalSound;
