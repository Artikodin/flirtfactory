import React from "react";
import PropTypes from "prop-types";

import { Svg } from "./element";

class DragNDrop extends React.Component {
  path = React.createRef();

  svgRef = React.createRef();

  dragCircle = React.createRef();

  state = {
    elStart: {
      x: 0,
      y: 0
    },
    elEnd: {
      x: 0,
      y: 0
    }
  };

  deltaDrag = 0;

  goToEnd = false;

  static propTypes = {
    pathDraw: PropTypes.string,
    left: PropTypes.string,
    top: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    handleDrag: PropTypes.func,
    handleDragEnd: PropTypes.func,
    handleDragStart: PropTypes.func
  };

  static defaultProps = {
    pathDraw: "M 150 300 L 350 300",
    left: "0",
    top: "0",
    height: "500",
    width: "500",
    handleDrag: () => {},
    handleDragEnd: () => {},
    handleDragStart: () => {}
  };

  componentDidMount() {
    this.setState({
      elStart: {
        x: this.coordValueAlongPath("x", 0),
        y: this.coordValueAlongPath("y", 0)
      },
      elEnd: {
        x: this.coordValueAlongPath("x", 1),
        y: this.coordValueAlongPath("y", 1)
      }
    });

    window.addEventListener("mouseup", this.handleDragEnd, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.handleDragEnd, {
      passive: true
    });
    cancelAnimationFrame(this.moveStar);
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
    const { handleDrag } = this.props;
    const { elStart, elEnd } = this.state;

    const mousePosinSvgElement = {
      x: e.clientX - this.svgRef.current.getBoundingClientRect().x,
      y: e.clientY - this.svgRef.current.getBoundingClientRect().y
    };

    const distanceCursorFromOrigine = this.distanceBtwPoints(
      elStart.x,
      elStart.y,
      mousePosinSvgElement.x,
      mousePosinSvgElement.y
    );

    const distanceCursorFromEnd = this.distanceBtwPoints(
      elEnd.x,
      elEnd.y,
      mousePosinSvgElement.x,
      mousePosinSvgElement.y
    );
    this.deltaDrag =
      distanceCursorFromOrigine /
      (distanceCursorFromOrigine + distanceCursorFromEnd);

    const dragElementPos = {
      x: this.coordValueAlongPath("x", this.deltaDrag, elStart.x),
      y: this.coordValueAlongPath("y", this.deltaDrag, elStart.y)
    };

    this.dragCircle.current.style.transform = `
      translate3d(
        ${dragElementPos.x}px,
        ${dragElementPos.y}px,
        0
      )
    `;

    handleDrag(this.deltaDrag);

    if (this.deltaDrag > 0.9) {
      this.goToEnd = true;
      this.handleDragEnd();
    }
  };

  handleDragStart = () => {
    const { handleDragStart } = this.props;
    handleDragStart();
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
    const { handleDrag, handleDragEnd } = this.props;
    const { elStart } = this.state;

    const ease = 0.07;

    if (this.goToEnd) {
      this.deltaDrag =
        this.deltaDrag < 1 ? this.easing(this.deltaDrag, 1.1, ease) : 1;
    } else {
      this.deltaDrag =
        this.deltaDrag > 0 ? this.easing(this.deltaDrag, -0.1, ease) : 0;
    }

    const elementPos = {
      x: this.coordValueAlongPath("x", this.deltaDrag, elStart.x),
      y: this.coordValueAlongPath("y", this.deltaDrag, elStart.y)
    };

    this.dragCircle.current.style.transform = `
      translate3d(
        ${elementPos.x}px,
        ${elementPos.y}px,
        0
      )
    `;

    handleDrag(Math.min(1, Math.max(0, this.deltaDrag)));

    if (this.deltaDrag !== 1 && this.deltaDrag !== 0)
      requestAnimationFrame(this.moveStar);

    if (this.deltaDrag === 1) handleDragEnd();
  };

  render() {
    const { pathDraw, height, width, top, left } = this.props;
    const { elStart, elEnd } = this.state;
    return (
      <>
        <Svg
          ref={this.svgRef}
          version="1.1"
          baseProfile="full"
          width={height}
          height={width}
          xmlns="http://www.w3.org/2000/svg"
          top={top}
          left={left}
        >
          <path
            ref={this.path}
            d={pathDraw}
            fill="transparent"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="1 7"
            id="wire"
          />

          <circle
            cx={elEnd.x}
            cy={elEnd.y}
            r="20"
            fill="transparent"
            stroke="white"
          />

          <circle
            ref={this.dragCircle}
            cx={elStart.x}
            cy={elStart.y}
            r="10"
            fill="white"
            strokeWidth="1"
            onMouseDown={() => this.handleDragStart()}
          />
        </Svg>
      </>
    );
  }
}

export default DragNDrop;
