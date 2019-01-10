import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

import {
  Title,
  Paragraph,
  TextContent,
  Wrapper,
  Container
  // Icon
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

  handleShow = () => {
    this.setState({
      showed: true
    });
  };

  handleHide = () => {
    this.setState({
      showed: false
    });
  };

  render() {
    const { xPos, yPos, children } = this.props;
    const { showed } = this.state;
    return (
      <AnimatedWrapper
        xPos={xPos}
        yPos={yPos}
        onMouseEnter={this.handleShow}
        pose={showed ? "isOpen" : "isClose"}
      >
        {/* <Icon src="./assets/ui/PointDinteret.svg" alt="" /> */}
        <AnimatedContainer>
          <AnimatedTextContent>
            <Title>{children}</Title>
            <Paragraph>
              Le « Stimentos » est une pilule aphrodisiaque, mélange d’huile
              d’olive et de sueur de gladiateur récupérée juste après leur
              entraînement. Elle était utilisée par les Romaines pour séduire
              (on ne doute pas de son efficacité)
            </Paragraph>
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
