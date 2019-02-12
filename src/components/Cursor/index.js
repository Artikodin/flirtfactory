/* eslint-disable no-restricted-syntax */
import React from "react";

import { Pointer } from "./element";
import Next from "./Next";
import Default from "./Default";
import { ProgressContext } from "..";

class Cursor extends React.Component {
  // state = {
  //   cursor: "default"
  // };

  componentDidMount() {}

  checkIsTrue = ages => {
    console.log(ages);
    const interestTags = ages.antiquite.points;
    // eslint-disable-next-line guard-for-in
    for (const interestTag of interestTags) {
      if (!interestTag) return false;
      return true;
    }
  };

  render() {
    // const { cursor } = this.state;
    return (
      <ProgressContext.Consumer>
        {({ ages }) => (
          <Pointer>{this.checkIsTrue(ages) ? <Next /> : <Default />}</Pointer>
        )}
      </ProgressContext.Consumer>
    );
  }
}

export default Cursor;
