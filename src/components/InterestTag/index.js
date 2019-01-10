import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

import {
  Title,
  Paragraph,
  TextContent,
  Wrapper,
  Container,
  Icon
} from "./element";

class InterestTag extends React.Component {
  state = {
    showed: false
  };

  static propTypes = {
    children: PropTypes.node,
    xPos: PropTypes.string,
    yPos: PropTypes.string
  };

  static defaultProps = {
    children: "",
    xPos: "0px",
    yPos: "0px"
  };

  handleClick = () => {
    const { showed } = this.state;
    this.setState({
      showed: !showed
    });
  };

  render() {
    const { xPos, yPos, children } = this.props;
    const { showed } = this.state;
    return (
      <AnimatedWrapper
        xPos={xPos}
        yPos={yPos}
        onClick={this.handleClick}
        pose={showed ? "isOpen" : "isClose"}
      >
        <Icon src="./assets/ui/PointDinteret.svg" alt="" />
        <AnimatedContainer>
          <AnimatedTextContent>
            <Title>{children}</Title>
            <Paragraph>blablablablablablabal</Paragraph>
            <Paragraph>blablablablablablabal</Paragraph>
            <Paragraph>blablablablablablabal</Paragraph>
          </AnimatedTextContent>
        </AnimatedContainer>
      </AnimatedWrapper>
    );
  }
}

const AnimatedWrapper = posed(Wrapper)({
  isClose: { width: 52, background: "rgba(255, 255, 255, 0)", delay: 280 },
  isOpen: {
    width: 300,
    background: "rgba(255, 255, 255, 0.2)",
    delayChildren: 280
  }
});

const AnimatedContainer = posed(Container)({
  isClose: { height: 0, opacity: 0 },
  isOpen: { height: "auto", opacity: 1 }
});

const AnimatedTextContent = posed(TextContent)({
  isClose: { opacity: 0 },
  isOpen: { opacity: 1 }
});

export default InterestTag;
