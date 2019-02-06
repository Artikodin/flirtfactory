import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";
import { throttle } from "throttle-debounce";

import {
  Title,
  Paragraph,
  Wrapper,
  Container,
  GlobalContainer,
  IconContainer
} from "./element";

import { Picto } from "..";

class GenericTag extends React.Component {
  state = {
    showed: false
  };

  static propTypes = {
    threshold: PropTypes.number,
    thresholdVisible: PropTypes.number,
    ease: PropTypes.number,
    children: PropTypes.node,
    title: PropTypes.string,
    index: PropTypes.bool,
    global: PropTypes.bool,
    xPos: PropTypes.string,
    yPos: PropTypes.string,
    catchphrase: PropTypes.func,
    unlocked: PropTypes.bool,
    unlockPoint: PropTypes.func,
    age: PropTypes.string,
    pictonumber: PropTypes.number
  };

  static defaultProps = {
    threshold: 45,
    thresholdVisible: 120,
    ease: 0.09,
    children: "",
    title: "",
    age: "",
    pictonumber: 1,
    unlocked: false,
    index: false,
    global: false,
    xPos: "0px",
    yPos: "0px",
    catchphrase: () => {},
    unlockPoint: () => {}
  };

  magnet = React.createRef();

  magnetProperty = {};

  isHover = false;

  isVisible = false;

  show = false;

  mousePos = {
    x: 0,
    y: 0
  };

  elPos = {
    x: 0,
    y: 0
  };

  animationRun = false;

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
    window.addEventListener("resize", this.handleScreenResize, {
      passive: true
    });
    this.magnetProperty = this.magnet.current.getBoundingClientRect();
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    window.removeEventListener("resize", this.handleScreenResize, {
      passive: true
    });
    window.cancelAnimationFrame(this.update);
  }

  handleScreenResize = () => {
    this.magnetProperty = this.magnet.current.getBoundingClientRect();
  };

  // This function check if the cursor is close to the magnetic element or not
  isMagnetic = (x, y) => {
    // Distance where the element is starting to get attract by cursor
    const { threshold, thresholdVisible } = this.props;

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
    this.isVisible = c < this.magnetProperty.width / 2 + thresholdVisible;

    if (this.isVisible && !this.animationRun) {
      this.update();
      this.animationRun = true;
    }
  };

  auMillieme = nombre => Math.round(1000 * nombre) / 1000;

  update = () => {
    const { ease, unlocked } = this.props;

    const elPos = { x: 0, y: 0 };

    if (this.isHover) {
      elPos.x =
        this.mousePos.x -
        (this.magnetProperty.x + this.magnetProperty.width / 2);
      elPos.y =
        this.mousePos.y -
        (this.magnetProperty.y + this.magnetProperty.width / 2);
    }

    if (this.isVisible || unlocked) {
      if (!this.show) {
        this.show = true;
        this.magnet.current.style.opacity = `
        1
        `;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (this.show) {
        this.show = false;
        this.magnet.current.style.opacity = `
          0.1
        `;
      }
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
    if (
      (this.auMillieme(this.elPos.x) !== 0 &&
        this.auMillieme(this.elPos.y) !== 0) ||
      this.isVisible
    ) {
      requestAnimationFrame(this.update);
    } else {
      this.animationRun = false;
    }
  };

  handleMouseEnter = () => {
    const { unlockPoint } = this.props;
    unlockPoint();
    this.setState({
      showed: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      showed: false
    });
  };

  render() {
    const {
      xPos,
      yPos,
      children,
      title,
      index,
      global,
      catchphrase,
      age,
      pictonumber
    } = this.props;
    const { showed } = this.state;
    return (
      <GlobalContainer ref={this.magnet} xPos={xPos} yPos={yPos}>
        <AnimatedWrapper
          pose={showed ? "isOpen" : "isClose"}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={catchphrase}
        >
          <IconContainer>
            <Picto age={age} pictonumber={pictonumber} index={index} />
          </IconContainer>
          <AnimatedTitle>{title}</AnimatedTitle>
          <AnimatedContainer className={global ? "hide" : ""}>
            <Paragraph>{children}</Paragraph>
          </AnimatedContainer>
        </AnimatedWrapper>
      </GlobalContainer>
    );
  }
}

const AnimatedWrapper = posed(Wrapper)({
  isClose: { width: 45, background: "rgba(255, 255, 255, 0)", delay: 280 },
  isOpen: {
    width: 300,
    background: "rgba(255, 255, 255, 0.2)"
  }
});

const AnimatedTitle = posed(Title)({
  isClose: { scaleX: 0, opacity: 0, delay: 280, transition: { duration: 270 } },
  isOpen: { scaleX: 1, opacity: 1, transition: { duration: 300 } }
});

const AnimatedContainer = posed(Container)({
  isClose: { scaleY: 0, opacity: 0 },
  isOpen: { scaleY: 1, opacity: 1, delay: 280 }
});

export default GenericTag;
