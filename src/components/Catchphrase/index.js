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
    json: PropTypes.number
  };

  static defaultProps = {
    showed: false,
    json: 0
  };

  render() {
    const { showed, json } = this.props;
    return (
      <>
        {showed && (
          <TextContext.Consumer>
            {value => (
              <CatchphraseWrapper className="globalview--catchphrase">
                <CatchphraseContainer>
                  <button type="button">retour à la vue globale</button>
                  <div>
                    <div className="catchphrase--catchphrase">
                      <Markup content={value.epoques[json].catchphrase} />
                    </div>
                    <h1 className="catchphrase--title">
                      {value.epoques[json].name}
                    </h1>
                    <div className="catchphrase--summary">
                      <Markup content={value.epoques[json].summary} />
                    </div>
                  </div>
                </CatchphraseContainer>
                <CatchphraseVideoContainer>
                  <video
                    src="./assets/videos/flirtfactory/catchphrase.mp4"
                    autoPlay
                    playsInline
                    loop
                    type="video/mp4"
                    muted
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
