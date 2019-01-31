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

class MoyenAge extends React.Component {
  state = {
    age: "moyenage",
    numberage: 1, // antiquite
    number: 1,
    frameTotal: 93
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
                  {ages.antiquite && (
                    <GenericTag
                      title={value.epoques[numberage].symbols[0].name}
                      xPos="500px"
                      yPos="200px"
                    >
                      <Markup
                        content={
                          value.epoques[numberage].symbols[0].description
                        }
                      />
                    </GenericTag>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={age}
                      number={number}
                      increaseVideo={this.increaseVideo}
                    />
                    <InteractionDragAndDrop
                      className="drag_and_drop"
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

export default MoyenAge;
