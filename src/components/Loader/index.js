import React from "react";
import PropTypes from "prop-types";
import { Wrapper, ColoredLayer } from "./element";

import posed, { PoseGroup } from "react-pose";
import LoaderCount from "./LoaderCount";

class Loader extends React.Component {
  state = {
    showed: false,
    videoIndex: 1
  };

  static propTypes = {
    duration: PropTypes.number
  };

  static defaultProps = {
    duration: 3000
  };

  componentDidMount() {
    this.getRandomInt(1, 3);
    this.setState({ showed: false });
  }

  componentDidUpdate() {
    const { showed } = this.state;
    const { duration } = this.props;
    if (showed) {
      this.showedTimeout = setTimeout(() => {
        this.setState(() => ({ showed: false }));
      }, duration);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.showedTimeout);
  }

  getRandomInt = (min, max) => {
    const value = Math.floor(Math.random() * max) + min;
    this.setState({
      videoIndex: value
    });
  };

  render() {
    const { showed, videoIndex } = this.state;
    const { duration } = this.props;
    return (
      <PoseGroup>
        {showed && (
          <WrapperAnimated key="transition" ref={this.transition}>
            <ColoredLayerAnimated backgroundColor="#FFFFFF" />
            <ColoredLayer2Animated backgroundColor="#68759F" />
            <ColoredLayer3Animated backgroundColor="#F0A9B5">
              {videoIndex === 1 && (
                <video
                  src="./assets/videos/transition/transition1.mp4"
                  type="video/mp4"
                  autoPlay
                  loop
                  playsInline
                  muted
                />
              )}
              {videoIndex === 2 && (
                <video
                  src="./assets/videos/transition/transition2.mp4"
                  type="video/mp4"
                  autoPlay
                  loop
                  playsInline
                  muted
                />
              )}
              {videoIndex === 3 && (
                <video
                  src="./assets/videos/transition/transition3.mp4"
                  type="video/mp4"
                  autoPlay
                  loop
                  playsInline
                  muted
                />
              )}
              <LoaderCount duration={duration} />
            </ColoredLayer3Animated>
          </WrapperAnimated>
        )}
      </PoseGroup>
    );
  }
}

const WrapperAnimated = posed(Wrapper)({
  enter: { staggerChildren: 100 },
  exit: {
    staggerChildren: 100,
    staggerDirection: -1
  }
});

const ColoredLayerAnimated = posed(ColoredLayer)({
  enter: {
    y: 0,
    transition: {
      duration: 500,
      ease: [0.09, 0.37, 0.22, 1]
    }
  },
  exit: {
    y: "100%",
    transition: {
      duration: 700,
      ease: [0.09, 0.37, 0.22, 1]
    }
  }
});

const ColoredLayer2Animated = posed(ColoredLayer)({
  enter: {
    y: 0,
    transition: {
      duration: 600,
      ease: [0.09, 0.37, 0.22, 1]
    }
  },
  exit: {
    y: "100%",
    transition: {
      duration: 600,
      ease: [0.09, 0.37, 0.22, 1]
    }
  }
});

const ColoredLayer3Animated = posed(ColoredLayer)({
  enter: {
    y: 0,
    transition: {
      duration: 700,
      ease: [0.09, 0.37, 0.22, 1]
    }
  },
  exit: {
    y: "100%",
    transition: {
      duration: 500,
      ease: [0.09, 0.37, 0.22, 1]
    }
  }
});

export default Loader;
