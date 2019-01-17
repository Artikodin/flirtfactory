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

  animationLongClick = null;

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
    this.isMouseDown = true;
    this.longClick();
  };

  handleMouseUp = () => {
    this.isMouseDown = false;
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    window.addEventListener("mousedown", this.handleMouseDown, {
      passive: true
    });
    window.addEventListener("mouseup", this.handleMouseUp, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    window.removeEventListener("mousedown", this.handleMouseDown, {
      passive: true
    });
    window.removeEventListener("mouseup", this.handleMouseUp, {
      passive: true
    });
    window.cancelAnimationFrame(this.longClick);
    window.cancelAnimationFrame(this.update);
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

  animationClick = {
    start: null,
    direction: 1,
    elapsed: 0,
    progress: 0,
    totalDuration: 2000
  };

  longClick = () => {
    if (!this.animationClick.start) {
      this.animationClick.start = performance.now();
      this.animationClick.elapsed = 0;
      this.animationClick.progress = 0;
    }
    if (this.isMouseDown) {
      this.animationClick.direction = 1;
    } else {
      this.animationClick.direction = -1;
    }
    const elapsed = this.animationClick.elapsed;
    this.animationClick.elapsed = performance.now() - this.animationClick.start;
    this.animationClick.progress = Math.max(
      Math.min(
        this.animationClick.progress +
          ((this.animationClick.elapsed - elapsed) /
            this.animationClick.totalDuration) *
            this.animationClick.direction,
        1
      ),
      0
    );
    const scale = this.animationClick.progress * 6.5;
    this.innerBg.current.style.transform = `scale(${scale})`;
    if (this.animationClick.progress >= 1 || this.animationClick.progress <= 0) {
      window.cancelAnimationFrame(this.animationLongClick);
    } else {
      this.animationLongClick = window.requestAnimationFrame(this.longClick);
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
