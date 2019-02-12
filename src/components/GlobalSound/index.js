import React from "react";
import PropTypes from "prop-types";

import ReactHowler from "react-howler";

class GlobalSound extends React.Component {
  global = React.createRef();

  state = {
    playedOnce: true
  };

  static propTypes = {
    playing: PropTypes.bool,
    unlocked: PropTypes.bool,
    age: PropTypes.string,
    volume: PropTypes.number
  };

  static defaultProps = {
    playing: false,
    unlocked: false,
    age: "",
    volume: 1
  };

  componentDidMount = () => {
    this.mounted = true;
  };

  render() {
    const { playedOnce } = this.state;
    const { age, playing, unlocked, volume } = this.props;
    return (
      <>
        <ReactHowler
          src="./assets/sound/flirtfactory.mp3"
          loop
          preload
          html5
          volume={1}
          playing={playing}
        />
        <ReactHowler
          src={`./assets/sound/${age}ON.mp3`}
          loop
          preload
          html5
          volume={volume}
          playing={unlocked}
        />
        {unlocked === false && (
          <ReactHowler
            src="./assets/sound/SonOFF.mp3"
            volume={0.2}
            loop
            playing
          />
        )}
        {unlocked && playedOnce && (
          <>
            <ReactHowler
              src="./assets/sound/SonActivation.mp3"
              volume={0.4}
              autoplay={false}
              loop={false}
              onEnd={() =>
                this.setState({
                  playedOnce: false
                })
              }
            />
          </>
        )}
      </>
    );
  }
}

export default GlobalSound;
