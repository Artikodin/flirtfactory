import React from "react";

import { Page, DragNDrop } from "../../components";

import { TestDiv } from "./element";

class Test extends React.Component {
  testDiv = React.createRef();

  handleDrag = t => {
    console.log(t);
    this.testDiv.current.style.background = `
      rgba(255, 3, 34, ${t})
    `;
  };

  handleDragEnd = () => {
    this.testDiv.current.style.background = `
      rgba(6, 255, 34, 1)
    `;
  };

  render() {
    return (
      <Page>
        <DragNDrop
          pathDraw="M 250 200 Q 100 250 100 400 "
          handleDrag={this.handleDrag}
          handleDragEnd={this.handleDragEnd}
        />
        <TestDiv ref={this.testDiv} />
      </Page>
    );
  }
}

export default Test;
