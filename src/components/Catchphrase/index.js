import React from "react";

import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import posed, { PoseGroup } from "react-pose";
import { easing } from "popmotion";

import { TextContext, Picto } from "../index";

import { Markup } from "interweave";

import {
  CatchphraseWrapper,
  CatchphraseContainer,
  CatchphraseVideoContainer
} from "./element";

class Catchphrase extends React.Component {
  static propTypes = {
    forward: PropTypes.bool,
    showed: PropTypes.bool,
    ageCatchphrase: PropTypes.string,
    nbCatchphrase: PropTypes.number,
    handleClick: PropTypes.func,
    updateAgeCatchphrase: PropTypes.func
  };

  static defaultProps = {
    forward: true,
    showed: false,
    nbCatchphrase: 0,
    ageCatchphrase: "",
    handleClick: () => {},
    updateAgeCatchphrase: () => {}
  };

  state = {
    expectedTime: 0
  };

  videoCatchphraseForward = React.createRef();

  videoCatchphraseBackward = React.createRef();

  constructor(props) {
    super(props);
    this.mounted = false;
    this.intervalRewind = 0;
    this.raf = () => {};
    this.videoElement = {};
    this.expectedTimeValues = [
      [0, 0],
      [1.01, 7.01],
      [2.01, 6.01],
      [3.01, 5.01],
      [4.01, 4.01],
      [5.01, 3.01],
      [6.01, 2.01],
      [7.01, 1.01]
    ];
  }

  /* eslint-disable */

  componentDidUpdate(prevProps) {
    const { nbCatchphrase, forward, showed } = this.props;
    if (showed !== prevProps.showed && showed) {
      this.videoCatchphraseForward.current.currentTime = this.expectedTimeValues[
        nbCatchphrase
      ][0];
      this.videoCatchphraseBackward.current.currentTime = this.expectedTimeValues[
        nbCatchphrase
      ][1];
      this.videoElement = this.videoCatchphraseForward;
      this.runRaf();
    }
    if (nbCatchphrase !== prevProps.nbCatchphrase) {
      this.updateCatchphraseVideo();
    }
    if (forward) {
      this.videoElement = this.videoCatchphraseForward;
    } else {
      this.videoElement = this.videoCatchphraseBackward;
    }
  }

  updateCatchphraseVideo = () => {
    const { nbCatchphrase, forward, showed } = this.props;
    if (showed) {
      this.videoCatchphraseForward.current.play();
      this.videoCatchphraseBackward.current.play();
      if (forward) {
        this.setState({
          expectedTime: this.expectedTimeValues[nbCatchphrase][0]
        });
      } else {
        this.setState({
          expectedTime: this.expectedTimeValues[nbCatchphrase][1]
        });
      }
    }
  };

  runRaf = () => {
    const { nbCatchphrase, forward, showed } = this.props;
    const { expectedTime } = this.state;
    if (showed === false) {
      return;
    }
    if (forward) {
      if (nbCatchphrase === 0) {
        if (
          this.videoElement.current.currentTime > 0 &&
          this.videoElement.current.currentTime < 0.05
        ) {
          this.videoCatchphraseForward.current.pause();
          this.videoCatchphraseBackward.current.currentTime = this.expectedTimeValues[
            nbCatchphrase
          ][1];
          this.videoCatchphraseBackward.current.pause();
        }
      } else {
        if (this.videoElement.current.currentTime > expectedTime) {
          this.videoCatchphraseForward.current.pause();
          this.videoCatchphraseBackward.current.currentTime = this.expectedTimeValues[
            nbCatchphrase
          ][1];
          this.videoCatchphraseBackward.current.pause();
        }
      }
    } else {
      if (nbCatchphrase === 0) {
        if (
          this.videoElement.current.currentTime > 0 &&
          this.videoElement.current.currentTime < 0.05
        ) {
          this.videoCatchphraseBackward.current.pause();
          this.videoCatchphraseForward.current.currentTime = this.expectedTimeValues[
            nbCatchphrase
          ][0];
          this.videoCatchphraseForward.current.pause();
        }
      } else {
        if (this.videoElement.current.currentTime > expectedTime) {
          this.videoCatchphraseBackward.current.pause();
          this.videoCatchphraseForward.current.currentTime = this.expectedTimeValues[
            nbCatchphrase
          ][0];
          this.videoCatchphraseForward.current.pause();
        }
      }
    }
    this.raf = window.requestAnimationFrame(this.runRaf);
  };

  changeRoute = (route) => {
    this.props.history.push(`/${route}`);
  }

  render() {
    const {
      forward,
      showed,
      nbCatchphrase,
      handleClick,
      updateAgeCatchphrase,
      ageCatchphrase
    } = this.props;

    return (
      <>
        <PoseGroup id="CatchphraseContainer">
          {showed && (
            <AnimatedCatchphraseWrapper
              key="catchphrase"
              className="globalview--catchphrase"
            >
              <TextContext.Consumer>
                {value => (
                  <>
                    <CatchphraseContainer>
                      <div id="catchphrase--container">
                        <div className="catchphrase--catchphrase">
                          <Markup
                            content={value.epoques[nbCatchphrase].catchphrase}
                          />
                          <div className="catchphrase--author">
                            {value.epoques[nbCatchphrase].author}
                          </div>
                        </div>
                        <div className="catchphrase--title">
                          <Picto name={ageCatchphrase} color={"#516081"} />
                          <h1>{value.epoques[nbCatchphrase].name}</h1>
                        </div>
                        <div className="catchphrase--summary">
                          <Markup
                            content={value.epoques[nbCatchphrase].summary}
                          />
                          <a className="catchphrase--link" onClick={() => this.changeRoute(ageCatchphrase)}>Retourner à l'époque</a>
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
                        ref={this.videoCatchphraseForward}
                        style={{ display: forward ? "block" : "none" }}
                        src="./assets/videos/flirtfactory/catchphrase1.mp4"
                        type="video/mp4"
                        muted
                        loop
                      />
                      <video
                        ref={this.videoCatchphraseBackward}
                        style={{ display: forward ? "none" : "block" }}
                        src="./assets/videos/flirtfactory/catchphrase2.mp4"
                        type="video/mp4"
                        muted
                        loop
                      />
                    <button
                        id="catchphrase--close"
                        type="button"
                        onClick={() => handleClick()}
                      >
                        <svg
                          width="10px"
                          height="10px"
                          viewBox="0 0 20 20"
                          version="1.1"
                          fill="#516081"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            transform="translate(-1830.000000, -70.000000)"
                          >
                            <g
                              id="Group-6"
                              transform="translate(1790.000000, 30.000000)"
                            >
                              <g
                                id="Croix"
                                transform="translate(40.000000, 40.000000)"
                              >
                                <polygon points="16.8781393 2.98427949e-13 19.4419073 2.563768 2.563768 19.4419073 3.0375702e-13 16.8781393" />
                                <polygon points="19.4419073 16.8781393 16.8781393 19.4419073 3.0908609e-13 2.563768 2.563768 2.89546165e-13" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </CatchphraseVideoContainer>
                  </>
                )}
              </TextContext.Consumer>
            </AnimatedCatchphraseWrapper>
          )}
        </PoseGroup>
      </>
    );
  }
}

const AnimatedCatchphraseWrapper = posed(CatchphraseWrapper)({
  enter: {
    left: 0,
    // opacity: 1,
    transition: {
      duration: 1500,
      ease: easing.backInOut
    }
  },
  exit: {
    left: "100vw",
    // opacity: 0,
    transition: {
      duration: 1500,
      ease: easing.backInOut
    }
  }
});

export default withRouter(Catchphrase);
