import React from "react";

import { Page, DragNDrop } from "../../components";

class Test extends React.Component {
  handleLog = () => {
    // console.log("log");
  };

  render() {
    return (
      <Page>
        <DragNDrop />
      </Page>
    );
  }
}

export default Test;
