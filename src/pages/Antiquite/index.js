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
                  {ages.antiquite && (
                    <>
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
                      <GenericTag
                        title={value.epoques[numberage].symbols[1].name}
                        xPos="800px"
                        yPos="100px"
                      >
                        <Markup
                          content={
                            value.epoques[numberage].symbols[1].description
                          }
                        />
                      </GenericTag>
                      <GenericTag
                        title={value.epoques[numberage].symbols[2].name}
                        xPos="500px"
                        yPos="700px"
                      >
                        <Markup
                          content={
                            value.epoques[numberage].symbols[2].description
                          }
                        />
                      </GenericTag>
                    </>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={age}
                      number={ages.antiquite ? 3 : number}
                      increaseVideo={this.increaseVideo}
                    />
                    <InteractionDragAndDrop
                      display={ages.antiquite}
                      unlockAge={() => selectAges(age)}
                      increaseVideo={this.increaseVideo}
                      age={age}
                      frameTotal={frameTotal}
                      pathDraw="M 450 150 C 350 200 450 250 350 300"
                      top="25%"
                      left="65%"
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
