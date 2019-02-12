import React from "react";
import PropTypes from "prop-types";

import { Howl } from "howler";

import { Wrapper, ImgContainer, StyledLink, TextContainer } from "./element";

class NavItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    pathTo: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: null
  };

  static displayName = "NavBar.NavItem";

  soundNav = new Howl({
    src: "./assets/sound/nav.mp3",
    autoplay: false,
    preload: true,
    playing: false,
    volume: 1
  });

  playSound = () => {
    this.soundNav.play();
  };

  render() {
    const { pathTo, imgSrc, children } = this.props;

    return (
      <Wrapper onMouseEnter={() => this.playSound()}>
        <StyledLink to={pathTo}>
          <ImgContainer src={imgSrc} alt="" />
          <TextContainer>{children}</TextContainer>
        </StyledLink>
      </Wrapper>
    );
  }
}

export default NavItem;
