import React from "react";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  ProgressContext,
  TextContext,
  InteractionDragAndDrop,
  TaskBar
} from "../../components";

import { Markup } from "interweave";

class Antiquite extends React.Component {
  state = {
    agestr: "antiquite",
    agenbr: 0, // antiquite
    frameTotal: 54,
    waitFor: 0 // sec
  };

  render() {
    const { agestr, agenbr, frameTotal, waitFor } = this.state;
    return (
      <Page>
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges, updateVideo, unlockPoints }) => (
                <>
                  <TaskBar age={agestr} datas={value.epoques[agenbr]} />
                  {ages.antiquite.lock && (
                    <>
                      <GenericTag
                        increaseVideo={() => unlockPoints(agestr)}
                        title={value.epoques[agenbr].symbols[0].name}
                        age={agestr}
                        pictonumber={0}
                        xPos="500px"
                        yPos="200px"
                      >
                        <Markup
                          content={value.epoques[agenbr].symbols[0].description}
                        />
                      </GenericTag>
                      <GenericTag
                        title={value.epoques[agenbr].symbols[1].name}
                        age={agestr}
                        pictonumber={1}
                        xPos="800px"
                        yPos="100px"
                      >
                        <Markup
                          content={value.epoques[agenbr].symbols[1].description}
                        />
                      </GenericTag>
                      <GenericTag
                        title={value.epoques[agenbr].symbols[2].name}
                        age={agestr}
                        pictonumber={2}
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
                      number={ages.antiquite.video}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    <InteractionDragAndDrop
                      display={ages.antiquite.lock}
                      unlockAge={() => selectAges(agestr)}
                      increaseVideo={() => updateVideo(agestr)}
                      age={agestr}
                      frameTotal={frameTotal}
                      waitFor={waitFor}
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
