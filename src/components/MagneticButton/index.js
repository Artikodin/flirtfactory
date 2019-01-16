import React from "react";
import PropTypes from "prop-types";
import { throttle } from "throttle-debounce";

import { Wrapper } from "./element";

class MagneticButton extends React.Component {
  static propTypes = {
    threshold: PropTypes.number,
    ease: PropTypes.number
  };

  static defaultProps = {
    threshold: 30,
    ease: 0.09
  };

  magnet = React.createRef();

  magnetProperty = {};

  framID = null;

  isHover = false;

  mousePos = {
    x: 0,
    y: 0
  };

  elPos = {
    x: 0,
    y: 0
  };

  handleMouseMove = throttle(10, e => {
    this.mousePos = {
      x: e.clientX,
      y: e.clientY
    };
    this.isMagnetic(e.clientX, e.clientY);
  });

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    this.magnetProperty = this.magnet.current.getBoundingClientRect();
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    window.cancelAnimationFrame(this.framID);
  }

  // This function check if the cursor is close to the magnetic element or not
  isMagnetic = (x, y) => {
    // Distance where the element is starting to get attract by cursor
    const { threshold } = this.props;

    const centerX = this.magnetProperty.left + this.magnetProperty.width / 2;
    const centerY = this.magnetProperty.top + this.magnetProperty.height / 2;

    // use pythagorean theorem to calculate
    // cursor distance from center of btn
    // a^2 + b^2 = c^2
    const a = Math.abs(centerX - x);
    const b = Math.abs(centerY - y);
    const c = Math.sqrt(a * a + b * b);

    // true if cursor distance from center of btn is
    // equal to btn radius + threshold
    this.isHover = c < this.magnetProperty.width / 2 + threshold;
  };

  update = () => {
    const { ease } = this.props;

    const elPos = { x: 0, y: 0 };

    if (this.isHover) {
      elPos.x =
        this.mousePos.x -
        (this.magnetProperty.x + this.magnetProperty.width / 2);
      elPos.y =
        this.mousePos.y -
        (this.magnetProperty.y + this.magnetProperty.width / 2);
    }

    this.elPos.x += (elPos.x - this.elPos.x) * ease;
    this.elPos.y += (elPos.y - this.elPos.y) * ease;

    this.magnet.current.style.transform = `
        translate3d(
            ${this.elPos.x}px,
            ${this.elPos.y}px,
            0
        )
    `;

    this.framID = window.requestAnimationFrame(this.update);
  };

  render() {
    return <Wrapper ref={this.magnet}>test</Wrapper>;
  }
}

export default MagneticButton;
