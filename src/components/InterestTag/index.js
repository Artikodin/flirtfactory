import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

import { Title, Paragraph, Wrapper, Container, Icon } from "./element";

class InterestTag extends React.Component {
  state = {
    showed: false
  };

  static propTypes = {
    children: PropTypes.string,
    title: PropTypes.string,
    xPos: PropTypes.string,
    yPos: PropTypes.string
  };

  static defaultProps = {
    children: "",
    title: "",
    xPos: "0px",
    yPos: "0px"
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
      <AnimatedWrapper
        xPos={xPos}
        yPos={yPos}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        pose={showed ? "isOpen" : "isClose"}
      >
        <Icon src="./assets/ui/PointDinteret.svg" alt="" />
        <AnimatedContainer>
          <Title>{title}</Title>
          <Paragraph>{children}</Paragraph>
        </AnimatedContainer>
      </AnimatedWrapper>
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
