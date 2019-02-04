import React from "react";

import { Page, GenericTag } from "../../components";

import { Markup } from "interweave";

class Test extends React.Component {
  testDiv = React.createRef();

  render() {
    return (
      <Page>
        <GenericTag title="terwerwerw" xPos="500px" yPos="200px">
          <Markup content="lorem slsfdlksjf  asld ha falkdhf kadsflkasdhf kasdfh" />
        </GenericTag>
      </Page>
    );
  }
}

export default Test;
