import React from "react";

import { Pointer } from "./element";
import Next from "./Next";

class Cursor extends React.Component {
  // state = {
  //   cursor: "default"
  // };

  componentDidMount() {}

  render() {
    // const { cursor } = this.state;
    return (
      <Pointer>
        <Next />
      </Pointer>
    );
  }
}

export default Cursor;
