import React from "react";
import PropTypes from "prop-types";

import { Howl } from "howler";

import { Wrapper, ImgContainer, StyledLink, TextContainer } from "./element";

class NavItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    pathTo: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: null,
    active: false
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
    // this.soundNav.play();
  };

  render() {
    const { pathTo, imgSrc, children, active } = this.props;
    return (
      <Wrapper
        className={active ? "active" : ""}
        onMouseEnter={() => this.playSound()}
      >
        <StyledLink to={pathTo}>
          <ImgContainer src={imgSrc} alt="" />
          <TextContainer>{children}</TextContainer>
        </StyledLink>
      </Wrapper>
    );
  }
}

export default NavItem;
