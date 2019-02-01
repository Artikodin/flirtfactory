import React from "react";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  ButtonIA,
  ProgressContext,
  TextContext,
  InteractionDragAndDrop
} from "../../components";

import { Markup } from "interweave";

class Antiquite extends React.Component {
  state = {
    age: "antiquite",
    numberage: 0, // antiquite
    number: 1,
    frameTotal: 54
  };

  increaseVideo = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  render() {
    const { age, number, numberage, frameTotal } = this.state;
    return (
      <Page>
        <ButtonIA />
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges }) => (
                <>
                  <GenericTag
                    title={value.epoques[numberage].name}
                    xPos="200px"
                    yPos="200px"
                    index
                  >
                    <Markup content={value.epoques[numberage].description} />
                  </GenericTag>
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={age}
                      number={ages.antiquite ? 3 : number}
                      increaseVideo={this.increaseVideo}
                    />
                    <InteractionDragAndDrop
                      style={
                        ages.antiquite
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      unlockAge={() => selectAges(age)}
                      increaseVideo={this.increaseVideo}
                      age={age}
                      frameTotal={frameTotal}
                    />
                  </div>
                </>
              )}
            </ProgressContext.Consumer>
          )}
        </TextContext.Consumer>
      </Page>
    );
  }
}

export default Antiquite;
