import React from "react";
import { Link } from "react-router-dom";

import { Page, Drawer, DrawerContent, ScrollHandler } from "../../components";

/* eslint-disable */

class Page2 extends React.Component {
  state = {
    showed: false
  };

  handleClick = () => {
    const { showed } = this.state;
    // const showed = this.state.showed;
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
        <Video autoPlay loop>
          <track default />
          <source src="./assets/videos/video.mp4" type="video/mp4" />
        </Video>
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

import styled from "styled-components";

export const Video = styled.video`
  position: fixed; 
  right: 0; 
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  width: auto; 
  height: auto; 
  z-index: -1;
  /* z-index: -100; */
`;
