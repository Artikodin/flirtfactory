import React from "react";
import PropTypes from "prop-types";
/* eslint-disable */

class Video extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    number: PropTypes.number
  };

  static defaultProps = {
    path: "",
    number: 1
  };

  constructor(props) {
    super(props);
    this.state = { videoLoaded: "loading" };
  }

  loadVideo = () => {
    this.setState({ videoLoaded: "loaded" });
  };

 componentDidMount() {
  }

  render() {
    const { path, number, increaseVideo } = this.props;
    return (
      <div>
        <video
          style={{ display: number === 1?'block' : 'none' }}
          src={`./assets/videos/${path}/${path}1.mp4`}
          type="video/mp4"
          autoPlay
          playsInline
          loop
          muted
          onCanPlay={this.loadVideo}
        />
        <video
          style={{ display: number === 2?'block' : 'none' }}
          src={`./assets/videos/${path}/${path}2.mp4`}
          type="video/mp4"
          autoPlay
          playsInline
          muted
          onCanPlay={this.loadVideo}
          onEnded={increaseVideo}
        />
        <video
          style={{ display: number === 3?'block' : 'none' }}
          src={`./assets/videos/${path}/${path}3.mp4`}
          type="video/mp4"
          autoPlay
          playsInline
          loop
          muted
          onCanPlay={this.loadVideo}
        />
      </div>
    );
  }
}
export default Video;
