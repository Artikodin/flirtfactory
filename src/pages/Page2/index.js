import React from "react";

import {
  Page,
  Drawer,
  DrawerContent,
  DragAndDrop,
  BackgroundVideo
} from "../../components";

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
        <DragAndDrop />
        <BackgroundVideo path="antiquite" />
        <Drawer showed={showed}>
          <DrawerContent />
        </Drawer>
      </Page>
    );
  }
}

export default Page2;
