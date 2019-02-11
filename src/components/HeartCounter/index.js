import React from "react";
import PropTypes from "prop-types";

import { HeartCounterContainer } from "./element";

/* eslint-disable */

class HeartCounter extends React.Component {
  static propTypes = {
    progress: PropTypes.array
  };

  static defaultProps = {
    progress: []
  };

  state = {
    progression: 0
  };

  getProgression = (total, progression) => {
    console.log(progression);
    switch (progression) {
      case 0:
        return (
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-155.000000, -64.000000)"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <path d="M167.608014,85.7766447 C144.961014,73.4226447 161.340014,58.0636447 167.608014,68.4076447 C173.877014,58.0636447 190.257014,73.4226447 167.608014,85.7766447 Z" />
            </g>
          </g>
        );
      case 1:
        switch (total) {
          case 2:
            return (
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="About-Copy-2"
                  transform="translate(-289.ffffff, -64.ffffff)"
                >
                  <g id="Coeur1/2" transform="translate(290.ffffff, 65.ffffff)">
                    <path
                      d="M11.608,20.997 C-11.039,8.643 5.34,-6.716 11.608,3.628 C17.877,-6.716 34.257,8.643 11.608,20.997 Z"
                      id="Path"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <polygon
                      id="Path-5"
                      fill="#ffffff"
                      points="11.6088821 20.7401246 4.37574578 16.1698931 0.554851539 11.5996615 22.4004676 11.5996615 15.20211 19.2051277"
                    />
                  </g>
                </g>
              </g>
            );
            break;
          case 3:
            return (
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="About-Copy-2"
                  transform="translate(-236.ffffff, -64.ffffff)"
                >
                  <g id="Coeur1/3" transform="translate(237.ffffff, 65.ffffff)">
                    <path
                      d="M11.608,20.997 C-11.039,8.643 5.34,-6.716 11.608,3.628 C17.877,-6.716 34.257,8.643 11.608,20.997 Z"
                      id="Path"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <polygon
                      id="Path-5"
                      fill="#ffffff"
                      points="11.6088821 20.7401246 2.75612655 13.9281622 21.0170855 13.9281622 15.20211 19.2051277"
                    />
                  </g>
                </g>
              </g>
            );
            break;
          case 4:
            return (
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="About-Copy-2"
                  transform="translate(-188.ffffff, -64.ffffff)"
                >
                  <g id="Coeur1/4" transform="translate(189.ffffff, 65.ffffff)">
                    <path
                      d="M11.608,20.997 C-11.039,8.643 5.34,-6.716 11.608,3.628 C17.877,-6.716 34.257,8.643 11.608,20.997 Z"
                      id="Path"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <polygon
                      id="Path-5"
                      fill="#ffffff"
                      points="11.6088821 20.7401246 4.31843608 16.019659 18.8809874 16.019659 15.20211 19.2051277"
                    />
                  </g>
                </g>
              </g>
            );
            break;
          default:
            console.log(total);
        }
        break;
      default:
        console.log(total);
    }
  };

  render() {
    let { progression } = this.state;
    const { progress } = this.props;
    progress.forEach(function(point) {
      if (point) {
        progression = progression + 1;
      }
    });
    return (
      <HeartCounterContainer>
        {/* <svg
          width="26px"
          height="24px"
          viewBox="0 0 25 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {this.getProgression(progress.length, progression)}
        </svg> */}

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27 25"
        >
          <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            d="M13.61,22.78c-22.65-12.35-6.27-27.71,0-17.37C19.88-4.94,36.26,10.42,13.61,22.78z"
          />
        </svg>
        <p>
          {progression} / {progress.length}
        </p>
      </HeartCounterContainer>
    );
  }
}

export default HeartCounter;
