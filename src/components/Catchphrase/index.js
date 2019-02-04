import React from "react";

import PropTypes from "prop-types";

import { TextContext } from "../index";

import { Markup } from "interweave";

import { CatchphraseWrapper, CatchphraseContainer } from "./element";

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
              <CatchphraseWrapper>
                <CatchphraseContainer>
                  <h1 className="catchphrase--title">
                    {value.epoques[json].name}
                  </h1>
                  <div className="catchphrase--img">
                    <img src={`../assets/img/global/${json}.jpg`} alt="" />
                  </div>
                  <div className="catchphrase--summary">
                    <Markup content={value.epoques[json].summary} />
                  </div>
                  <div className="catchphrase--catchphrase">
                    <Markup content={value.epoques[json].catchphrase} />
                  </div>
                </CatchphraseContainer>
              </CatchphraseWrapper>
            )}
          </TextContext.Consumer>
        )}
      </>
    );
  }
}

export default Catchphrase;
