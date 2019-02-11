import React from "react";

const Sound = require("react-sound").default;

/* eslint-disable */

class GlobalSound extends React.Component {  
  render() {
    return (
      <Sound
        url="./assets/sound/flirtfactory.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={0}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
    />
    );
  }
}

export default GlobalSound;
