import React from "react";

import {
  Page,
  ButtonDrawer,
  Drawer,
  DrawerContent,
  BackgroundVideo,
  InterestTag,
  DragAndDrop
} from "../../components";

class Antiquite extends React.Component {
  state = {
    drawerShowed: false,
    number: 1,
    loop: true
  };

  handleClick = () => {
    const { drawerShowed } = this.state;
    this.setState({
      drawerShowed: !drawerShowed
    });
  };

  handleEndDrag = () => {
    this.setState({
      number: 2,
      loop: false
    });
  };

  render() {
    const { drawerShowed, number, loop } = this.state;
    return (
      <Page>
        <InterestTag xPos="200px" yPos="200px">
          Stimentos
        </InterestTag>
        <DragAndDrop dragEnd={this.handleEndDrag} />
        <BackgroundVideo path="antiquite" number={number} loop={loop} />
        <ButtonDrawer click={this.handleClick} />
        <Drawer showed={drawerShowed}>
          <DrawerContent number={0} />
        </Drawer>
      </Page>
    );
  }
}

export default Antiquite;
