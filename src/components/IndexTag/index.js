import React from "react";
import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import { Howl } from "howler";

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
  soundIndex = React.createRef();

  state = {
    // eslint-disable-next-line react/destructuring-assignment
    showed: false
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

  soundIndex = new Howl({
    src: "./assets/sound/tag.mp3",
    autoplay: false,
    preload: true,
    playing: false,
    volume: 0.5
  });

  componentDidMount() {
    const { isOpen } = this.props;
    if (isOpen) {
      setTimeout(() => {
        this.setState({ showed: true });
      }, 500);
    }
  }

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

  playSound = () => {
    this.soundIndex.play();
  };

  render() {
    const { children, title, name } = this.props;
    const { showed } = this.state;
    return (
      <GlobalContainer ref={this.magnet} onMouseEnter={() => this.playSound()}>
        <AnimatedWrapper
          pose={showed ? "isOpen" : "isClose"}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <IconContainer
            style={
              showed
                ? {
                    background: "rgba(255, 255, 255, 0.2)",
                    transition: "all 0.2s ease-in"
                  }
                : {
                    background: "rgba(255, 255, 255, 0)",
                    transition: "all 0.5s ease-out"
                  }
            }
          >
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
    delay: 450
  },
  isOpen: {
    width: 300,
    height: "auto"
  }
});

const AnimatedTitle = posed(Title)({
  exit: {
    scaleX: 0,
    opacity: 0,
    delay: 280,
    background: "rgba(255, 255, 255, 0)",
    transition: { duration: 270 }
  },
  enter: {
    scaleX: 1,
    opacity: 1,
    background: "rgba(255, 255, 255, 0.2)",
    transition: { duration: 300 }
  }
});

const AnimatedContainer = posed(Container)({
  exit: { scaleY: 0, opacity: 0 },
  enter: { scaleY: 1, opacity: 1, delay: 280 }
});

export default IndexTag;
