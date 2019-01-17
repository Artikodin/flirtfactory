import React from "react";

import {
  Page,
  DragAndDrop,
  BackgroundVideo,
  GenericTag,
  ButtonIA,
  ProgressContext
} from "../../components";

class Antiquite extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  state = {
    number: 1,
    loop: true
  };

  // DEBUG & TEST
  addOne = () => {
    this.setState(preState => {
      return {
        number: preState.number + 1
      };
    });
  };
  // END

  render() {
    const { number, loop } = this.state;
    return (
      <Page>
        <ButtonIA />
        <ProgressContext.Consumer>
          {({ ages, selectAges }) => {
            return (
              <>
                <DragAndDrop
                  dragEnd={this.handleEndDrag}
                  mouseUp={() => selectAges("antiquite")}
                  mouseDown={this.playFourthVideo}
                  dragging={this.handleDrag}
                />
                <GenericTag title="Les sérénades" xPos="200px" yPos="200px">
                  La mode était aux sérénades. Pour déclarer sa flamme, le
                  prétendant, à l'image chantait son amour sous le balcon de sa
                  Juliette. Mais auparavant, il devait effectuer d’incessants
                  allers-retours dans la rue pour attirer son attention. Pas
                  très discret mais efficace…
                </GenericTag>
                {ages.antiquite && (
                  <GenericTag title="Les sérénades" xPos="200px" yPos="200px">
                    La mode était aux sérénades. Pour déclarer sa flamme, le
                    prétendant, à l'image chantait son amour sous le balcon de
                    sa Juliette. Mais auparavant, il devait effectuer
                    d’incessants allers-retours dans la rue pour attirer son
                    attention. Pas très discret mais efficace…
                  </GenericTag>
                )}
              </>
            );
          }}
        </ProgressContext.Consumer>
        <BackgroundVideo path="antiquite" number={number} loop={loop} />
        <button type="button" onClick={this.addOne}>
          {number}
        </button>
      </Page>
    );
  }
}

export default Antiquite;
