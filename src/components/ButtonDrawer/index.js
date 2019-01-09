import React from "react";

import { ButtonDrawerWrapper } from "./element";

class ButtonDrawer extends React.Component {
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
    // const { showed } = this.state;
    return (
      <ButtonDrawerWrapper>
        <img src="./assets/ui/menu.svg" alt="Open Drawer" />
      </ButtonDrawerWrapper>
    );
  }
}

export default ButtonDrawer;
