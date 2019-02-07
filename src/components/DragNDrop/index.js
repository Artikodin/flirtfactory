import React from "react";
import PropTypes from "prop-types";

import { Svg, Circle } from "./element";

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

  dragging = false;

  goToEnd = false;

  static propTypes = {
    display: PropTypes.bool,
    waited: PropTypes.bool,
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
    display: true,
    waited: true,
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

    this.svgRef.current.addEventListener("mouseup", this.handleDragEnd, {
      passive: true
    });
  }

  componentWillUnmount() {
    this.svgRef.current.removeEventListener("mouseup", this.handleDragEnd, {
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
    this.dragging = true;
    this.svgRef.current.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
  };

  handleDragEnd = () => {
    this.svgRef.current.removeEventListener("mousemove", this.handleMouseMove, {
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

    if (this.deltaDrag !== 1 && this.deltaDrag !== 0) {
      requestAnimationFrame(this.moveStar);
    } else {
      if (this.dragging) {
        handleDragEnd();
      }
      this.dragging = false;
    }

    if (this.deltaDrag === 1) handleDragEnd();
  };

  render() {
    const { pathDraw, height, width, top, left, display, waited } = this.props;
    const { elStart, elEnd } = this.state;
    return (
      <>
        <Svg
          ref={this.svgRef}
          className={waited || display ? "dragndrop--hide" : ""}
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
            r="25"
            fill="transparent"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="0 6"
            strokeLinecap="round"
          />

          <Circle
            ref={this.dragCircle}
            cx={elStart.x}
            cy={elStart.y}
            r="25"
            fill="transparent"
            stroke="white"
            onMouseDown={() => this.handleDragStart()}
          >
            <g>
              <svg>
                <path
                  fill="white"
                  d="M144.61,255c0-61.12,49.65-110.67,110.89-110.67S366.39,193.88,366.39,255S316.74,365.67,255.5,365.67
	c-29.41,0-57.61-11.66-78.41-32.41C156.29,312.5,144.61,284.35,144.61,255z M211.91,500.13c28.83,5.16,58.35,5.16,87.19,0
	l15.59-57.27c11.02-3.47,21.72-7.9,31.96-13.26l51.67,29.53c24.03-16.78,44.92-37.64,61.73-61.62l-29.59-51.57
	c5.36-10.22,9.81-20.89,13.29-31.88l57.39-15.56c5.17-28.77,5.17-58.24,0-87.01l-57.39-15.56c-3.48-11-7.92-21.68-13.28-31.9
	l29.59-51.57c-16.81-23.98-37.71-44.83-61.74-61.6L346.63,80.4c-10.24-5.35-20.93-9.79-31.95-13.26L299.09,9.87
	c-28.83-5.16-58.35-5.16-87.19,0l-15.59,57.27c-11.02,3.47-21.72,7.9-31.96,13.25l-51.67-29.53C88.66,67.64,67.77,88.5,50.96,112.48
	l29.59,51.57c-5.36,10.22-9.81,20.89-13.29,31.88L9.87,211.49c-5.17,28.77-5.17,58.24,0,87.01l57.39,15.57
	c3.48,11,7.92,21.68,13.28,31.9l-29.59,51.57c16.81,23.98,37.71,44.83,61.74,61.6l51.67-29.53c10.24,5.35,20.93,9.79,31.95,13.26
	L211.91,500.13z"
                />
              </svg>
            </g>
          </Circle>
        </Svg>
      </>
    );
  }
}

export default DragNDrop;
