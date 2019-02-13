/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

import { Howl } from "howler";

class SoundController extends React.Component {
  global = React.createRef();

  state = {
    ageOnPlayed: true,
    offPlayed: true,
    activationPlayed: true
  };

  static propTypes = {
    // playing: PropTypes.bool,
    unlocked: PropTypes.bool,
    age: PropTypes.string,
    volume: PropTypes.number
  };

  static defaultProps = {
    // playing: false,
    unlocked: false,
    age: "",
    volume: 1
  };

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
    volume: 0.3,
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
    this.soundAgeOn.unload();
    this.soundOff.unload();
  };

  playSound = () => {
    const { unlocked, age } = this.props;
    const { ageOnPlayed, activationPlayed, offPlayed } = this.state;
    if (ageOnPlayed && unlocked) {
      this.soundAgeOn.play();
    }
    if (activationPlayed && unlocked && age !== "futur") {
      this.soundActivation.play();
    }
    if (offPlayed && unlocked === false) {
      this.soundOff.play();
    }
  };

  render() {
    return <></>;
  }
}

export default SoundController;
