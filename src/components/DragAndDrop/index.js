import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

/* eslint-disable */

import { DragAndDropContainer, Round } from "./element";

class DragAndDrop extends React.Component {
  static propTypes = {
    dragEnd: PropTypes.func,
    mouseDown: PropTypes.func,
    mouseUp: PropTypes.func,
    dragging: PropTypes.func
  };

  static defaultProps = {
    dragEnd: () => {},
    mouseDown: () => {},
    mouseUp: () => {},
    dragging: () => {}
  };

  handleClick = () => {
    // console.log("mousedown");
  };

  onDrag = x => {
    console.log(x);
  };

  render() {
    const { dragEnd, mouseDown, mouseUp, dragging } = this.props;
    return (
      <DragAndDropContainer>
        <DraggableRound
          // onDragStart={this.onStart}
          onDragEnd={{ x: dragEnd }}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          onValueChange={{ x: dragging }}
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
