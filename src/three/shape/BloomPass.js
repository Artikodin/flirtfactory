/* eslint-disable */

import { Component } from "react";
import { BloomEffect } from "postprocessing";

import { Context } from "./Renderer";

class BloomPass extends Component {
  static contextType = Context;

  componentDidMount() {
    this.context.addPass(new BloomEffect());
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default BloomPass;
