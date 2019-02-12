import React from "react";
import PropTypes from "prop-types";
import { Wrapper, ColoredLayer } from "./element";

import posed, { PoseGroup } from "react-pose";
import LoaderCount from "./LoaderCount";

class Loader extends React.Component {
  state = {
    showed: false
  };

  static propTypes = {
    duration: PropTypes.number,
    videoIndex: PropTypes.number
  };

  static defaultProps = {
    duration: 3000,
    videoIndex: 1
  };

  componentDidMount() {
    this.setState({ showed: true });
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

  getRandomInt = (min, max) => Math.floor(Math.random() * max) + min;

  render() {
    const { showed } = this.state;
    const { duration, videoIndex } = this.props;
    return (
      <PoseGroup>
        {showed && (
          <WrapperAnimated key="transition" ref={this.transition}>
            <ColoredLayerAnimated backgroundColor="#FFFFFF" />
            <ColoredLayer2Animated backgroundColor="#68759F" />
            <ColoredLayer3Animated backgroundColor="#F0A9B5">
              <video
                src={`./assets/videos/transition/transition${videoIndex}.mp4`}
                type="video/mp4"
                autoPlay
                loop
                playsInline
                muted
              />
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
