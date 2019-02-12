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
    age: PropTypes.string
  };

  static defaultProps = {
    playing: false,
    unlocked: false,
    age: ""
  };

  componentDidMount = () => {
    this.mounted = true;
  };

  render() {
    const { playedOnce } = this.state;
    const { age, playing, unlocked } = this.props;
    return (
      <>
        <ReactHowler
          src="./assets/sound/flirtfactory.mp3"
          loop
          preload
          html5
          volume={1}
          playing={playing}
          // ref={ref => (this.global = ref)}
        />
        <ReactHowler
          src={`./assets/sound/${age}ON.mp3`}
          loop
          preload
          html5
          volume={0.8}
          playing={unlocked}
        />
        {unlocked === false && (
          <ReactHowler
            src="./assets/sound/SonOFF.mp3"
            volume={0.3}
            loop
            playing
          />
        )}
        {unlocked && playedOnce && (
          <>
            <ReactHowler
              src="./assets/sound/SonActivation.mp3"
              volume={0.6}
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
