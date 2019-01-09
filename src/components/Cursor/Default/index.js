import React from "react";
// import PropTypes from "prop-types";
import { throttle } from "throttle-debounce";

import { OutsideCircle, InnerDot } from "./element";

class Default extends React.Component {
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
  });

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    window.cancelAnimationFrame(this.update);
  }

  update = () => {
    window.requestAnimationFrame(this.update);

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
