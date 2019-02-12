import React from "react";
import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";

import {
  Title,
  Paragraph,
  Wrapper,
  Container,
  GlobalContainer,
  IconContainer
} from "./element";

import { Picto } from "..";

class IndexTag extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    showed: this.props.isOpen
  };

  static propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    children: "",
    isOpen: false,
    title: "",
    name: ""
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
    const { children, title, name } = this.props;
    const { showed } = this.state;
    return (
      <GlobalContainer ref={this.magnet}>
        <AnimatedWrapper
          pose={showed ? "isOpen" : "isClose"}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <IconContainer>
            <Picto name={name} />
          </IconContainer>
          <PoseGroup>
            {showed && (
              <AnimatedTitle key="animatedTitle">{title}</AnimatedTitle>
            )}
            {showed && (
              <AnimatedContainer key="animatedContainer">
                <Paragraph>{children}</Paragraph>
              </AnimatedContainer>
            )}
          </PoseGroup>
        </AnimatedWrapper>
      </GlobalContainer>
    );
  }
}

const AnimatedWrapper = posed(Wrapper)({
  isClose: {
    width: 45,
    height: 45,
    delay: 450,
    background: "rgba(255, 255, 255, 0)"
  },
  isOpen: {
    width: 300,
    height: "auto",
    background: "rgba(255, 255, 255, 0.2)",
    delay: 280
  }
});

const AnimatedTitle = posed(Title)({
  exit: {
    scaleX: 0.5,
    opacity: 0,
    delay: 280,
    transition: { duration: 270 }
  },
  enter: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 300 }
  }
});

const AnimatedContainer = posed(Container)({
  exit: { scaleY: 0, opacity: 0 },
  enter: { scaleY: 1, opacity: 1, delay: 280 }
});

export default IndexTag;
