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

class BelleEpoque extends React.Component {
  state = {
    agestr: "belleepoque",
    agenbr: 4, // belleepoque
    frameTotal: 41,
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
                  <TaskBar
                    name="belleepoque"
                    progress={ages.belleepoque.points}
                    unlocked={ages.belleepoque.lock}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  {ages.belleepoque.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.belleepoque.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="belleepoque1"
                        xPos="52vw"
                        yPos="72vh"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.belleepoque.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="belleepoque2"
                        xPos="72vw"
                        yPos="30vh"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.belleepoque.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="belleepoque3"
                        xPos="42vw"
                        yPos="16vh"
                      >
                        {value.epoques[agenbr].symbols[2].description}
                      </GenericTag>
                    </>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={agestr}
                      number={ages.belleepoque.video}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    <InteractionDragAndDrop
                      display={ages.belleepoque.lock}
                      unlockAge={() => selectAges(agestr)}
                      increaseVideo={() => updateVideo(agestr)}
                      age={agestr}
                      frameTotal={frameTotal}
                      waitFor={waitFor}
                      pathDraw="M 450 150 A 50 50 0 1 1 300 100"
                      top="17vh"
                      left="52vw"
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

export default BelleEpoque;
