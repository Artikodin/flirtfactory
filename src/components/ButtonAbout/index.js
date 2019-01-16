import React from "react";

import { ButtonAboutWrapper } from "./element";

class ButtonAbout extends React.Component {
  render() {
    return (
      <ButtonAboutWrapper onClick={this.handleClick}>
        <img src="./assets/ui/globalview.svg" alt="Open Drawer" />
      </ButtonAboutWrapper>
    );
  }
}

export default ButtonAbout;
