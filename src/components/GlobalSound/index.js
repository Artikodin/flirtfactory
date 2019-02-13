import React from "react";
import PropTypes from "prop-types";

import { Howl, Howler } from "howler";

class GlobalSound extends React.Component {
  global = React.createRef();

  state = {
    flirtfactoryPlayed: true,
    ageOnPlayed: true,
    offPlayed: true,
    activationPlayed: true
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

  soundFlirtFactory = new Howl({
    src: "./assets/sound/flirtfactory.mp3",
    loop: true,
    preload: true,
    html5: true,
    volume: 1,
    playing: this.props.playing,
    onplay: () =>
      this.setState({
        flirtfactoryPlayed: false
      })
  });

  soundOff = new Howl({
    src: "./assets/sound/SonOFF.mp3",
    loop: true,
    preload: true,
    html5: true,
    volume: 0.2,
    onplay: () =>
      this.setState({
        offPlayed: false
      })
  });

  soundActivation = new Howl({
    src: "./assets/sound/SonActivation.mp3",
    loop: false,
    autoplay: false,
    preload: true,
    html5: true,
    volume: 0.4,
    onplay: () =>
      this.setState({
        activationPlayed: false
      })
  });

  soundAgeOn = new Howl({
    src: `./assets/sound/${this.props.age}ON.mp3`,
    loop: true,
    preload: true,
    html5: true,
    volume: this.props.volume,
    onplay: () =>
      this.setState({
        ageOnPlayed: false
      })
  });

  componentDidMount = () => {
    window.addEventListener("mousemove", this.playSound);
    this.mounted = true;
  };

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.playSound);
    this.mounted = false;
    Howler.unload();
  };

  playSound = () => {
    const { unlocked } = this.props;
    const {
      flirtfactoryPlayed,
      ageOnPlayed,
      activationPlayed,
      offPlayed
    } = this.state;
    if (flirtfactoryPlayed) {
      this.soundFlirtFactory.play();
    }
    if (ageOnPlayed && unlocked) {
      this.soundAgeOn.play();
    }
    if (activationPlayed && unlocked) {
      this.soundActivation.play();
    }
    if (offPlayed && unlocked === false) {
      this.soundOff.play();
    }
  };

  render() {
    // const { playedOnce } = this.state;
    // const { age, playing, unlocked, volume } = this.props;
    return (
      <>
        {/* <ReactHowler
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
        )} */}
      </>
    );
  }
}

export default GlobalSound;
