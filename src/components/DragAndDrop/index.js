import React from "react";
import posed from "react-pose";

import { DragAndDropContainer, Round } from "./element";

class DragAndDrop extends React.Component {
  onStart = () => {
    console.log("start drag");
  };

  onEnd = () => {
    console.log("end drag");
  };

  onValueChange = () => {
    console.log("end drag");
  };

  render() {
    return (
      <DragAndDropContainer>
        <DraggableRound
          onDragStart={this.onStart}
          onDragEnd={this.onEnd}
          // onValueChange={{ x: onDrag }}
        />
      </DragAndDropContainer>
    );
  }
}

const DraggableRound = posed(Round)({
  draggable: "x",
  dragBounds: { left: 0, right: 400 }
});

export default DragAndDrop;
