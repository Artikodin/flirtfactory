import React from "react";
import { Link } from "react-router-dom";

import { Page, Drawer, DrawerContent, ScrollHandler } from "../../components";

import styled from "styled-components";

class Page2 extends React.Component {
  state = {
    showed: false
  };

  handleClick = () => {
    const { showed } = this.state;
    this.setState({
      showed: !showed
    });
  };

  handleLog = () => {
    // console.log("log");
  };

  render() {
    const { showed } = this.state;
    return (
      <Page>
        <ScrollHandler onScrollBottom={this.handleLog} />
        <h1>page2</h1>
        <BackgroundVideo>
          <video src="./assets/videos/video.mp4" type="video/mp4" autoPlay loop>
            <track />
          </video>
        </BackgroundVideo>
        <button type="button" onClick={this.handleClick}>
          click
        </button>
        <Drawer showed={showed}>
          <DrawerContent />
        </Drawer>
        <Link to="/page3">to page 3</Link>
      </Page>
    );
  }
}

export default Page2;

export const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(calc((100% - 100vw) / 2));
  }
`;
