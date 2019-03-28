/* eslint-disable react/destructuring-assignment */
import React from "react";

// import { Howl } from "howler";
// import FlirtFactoryAudio from "../../assets/sound/flirtfactory.mp3";

class GlobalSound extends React.Component {
  state = {
    flirtfactoryPlayed: true
  };

  // soundFlirtFactory = new Howl({
  //   src: FlirtFactoryAudio,
  //   loop: true,
  //   preload: true,
  //   html5: true,
  //   volume: 1,
  //   playing: true
  // });

  componentDidMount = () => {
    window.addEventListener("mousemove", this.playSound);
    this.mounted = true;
  };

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.playSound);
    this.mounted = false;
    this.soundFlirtFactory.unload();
  };

  playSound = () => {
    const { flirtfactoryPlayed } = this.state;
    if (flirtfactoryPlayed) {
      // this.soundFlirtFactory.play();
      this.setState({
        flirtfactoryPlayed: false
      });
    }
  };

  render() {
    return <></>;
  }
}

export default GlobalSound;
