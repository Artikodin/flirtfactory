import React from "react";

import { ButtonAboutWrapper } from "./element";

class ButtonAbout extends React.Component {
  render() {
    const { click } = this.props;
    return (
      <ButtonAboutWrapper onClick={e => click()}>
        <div>i</div>
      </ButtonAboutWrapper>
    );
  }
}

export default ButtonAbout;
