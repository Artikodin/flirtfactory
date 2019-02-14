import React from "react";

import { Page, VoiceAi } from "../../components";

// eslint-disable-next-line react/prefer-stateless-function
class Test extends React.Component {
  render() {
    return (
      <Page transition={false}>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "40%",
            backgroundColor: "white",
            padding: 50
          }}
        >
          <VoiceAi stayOpen onAnswer {...this.props} />
        </div>
      </Page>
    );
  }
}

export default Test;
