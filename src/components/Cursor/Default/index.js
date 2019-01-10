import React from "react";
// import PropTypes from "prop-types";
import { throttle } from "throttle-debounce";

import { OutsideCircle, InnerDot } from "./element";

class Default extends React.Component {
  running = false;

  outside = React.createRef();

  inner = React.createRef();

  target = { x: 0, y: 0 };

  outsidePos = { x: 0, y: 0 };

  innerPos = { x: 0, y: 0 };

  handleMouseMove = throttle(10, e => {
    this.target = {
      x: e.clientX,
      y: e.clientY
    };

    if (!this.running) {
      this.update();
    }
  });

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    window.cancelAnimationFrame(this.update);
  }

  update = () => {
    this.running = true;

    const innerEase = 0.9;
    const outsideEase = 0.1;

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
      this.running = false;
    }
  };

  render() {
    return (
      <>
        <OutsideCircle ref={this.outside} />
        <InnerDot ref={this.inner} />
      </>
    );
  }
}

export default Default;
