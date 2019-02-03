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
    agestr: "antiquite",
    agenbr: 0, // antiquite
    frameTotal: 54
  };

  render() {
    const { agestr, agenbr, frameTotal } = this.state;
    return (
      <Page>
        <ButtonIA />
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges, agesvid, updateVideo }) => (
                <>
                  <GenericTag
                    title={value.epoques[agenbr].name}
                    xPos="200px"
                    yPos="200px"
                    index
                  >
                    <Markup content={value.epoques[agenbr].description} />
                  </GenericTag>
                  {ages.antiquite && (
                    <>
                      <GenericTag
                        title={value.epoques[agenbr].symbols[0].name}
                        xPos="500px"
                        yPos="200px"
                      >
                        <Markup
                          content={value.epoques[agenbr].symbols[0].description}
                        />
                      </GenericTag>
                      <GenericTag
                        title={value.epoques[agenbr].symbols[1].name}
                        xPos="800px"
                        yPos="100px"
                      >
                        <Markup
                          content={value.epoques[agenbr].symbols[1].description}
                        />
                      </GenericTag>
                      <GenericTag
                        title={value.epoques[agenbr].symbols[2].name}
                        xPos="500px"
                        yPos="700px"
                      >
                        <Markup
                          content={value.epoques[agenbr].symbols[2].description}
                        />
                      </GenericTag>
                    </>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={agestr}
                      number={agesvid.antiquite}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    <InteractionDragAndDrop
                      display={ages.antiquite}
                      unlockAge={() => selectAges(agestr)}
                      increaseVideo={() => updateVideo(agestr)}
                      age={agestr}
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
