import React from "react";

import { Pointer } from "./element";
import Default from "./Default";

class Cursor extends React.Component {
  // state = {
  //   cursor: "default"
  // };

  componentDidMount() {}

  render() {
    // const { cursor } = this.state;
    return (
      <Pointer>
        <Default />
      </Pointer>
    );
  }
}

export default Cursor;
