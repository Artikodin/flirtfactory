import React from "react";

import {
  Page,
  ButtonDrawer,
  Drawer,
  DrawerContent,
  BackgroundVideo
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
    const { drawerShowed } = this.state;
    return (
      <Page>
        <ButtonDrawer click={this.handleClick} />
        <BackgroundVideo path="antiquite" />
        <Drawer showed={drawerShowed}>
          <DrawerContent number={0} />
        </Drawer>
      </Page>
    );
  }
}

export default Antiquite;
