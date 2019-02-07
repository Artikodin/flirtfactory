import React from "react";

import { Page, Picto } from "../../components";
import { Wrapper } from "./element";

class Test extends React.Component {
  testDiv = React.createRef();

  render() {
    return (
      <Page>
        <Wrapper>
          <Picto name="renaissance1" color="white" height="30" width="30" />
        </Wrapper>
      </Page>
    );
  }
}

export default Test;
