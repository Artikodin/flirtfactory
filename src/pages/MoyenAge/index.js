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
    agestr: "moyenage",
    agenbr: 1, // moyenage
    frameTotal: 93,
    waitFor: 2000 // sec
  };

  render() {
    const { agestr, agenbr, frameTotal, waitFor } = this.state;
    return (
      <Page>
        <ButtonIA />
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges, agesvid, updateVideo }) => (
                <>
                  {ages.moyenage && (
                    <>
                      <GenericTag
                        title={value.epoques[agenbr].name}
                        xPos="200px"
                        yPos="200px"
                        index
                      >
                        <Markup content={value.epoques[agenbr].description} />
                      </GenericTag>
                      <GenericTag
                        title={value.epoques[agenbr].symbols[0].name}
                        xPos="800px"
                        yPos="300px"
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
                      number={agesvid.moyenage}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    <InteractionDragAndDrop
                      display={ages.moyenage}
                      unlockAge={() => selectAges(agestr)}
                      increaseVideo={() => updateVideo(agestr)}
                      age={agestr}
                      frameTotal={frameTotal}
                      waitFor={waitFor}
                      pathDraw="M 450 450 A 50 50 0 1 1 450 300"
                      top="60%"
                      left="10%"
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
