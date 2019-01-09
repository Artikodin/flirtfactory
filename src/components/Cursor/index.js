import React from "react";

import { Pointer } from "./element";
import Next from "./Next";

class Cursor extends React.Component {
  state = {
    cursor: "default"
  };

  render() {
    const { cursor } = this.state;
    console.log(cursor);
    return (
      <Pointer>
        <Next />
      </Pointer>
    );
  }
}

export default Cursor;
