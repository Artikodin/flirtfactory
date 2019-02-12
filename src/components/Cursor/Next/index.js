/* eslint-disable */

import React from "react";
import { throttle } from "throttle-debounce";

import WordBorder from "./WordBorder";
import { InnerDot, InnerBackground } from "./element";

class Next extends React.Component {
  isRunning = false;
  isMouseDown = false;

  target = { x: 0, y: 0 };

  outside = React.createRef();
  outsidePos = { x: 0, y: 0 };

  inner = React.createRef();
  innerPos = { x: 0, y: 0 };

  innerBg = React.createRef();

  animationHold = {
    start: false,
    direction: 1,
    progress: 0,
    easing: 0.3
  };

  handleMouseMove = throttle(10, e => {
    this.target = {
      x: e.clientX,
      y: e.clientY
    };

    if (!this.isRunning) {
      window.requestAnimationFrame(this.update);
    }
  });

  handleMouseDown = () => {
    this.animationHold.direction = 1;
    if (!this.animationHold.start) {
      const matrix = getComputedStyle(this.innerBg.current).getPropertyValue(
        "transform"
      );
      const scale = parseFloat(matrix.split(",")[3]);
      this.animationHold.progress = scale;
      this.innerBg.current.style.animation = "paused";

      this.animationHold.start = true;
      this.updateHold();
    }
  };

  handleMouseUp = () => {
    this.animationHold.direction = -1;
  };

  handleHolded = () => {
    console.log("test");
  };

  componentDidMount() {
    addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    addEventListener("mousedown", this.handleMouseDown, {
      passive: true
    });
    addEventListener("mouseup", this.handleMouseUp, {
      passive: true
    });
  }

  componentWillUnmount() {
    removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    removeEventListener("mousedown", this.handleMouseDown, {
      passive: true
    });
    removeEventListener("mouseup", this.handleMouseUp, {
      passive: true
    });
    cancelAnimationFrame(this.updateHold);
    cancelAnimationFrame(this.update);
  }

  update = () => {
    this.isRunning = true;

    const innerEase = 0.9;
    const outsideEase = 0.25;

    this.outsidePos.x += (this.target.x - this.outsidePos.x) * outsideEase;
    this.outsidePos.y += (this.target.y - this.outsidePos.y) * outsideEase;

    this.outside.current.style.transform = `translate3d(${
      this.outsidePos.x
    }px, ${this.outsidePos.y}px,0)`;

    this.innerPos.x += (this.target.x - this.innerPos.x) * innerEase;
    this.innerPos.y += (this.target.y - this.innerPos.y) * innerEase;

    this.inner.current.style.transform = `translate3d(${this.innerPos.x}px, ${
      this.innerPos.y
    }px,0)`;

    if (
      Math.abs(this.outsidePos.x - this.target.x) > 0.1 ||
      Math.abs(this.outsidePos.y - this.target.y) > 0.1 ||
      Math.abs(this.innerPos.x - this.target.x) > 0.1 ||
      Math.abs(this.innerPos.y - this.target.y) > 0.1
    ) {
      window.requestAnimationFrame(this.update);
    } else {
      this.isRunning = false;
    }
  };

  updateHold = () => {
    this.animationHold.easing =
      this.animationHold.easing + 0.05 * this.animationHold.direction;
    if (this.animationHold.easing < 0.3) {
      this.animationHold.easing = 0.3;
    }

    this.animationHold.progress =
      this.animationHold.progress +
      0.02 * this.animationHold.easing * this.animationHold.direction;
    this.innerBg.current.style.transform = `translate3d(-50%, -50%, 0) scale(${
      this.animationHold.progress
    })`;

    if (this.animationHold.progress > 0.3 && this.animationHold.progress < 1) {
      requestAnimationFrame(this.updateHold);
    } else {
      this.animationHold.start = false;
    }

    if (this.animationHold.progress < 0.3) {
      this.innerBg.current.style.animation = "eBAAL 2s infinite ease-in-out";
    }

    if (this.animationHold.progress > 1) {
      this.handleHolded();
    }
  };

  render() {
    return (
      <>
        <WordBorder ref={this.outside}>
          suivant suivant suivant suivant suivant
        </WordBorder>
        <InnerDot ref={this.inner}>
          <InnerBackground ref={this.innerBg} />
        </InnerDot>
      </>
    );
  }
}

export default Next;
