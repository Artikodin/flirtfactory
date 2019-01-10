import React from "react";

import { Pointer } from "./element";
import Default from "./Default";

class Cursor extends React.Component {
  state = {
    cursor: "default"
  };

  render() {
    const { cursor } = this.state;
    console.log(cursor);
    return (
      <Pointer>
        <Default />
      </Pointer>
    );
  }
}

export default Cursor;
