import React from "react";
import PropTypes from "prop-types";

import { Svg, Circle, Gear } from "./element";

class DragNDrop extends React.Component {
  path = React.createRef();

  svgRef = React.createRef();

  dragCircle = React.createRef();

  dragGear = React.createRef();

  state = {
    elStart: {
      x: 0,
      y: 0
    },
    elEnd: {
      x: 0,
      y: 0
    },
    hover: false,
    clicked: false,
    wait: false
  };

  // ON GERE ICI L'APPARITION DU DRAG AND DROP

  timeToWait = 5000;

  // ON LUI AJOUTE LA CLASS DRAGNDROP--HIDE

  deltaDrag = 0;

  dragging = false;

  goToEnd = false;

  static propTypes = {
    display: PropTypes.bool,
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
    // setTimeout(() => {
    //   this.setState({
    //     wait: true
    //   });
    // }, this.timeToWait);

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

    this.dragGear.current.style.transform = `
      translate3d(
        ${dragElementPos.x}px,
        ${dragElementPos.y}px,
        0
      )
    `;

    handleDrag(this.deltaDrag);

    if (this.deltaDrag > 0.7) {
      this.goToEnd = true;
      this.handleDragEnd();
    }
  };

  handleMouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  handleMouseLeave = () => {
    const { clicked } = this.state;
    if (!clicked) {
      this.setState({
        hover: false
      });
    }
  };

  handleDragStart = () => {
    const { handleDragStart } = this.props;
    handleDragStart();
    this.dragging = true;
    this.svgRef.current.addEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    this.setState({
      clicked: true
    });
  };

  handleDragEnd = () => {
    this.svgRef.current.removeEventListener("mousemove", this.handleMouseMove, {
      passive: true
    });
    this.setState({
      clicked: false,
      hover: false
    });
    this.moveStar();
  };

  moveStar = () => {
    const { handleDrag, handleDragEnd } = this.props;
    const { elStart } = this.state;

    const ease = 0.07;
    const easeEnd = 0.04;

    if (this.goToEnd) {
      this.deltaDrag =
        this.deltaDrag < 1 ? this.easing(this.deltaDrag, 1.1, easeEnd) : 1;
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

    this.dragGear.current.style.transform = `
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
    const { pathDraw, height, width, top, left, display } = this.props;
    const { elStart, elEnd, hover } = this.state;
    const gearPos = {
      x: -4.268 + elStart.x,
      y: 0 + elStart.y
    };
    return (
      <>
        <Svg
          // className={display ? "dragndrop--hide" : "dragndrop--show"}
          key="draganddrop"
          ref={this.svgRef}
          version="1.1"
          baseProfile="full"
          width={height}
          height={width}
          xmlns="http://www.w3.org/2000/svg"
          top={top}
          left={left}
          viewBox="0 0 512 512"
        >
          <path
            ref={this.path}
            d={pathDraw}
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="1 5"
            strokeLinecap="round"
            id="wire"
          />

          <circle
            cx={elEnd.x}
            cy={elEnd.y}
            r="25"
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="0 4"
            strokeLinecap="round"
          />

          <Circle
            ref={this.dragCircle}
            cx={elStart.x}
            cy={elStart.y}
            r="25"
            fill={hover ? "white" : "transparent"}
            stroke="white"
            onMouseDown={() => this.handleDragStart()}
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
          />

          <Gear
            onMouseDown={() => this.handleDragStart()}
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
            ref={this.dragGear}
            fill={hover ? "#68759f" : "white"}
            d={`m
            ${gearPos.x}
            ${gearPos.y}
            c0-2.354 1.912-4.262 4.271-4.262s4.271 1.908 4.271 4.262-1.912 4.262-4.271 4.262c-1.133 0-2.219-.449-3.02-1.248a4.258 4.258 0 0 1-1.251-3.014zm2.592 9.44a9.531 9.531 0 0 0 3.358 0l.6-2.206c.424-.134.836-.304 1.231-.511l1.99 1.137a9.652 9.652 0 0 0 2.377-2.373l-1.14-1.986a7.553 7.553 0 0 0 .512-1.228l2.21-.599c.199-1.108.199-2.243 0-3.351l-2.21-.599c-.134-.424-.305-.835-.511-1.229l1.14-1.986a9.643 9.643 0 0 0-2.378-2.372l-1.991 1.138a7.562 7.562 0 0 0-1.23-.511l-.6-2.206a9.531 9.531 0 0 0-3.358 0l-.6 2.206c-.424.134-.836.304-1.231.51l-1.99-1.137a9.657 9.657 0 0 0-2.377 2.373l1.14 1.986a7.553 7.553 0 0 0-.512 1.228l-2.21.599a9.474 9.474 0 0 0 0 3.351l2.21.6c.134.424 .305.835 .511 1.229l-1.14 1.986a9.643 9.643 0 0 0 2.378 2.372l1.99-1.137c.394.206 .806.377 1.23.511l.601 2.205z`}
          />
        </Svg>
      </>
    );
  }
}

export default DragNDrop;
