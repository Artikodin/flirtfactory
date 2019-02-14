import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./element";

class AnimatedText extends React.Component {
  state = { text: "" };

  text = React.createRef();

  static propTypes = {
    children: PropTypes.string
  };

  static defaultProps = {
    children: ""
  };

  componentDidMount() {
    const { children } = this.props;
    const from = 0;
    const to = children.length;
    const duration = to * 15;

    const draw = progress => {
      const result = (to - from) * progress + from;
      this.setState({ text: children.substring(0, Math.ceil(result)) });
    };

    const timing = timeFraction => timeFraction;

    this.animate({
      duration,
      timing,
      draw
    });
  }

  // eslint-disable-next-line consistent-return
  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (children !== prevProps.children) {
      const from = 0;
      const to = children.length;
      const duration = to * 15;

      const draw = progress => {
        const result = (to - from) * progress + from;
        this.setState({ text: children.substring(0, Math.ceil(result)) });
      };

      const timing = timeFraction => timeFraction;

      this.animate({
        duration,
        timing,
        draw
      });
    }
  }

  animate = ({ timing, draw, duration }) => {
    const start = performance.now();

    let once = false;

    const handleTypingStarted = () => {
      console.log("handleTypingStarted");
    };

    const handleTypingEnded = () => {
      console.log("handleTypingEnded");
    };

    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // calculate the current animation state
      const progress = timing(timeFraction);

      draw(progress); // draw it

      if (!once) {
        handleTypingStarted();
        once = true;
      }
      if (timeFraction === 1) {
        handleTypingEnded();
      }

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  };

  render() {
    const { text } = this.state;
    return (
      <Wrapper ref={this.text}>
        <>{text}</>
      </Wrapper>
    );
  }
}

export default AnimatedText;
