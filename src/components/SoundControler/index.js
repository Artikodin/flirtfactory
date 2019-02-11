import React from "react";

import soundManager from "soundmanager2";

/* eslint-disable */

class SoundControler extends React.Component {

  componentDidMounted = () => {
    soundManager.setup({
      url: '/path/to/swf-files/',
      onready: function() {
        var mySound = soundManager.createSound({
          id: 'ambiantSound',
          url: '/path/to/an.mp3'
        });
        mySound.play();
      },
      ontimeout: function() {
        // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
      }
    });
  };
  
  render() {
    return <div>bonjour</div>;
  }
}

export default SoundControler;
