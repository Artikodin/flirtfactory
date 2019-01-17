import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";
import { throttle } from "throttle-debounce";

import {
  Title,
  Paragraph,
  Wrapper,
  Container,
  Icon,
  GlobalContainer
} from "./element";

class InterestTag extends React.Component {
  state = {
    showed: false
  };

  static propTypes = {
    threshold: PropTypes.number,
    ease: PropTypes.number,
    children: PropTypes.string,
    title: PropTypes.string,
    xPos: PropTypes.string,
    yPos: PropTypes.string
  };

  static defaultProps = {
    threshold: 30,
    ease: 0.09,
    children: "",
    title: "",
    xPos: "0px",
    yPos: "0px"
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
    window.addEventListener("resize", this.handleScreenResize, {
      passive: true
    });
    this.magnetProperty = this.magnet.current.getBoundingClientRect();
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    window.removeEventListener("resize", this.handleScreenResize, {
      passive: true
    });
    window.cancelAnimationFrame(this.framID);
  }

  handleScreenResize = () => {
    this.magnetProperty = this.magnet.current.getBoundingClientRect();
  };

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

  handleMouseEnter = () => {
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
    const { xPos, yPos, children, title } = this.props;
    const { showed } = this.state;
    return (
      <GlobalContainer ref={this.magnet} xPos={xPos} yPos={yPos}>
        <AnimatedWrapper
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          pose={showed ? "isOpen" : "isClose"}
        >
          <Icon src="./assets/ui/PointDinteret.svg" alt="" />
          <AnimatedContainer>
            <div>
              <Title>{title}</Title>
              <Paragraph>{children}</Paragraph>
            </div>
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
    background: "rgba(255, 255, 255, 0.2)",
    delayChildren: 280
  }
});

const AnimatedContainer = posed(Container)({
  isClose: { scaleY: 0, opacity: 0 },
  isOpen: { scaleY: 1, opacity: 1 }
});

export default InterestTag;
