import React from "react";
import styled from "styled-components";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  ButtonIA,
  ProgressContext,
  InteractionDragAndDrop
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
    this.setState(preState => ({
      number: preState.number + 1
    }));
  };
  // END

  render() {
    const { number, loop } = this.state;
    return (
      <Page>
        <ButtonIA id="button__ia" />
        <ProgressContext.Consumer>
          {({ ages, selectAges }) => (
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
                allers-retours dans la rue pour attirer son attention. Pas très
                discret mais efficace…
              </GenericTag>
              {ages.antiquite && (
                <GenericTag title="Les sérénades" xPos="200px" yPos="200px">
                  La mode était aux sérénades. Pour déclarer sa flamme, le
                  prétendant, à l'image chantait son amour sous le balcon de sa
                  Juliette. Mais auparavant, il devait effectuer d’incessants
                  allers-retours dans la rue pour attirer son attention. Pas
                  très discret mais efficace…
                </GenericTag>
              )}
            </>
          )}
        </ProgressContext.Consumer>
        <BackgroundWrapper id="background__wrapper">
          <BackgroundVideo path="antiquite" number={number} loop={loop} />
          <InteractionDragAndDrop
            age="antiquite"
            frameTotal={167}
            id="draganddrop"
          />
        </BackgroundWrapper>
        {/* <button type="button" onClick={this.addOne}>
          {number}
        </button> */}
      </Page>
    );
  }
}

export default Antiquite;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  video {
    position: fixed;
    min-width: 100%;
    min-height: 100vh;
    /* right: 0;
    bottom: 0;
    width: 100%;
    min-width: 100%;
    min-height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0%); */

    @media (max-width: 1200px) {
      height: 100%;
      width: auto;
    }
  }
`;
