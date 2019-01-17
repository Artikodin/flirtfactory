import React from "react";

import { Page, DragAndDrop, BackgroundVideo } from "../../components";

class Page2 extends React.Component {
  handleLog = () => {
    // console.log("log");
  };

  render() {
    return (
      <Page>
        <DragAndDrop />
        <BackgroundVideo path="antiquite" number={4} loop={false} />
      </Page>
    );
  }
}

export default Page2;
