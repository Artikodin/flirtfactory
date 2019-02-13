import React from "react";

import { Page, AnimatedText } from "../../components";

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
          <AnimatedText>
          La mode était aux sérénades. Pour déclarer sa flamme, le prétendant, à l'image chantait son amour sous le balcon de sa Juliette. Mais auparavant, il devait effectuer d’incessants allers-retours dans la rue pour attirer son attention. Pas très discret mais efficace…
          </AnimatedText>
        </div>
      </Page>
    );
  }
}

export default Test;
