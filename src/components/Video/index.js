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

  loadVideo = () => {};

  render() {
    const { path, number, increaseVideo, futur } = this.props;
    console.log(futur);
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
          onCanPlay={this.loadVideo}
        />
        {path == "futur" && (
          <>
            <video
              style={{ display: number === 2 ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}2_${futur}.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              muted
              onCanPlay={this.loadVideo}
              onEnded={increaseVideo}
            />
            <video
              style={{ display: number === 3 ? "block" : "none" }}
              src={`./assets/videos/${path}/${path}3_${futur}.mp4`}
              type="video/mp4"
              autoPlay
              playsInline
              loop
              muted
              onCanPlay={this.loadVideo}
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
                  onCanPlay={this.loadVideo}
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
                  onCanPlay={this.loadVideo}
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
