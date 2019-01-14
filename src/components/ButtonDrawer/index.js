/* eslint-disable */
import React from "react";

import { ButtonDrawerWrapper } from "./element";

class ButtonDrawer extends React.Component {
  render() {
    const { click } = this.props;
    return (
      <ButtonDrawerWrapper onClick={click}>
        <img src="./assets/ui/menu.svg" alt="Open Drawer" />
      </ButtonDrawerWrapper>
    );
  }
}

export default ButtonDrawer;
