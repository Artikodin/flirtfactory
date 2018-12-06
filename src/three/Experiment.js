import React, { Component } from "react";

import { Scene3D } from "./shape";

/* eslint-disable */

export default class Experiment extends Component {
  render() {
    return (
      <div>
        <Scene3D />
      </div>
    );
  }
}

Experiment.displayName = "Experiment";
