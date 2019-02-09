import React from "react";

import PropTypes from "prop-types";

import { TextContext } from "../index";

import { Markup } from "interweave";

import {
  CatchphraseWrapper,
  CatchphraseContainer,
  CatchphraseVideoContainer
} from "./element";

class Catchphrase extends React.Component {
  static propTypes = {
    showed: PropTypes.bool,
    ageCatchphrase: PropTypes.number,
    handleClick: PropTypes.func,
    updateAgeCatchphrase: PropTypes.func
  };

  static defaultProps = {
    showed: false,
    ageCatchphrase: 0,
    handleClick: () => {},
    updateAgeCatchphrase: () => {}
  };

  state = {
    expectedTime: 0
  };

  videoCatchphrase = React.createRef();

  constructor(props) {
    super(props);
    this.mounted = false;
    this.intervalRewind = 0;
    this.raf = () => {};
  }

  componentDidMount() {
    this.mounted = true;
    this.runRaf();
  }

  componentDidUpdate(prevProps) {
    const { ageCatchphrase } = this.props;
    if (ageCatchphrase !== prevProps.ageCatchphrase) {
      this.updateCatchphrase();
    }
  }

  updateCatchphrase = () => {
    const { ageCatchphrase } = this.props;
    if (this.mounted) {
      switch (ageCatchphrase) {
        case 0:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 0.05
          });
          break;
        case 1:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 1.01
          });
          break;
        case 2:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 2.02
          });
          break;
        case 3:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 3.03
          });
          break;
        case 4:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 4.04
          });
          break;
        case 5:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 5.05
          });
          break;
        case 6:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 6.06
          });
          break;
        case 7:
          this.videoCatchphrase.current.play();
          this.setState({
            expectedTime: 7.07
          });
          break;
        default:
          this.videoCatchphrase.current.currentTime = 0;
      }
    }
  };

  runRaf = () => {
    // console.log(this.videoCatchphrase.current.currentTime);
    const { expectedTime } = this.state;
    if (this.videoCatchphrase.current.currentTime > expectedTime) {
      this.videoCatchphrase.current.pause();
    }
    this.raf = window.requestAnimationFrame(this.runRaf);
  };

  render() {
    const {
      showed,
      ageCatchphrase,
      handleClick,
      updateAgeCatchphrase
    } = this.props;

    return (
      <>
        {showed && (
          <TextContext.Consumer>
            {value => (
              <CatchphraseWrapper className="globalview--catchphrase">
                <CatchphraseContainer>
                  <button
                    id="catchphrase--close"
                    type="button"
                    onClick={() => handleClick()}
                  >
                    <svg width="40px" height="40px" viewBox="0 0 40 40">
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Artboard-Copy-53"
                          transform="translate(-1761.000000, -565.000000)"
                        >
                          <g
                            id="Close"
                            transform="translate(1761.000000, 565.000000)"
                          >
                            <g
                              id="Group-3"
                              transform="translate(10.000000, 10.000000)"
                              stroke="#516081"
                            >
                              <rect
                                id="Rectangle"
                                transform="translate(10.000000, 10.500000) rotate(-315.000000) translate(-10.000000, -10.500000) "
                                x="8.5"
                                y="-0.5"
                                width="3"
                                height="22"
                              />
                              <rect
                                id="Rectangle-Copy-2"
                                transform="translate(10.000000, 10.500000) rotate(-45.000000) translate(-10.000000, -10.500000) "
                                x="8.5"
                                y="-0.5"
                                width="3"
                                height="22"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                  <div id="catchphrase--container">
                    <div className="catchphrase--catchphrase">
                      <Markup
                        content={value.epoques[ageCatchphrase].catchphrase}
                      />
                    </div>
                    <div className="catchphrase--title">
                      <div>
                        <h1>{value.epoques[ageCatchphrase].name}</h1>
                      </div>
                      <div className="catchphrase--line" />
                    </div>
                    <div className="catchphrase--summary">
                      <Markup content={value.epoques[ageCatchphrase].summary} />
                    </div>
                    <div className="catchphrase--nav">
                      <button
                        type="button"
                        className="catchphrase--btn prev"
                        onClick={() => updateAgeCatchphrase(false)}
                      >
                        <svg width="50px" height="50px" viewBox="0 0 80 80">
                          <g fill="none" strokeWidth="1">
                            <rect
                              className="rect"
                              stroke="#516081"
                              fill="none"
                              x="5.5"
                              y="5.5"
                              width="63"
                              height="63"
                            />
                            <polyline
                              className="polyline"
                              stroke="#516081"
                              strokeWidth="2"
                              transform="translate(36.962191, 37.302579) rotate(-180.000000) translate(-36.962191, -37.302579) "
                              points="33 44.605159 40.9243811 37.0540797 33 30"
                            />
                          </g>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="catchphrase--btn next"
                        onClick={() => updateAgeCatchphrase(true)}
                      >
                        <svg width="50px" height="50px" viewBox="0 0 80 80">
                          <g transform="translate(-235.000000, -773.000000)">
                            <g transform="translate(151.000000, 773.000000)">
                              <g
                                fill="none"
                                transform="translate(84.000000, 0.000000)"
                              >
                                <rect
                                  className="rect"
                                  stroke="#516081"
                                  fill="none"
                                  x="5"
                                  y="5"
                                  width="64"
                                  height="64"
                                />
                                <polyline
                                  className="polyline"
                                  fill="none"
                                  stroke="#516081"
                                  strokeWidth="2"
                                  points="33 44.605159 40.9243811 37.0540797 33 30"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </CatchphraseContainer>
                <CatchphraseVideoContainer>
                  <video
                    ref={this.videoCatchphrase}
                    src="./assets/videos/flirtfactory/catchphrase.mp4"
                    type="video/mp4"
                    muted
                    loop
                  />
                </CatchphraseVideoContainer>
              </CatchphraseWrapper>
            )}
          </TextContext.Consumer>
        )}
      </>
    );
  }
}

export default Catchphrase;
