import React from "react";

import {
  Page,
  // ButtonDrawer,
  // Drawer,
  // DrawerContent,
  BackgroundVideo,
  InterestTag
} from "../../components";

class Antiquite extends React.Component {
  state = {
    drawerShowed: false
  };

  handleClick = () => {
    const { drawerShowed } = this.state;
    this.setState({
      drawerShowed: !drawerShowed
    });
  };

  render() {
    // const { drawerShowed } = this.state;
    return (
      <Page>
        <InterestTag xPos="200px" yPos="200px">
          Stimentos
        </InterestTag>
        <BackgroundVideo path="antiquite" />
        {/* <ButtonDrawer click={this.handleClick} /> */}
        {/* <Drawer showed={drawerShowed}>
          <DrawerContent number={0} />
        </Drawer> */}
      </Page>
    );
  }
}

export default Antiquite;
