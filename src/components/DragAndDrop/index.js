import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";

import { DragAndDropContainer, Round } from "./element";

class DragAndDrop extends React.Component {
  static propTypes = {
    dragEnd: PropTypes.func
  };

  static defaultProps = {
    dragEnd: () => {}
  };

  render() {
    const { dragEnd } = this.props;
    return (
      <DragAndDropContainer>
        <DraggableRound
          onDragStart={this.onStart}
          onDragEnd={dragEnd}
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
