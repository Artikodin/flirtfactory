import React from "react";

import { Page, DragNDrop } from "../../components";

import { TestDiv } from "./element";

class Test extends React.Component {
  testDiv = React.createRef();

  handleDrag = t => {
    this.testDiv.current.style.opacity = `
      ${t}
    `;
  };

  handleDragEnd = () => {
    this.testDiv.current.style.background = `
      rgba(6, 255, 34, 1)
    `;
  };

  handleDragStart = () => {
    this.testDiv.current.style.background = `
      rgba(60, 10, 114, 1)
    `;
  };

  render() {
    return (
      <Page>
        <DragNDrop
          pathDraw="M 250 200 Q 100 250 100 400 "
          handleDrag={this.handleDrag}
          handleDragEnd={this.handleDragEnd}
          handleDragStart={this.handleDragStart}
        />
        <TestDiv ref={this.testDiv} />
      </Page>
    );
  }
}

export default Test;
