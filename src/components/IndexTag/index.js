import React from "react";
import posed from "react-pose";
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
    showed: false
  };

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    name: PropTypes.bool
  };

  static defaultProps = {
    children: "",
    title: "",
    name: false
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
          <AnimatedTitle>{title}</AnimatedTitle>
          <AnimatedContainer>
            <Paragraph>{children}</Paragraph>
          </AnimatedContainer>
        </AnimatedWrapper>
      </GlobalContainer>
    );
  }
}

const AnimatedWrapper = posed(Wrapper)({
  isClose: { width: 45, height: 45, delay: 280 },
  isOpen: {
    width: 300,
    height: "auto"
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

export default IndexTag;
