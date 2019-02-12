import React from "react";
import PropTypes from "prop-types";
/* eslint-disable */

class Video extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    number: PropTypes.number,
    futur: PropTypes.number,
    increaseVideo: PropTypes.func
  };

  static defaultProps = {
    path: "",
    number: 1,
    futur: 1,
    increaseVideo: () => {}
  };

  render() {
    const { path, number, increaseVideo, futur } = this.props;
    return (
      <div>
        <video
          style={{ display: number === 1 ? "block" : "none" }}
          src={`./assets/videos/${path}/${path}1.mp4`}
          type="video/mp4"
          autoPlay
          playsInline
          loop={path === "flirtfactory" ? true : false}
          muted
        />
        {path == "futur" && (
          <>
            <video
              style={{ display: (number === 2 && futur === 1) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}2_1.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              muted
              onEnded={increaseVideo}
            />
            <video
              style={{ display: (number === 2 && futur === 2) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}2_2.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              muted
              onEnded={increaseVideo}
            />
            <video
              style={{ display: (number === 2 && futur === 3) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}2_3.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              muted
              onEnded={increaseVideo}
            />
            <video
              style={{ display: (number === 2 && futur === 4) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}2_4.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              muted
              onEnded={increaseVideo}
            />
            <video
              style={{ display: (number === 3 && futur === 1) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}3_1.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              loop
              muted
            />
            <video
              style={{ display: (number === 3 && futur === 2) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}3_2.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              loop
              muted
            />
            <video
              style={{ display: (number === 3 && futur === 3) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}3_3.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              loop
              muted
            />
            <video
              style={{ display: (number === 3 && futur === 4) ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}3_4.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              loop
              muted
            />
          </>
        )}
        {path !== "futur" && (
          <>
            {path !== "flirtfactory" && (
              <>
                <video
                  style={{ display: number === 2 ? "block" : "none" }}
                  src={`./assets/videos/${path}/${path}2.mp4`}
                  type="video/mp4"
                  autoPlay
                  playsInline
                  muted
                  onEnded={increaseVideo}
                />
                <video
                  style={{ display: number === 3 ? "block" : "none" }}
                  src={`./assets/videos/${path}/${path}3.mp4`}
                  type="video/mp4"
                  autoPlay
                  playsInline
                  loop
                  muted
                />
              </>
            )}
          </>
        )}
      </div>
    );
  }
}
export default Video;
