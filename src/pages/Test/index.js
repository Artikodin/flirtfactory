import React from "react";

import { Page, Picto } from "../../components";
import { Wrapper } from "./element";

class Test extends React.Component {
  testDiv = React.createRef();

  state = {
    color: "red"
  };

  handleClick = () => {
    this.setState({
      color: "white"
    });
  };

  render() {
    const { color } = this.state;
    return (
      <Page>
        <Wrapper onClick={this.handleClick}>
          <Picto name="renaissance1" color={color} height="30" width="30" />
        </Wrapper>
      </Page>
    );
  }
}

export default Test;
