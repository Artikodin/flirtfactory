import React from "react";

import { Svg } from "./element";

class DragNDrop extends React.Component {
  path = React.createRef();

  svgRef = React.createRef();

  dragCircle = React.createRef();

  deltaDrag = 0;

  goToEnd = false;

  pathPos = {
    start: {
      x: 0,
      y: 0
    },
    end: {
      x: 0,
      y: 0
    }
  };

  componentDidMount() {
    this.pathPos = {
      start: {
        x: this.coordValueAlongPath("x", 0),
        y: this.coordValueAlongPath("y", 0)
      },
      end: {
        x: this.coordValueAlongPath("x", 1),
        y: this.coordValueAlongPath("y", 1)
      }
    };

    window.addEventListener("mouseup", this.handleDragEnd, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.handleDragEnd, {
      passive: true
    });
  }

  mathSquare = number => number ** 2;

  distanceBtwPoints = (xCurve, yCurve, xCursor, yCursor) =>
    Math.sqrt(
      this.mathSquare(xCurve - xCursor) + this.mathSquare(yCurve - yCursor)
    );

  easing = (startValue, endValue, ease) =>
    startValue + (endValue - startValue) * ease;

  /**
   *
   * Get a coordinate value in the path at a specific position
   *
   * @param {string} coordinate - The coordinate you want to get the value.
   * @param {number} positionInThePath - The position in the path, this position is between 0 & 1 both include.
   * @param {number} [distanceFromTheOrigin=0]  - [Optional] Difference between the element at start position on the path and the top left origin.
   *
   * @returns {number} - Value of a coordinate at a specific position in the path.
   *
   */
  coordValueAlongPath = (
    coordinate,
    positionInThePath,
    distanceFromTheOrigin = 0
  ) => {
    const pathTotalLength = this.path.current.getTotalLength();
    return (
      this.path.current.getPointAtLength(positionInThePath * pathTotalLength)[
        coordinate
      ] +
      -1 * distanceFromTheOrigin
    );
  };

  handleMouseMove = e => {
    const { start, end } = this.pathPos;

    const mousePosinSvgElement = {
      x: e.clientX - this.svgRef.current.getBoundingClientRect().x,
      y: e.clientY - this.svgRef.current.getBoundingClientRect().y
    };

    const distanceCursorFromOrigine = this.distanceBtwPoints(
      start.x,
      start.y,
      mousePosinSvgElement.x,
      mousePosinSvgElement.y
    );

    const distanceCursorFromEnd = this.distanceBtwPoints(
      end.x,
      end.y,
      mousePosinSvgElement.x,
      mousePosinSvgElement.y
    );
    this.deltaDrag =
      distanceCursorFromOrigine /
      (distanceCursorFromOrigine + distanceCursorFromEnd);

    const dragElementPos = {
      x: this.coordValueAlongPath("x", this.deltaDrag, start.x),
      y: this.coordValueAlongPath("y", this.deltaDrag, start.y)
    };

    this.dragCircle.current.style.transform = `
      translate3d(
        ${dragElementPos.x}px,
        ${dragElementPos.y}px,
        0
      )
    `;

    if (this.deltaDrag > 0.9) {
      this.goToEnd = true;
      this.handleDragEnd();
    }
  };

  handleDragStart = () => {
    window.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
  };

  handleDragEnd = () => {
    window.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    this.moveStar();
  };

  moveStar = () => {
    const { start } = this.pathPos;

    const ease = 0.07;

    if (this.goToEnd) {
      this.deltaDrag =
        this.deltaDrag < 1 ? this.easing(this.deltaDrag, 1.1, ease) : 1;
    } else {
      this.deltaDrag =
        this.deltaDrag > 0 ? this.easing(this.deltaDrag, -0.1, ease) : 0;
    }

    const elementPos = {
      x: this.coordValueAlongPath("x", this.deltaDrag, start.x),
      y: this.coordValueAlongPath("y", this.deltaDrag, start.y)
    };

    this.dragCircle.current.style.transform = `
      translate3d(
        ${elementPos.x}px,
        ${elementPos.y}px,
        0
      )
    `;

    if (this.deltaDrag !== 1 && this.deltaDrag !== 0)
      requestAnimationFrame(this.moveStar);
  };

  render() {
    return (
      <>
        <Svg
          ref={this.svgRef}
          version="1.1"
          baseProfile="full"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={this.path}
            d="M 150 300 Q 200 250 250 300 Q 300 350 400 300 Q 450 250 450 200"
            fill="transparent"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="8 3"
            id="wire"
          />

          <circle
            ref={this.dragCircle}
            draggable
            id="circle1"
            cx="150"
            cy="300"
            r="15"
            fill="blue"
            stroke="blue"
            strokeWidth="5"
            onMouseDown={() => this.handleDragStart()}
          />
        </Svg>
      </>
    );
  }
}

export default DragNDrop;
