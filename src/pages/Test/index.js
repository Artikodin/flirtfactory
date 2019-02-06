import React from "react";

import { Page, GenericTag, ProgressContext } from "../../components";

import { Markup } from "interweave";

class Test extends React.Component {
  testDiv = React.createRef();

  render() {
    return (
      <Page>
        <ProgressContext.Consumer>
          {({ ages, unlockPoints }) => (
            <GenericTag
              unlocked={ages.antiquite.points[0]}
              unlockPoint={() => unlockPoints("antiquite", 0)}
              title="Michel"
              age="antiquite"
              pictonumber={0}
              xPos="20%"
              yPos="20%"
            >
              <Markup content="oidshguroeshgurowhghrheoh" />
            </GenericTag>
          )}
        </ProgressContext.Consumer>
      </Page>
    );
  }
}

export default Test;
