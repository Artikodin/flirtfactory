import React from "react";

import { ButtonGlobalViewWrapper } from "./element";

class ButtonGlobalView extends React.Component {
  render() {
    return (
      <ButtonGlobalViewWrapper onClick={this.handleClick}>
        <img src="./assets/ui/globalview.svg" alt="Open Drawer" />
      </ButtonGlobalViewWrapper>
    );
  }
}

export default ButtonGlobalView;
