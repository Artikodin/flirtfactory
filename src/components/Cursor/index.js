/* eslint-disable no-restricted-syntax */
import React from "react";
import PropTypes from "prop-types";

import { Pointer } from "./element";
import Next from "./Next";
import Default from "./Default";
import { ProgressContext } from "..";

class Cursor extends React.Component {
  static propTypes = {
    periode: PropTypes.string.isRequired,
    pathTo: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  static defaultProps = {
    history: {}
  };

  // eslint-disable-next-line consistent-return
  checkIsTrue = ages => {
    const { periode } = this.props;
    if (periode) {
      const interestTags = ages[periode].points;
      // eslint-disable-next-line guard-for-in
      for (const interestTag of interestTags) {
        if (!interestTag) return false;
      }
      return true;
    }
  };

  handleHolded = () => {
    const { history } = this.props;
    const { pathTo } = this.props;
    history.push(`/${pathTo}`);
  };

  render() {
    return (
      <ProgressContext.Consumer>
        {({ ages }) => (
          <Pointer>
            {this.checkIsTrue(ages) ? (
              <Next onHolded={() => this.handleHolded()} />
            ) : (
              <Default />
            )}
          </Pointer>
        )}
      </ProgressContext.Consumer>
    );
  }
}

export default Cursor;
