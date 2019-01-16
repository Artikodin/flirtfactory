import React from "react";
import posed from "react-pose";

// import PropTypes from "prop-types";

/* eslint-disable */

import { DragAndDropContainer, Round } from "./element";

class SyncDragAndDrop extends React.Component {
  // static propTypes = {
  // };

  // static defaultProps = {
  // };

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.mounted = false;
    this.image = new Image();
    this.frame = 1;
    this.frameTotal = 167;
    this.prevFrame;
    this.raf = false;
    this.ctx;

  }

  // CANVAS

  componentDidMount() {
    this.mounted = true;
    this.image.src = "./assets/frames/antiquite/antiquite1.jpg"
    this.image.onload = this.init();
  }

  init() {
    const canvas = this.canvas.current;
    this.ctx = canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.ctx.drawImage(this.image, 0, 0);
  }

  update() {
    this.ctx.drawImage(this.image, 0, 0);
    if (this.raf) {
      requestAnimationFrame(this.update.bind(this));
    }
  }

  // DRAG AND DROP

  onDragStart = () => {
    this.raf = true;
    this.update();
  };

  onDragEnd = () => {
    if (this.frame === this.frameTotal) {
      alert("tu as bien drag")
    } else {
      console.log(this)      
    }
    this.raf = false;
  };

  onDrag = x => {
    this.frame = Math.round((this.frameTotal / 400) * x);
    if (this.mounted) {
      if (this.prevFrame !== this.frame) {
        this.image.src = `./assets/frames/antiquite/antiquite${this.frame}.jpg`;
        if (this.image.complete && this.image.naturalHeight !== 0) {
          this.update()
          this.prevFrame = this.frame;
        }
      }
    }
  };

  render() {
    return (
      <DragAndDropContainer>
        <canvas ref={this.canvas} />
        <DraggableRound
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          onValueChange={{ x: this.onDrag }}
        />
      </DragAndDropContainer>
    );
  }
}

const DraggableRound = posed(Round)({
  draggable: "x",
  dragBounds: { left: 0, right: 400 }
});

export default SyncDragAndDrop;
