import React from "react";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  TaskBar,
  ProgressContext,
  TextContext,
  InteractionDragAndDrop
} from "../../components";

class MoyenAge extends React.Component {
  state = {
    agestr: "moyenage",
    agenbr: 1, // moyenage
    frameTotal: 45,
    waitFor: 2000 // sec
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
                    progress={ages.moyenage.points}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  {ages.moyenage.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.moyenage.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="joute"
                        xPos="500px"
                        yPos="200px"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.moyenage.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="bouquet"
                        xPos="800px"
                        yPos="100px"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.moyenage.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="serenade"
                        xPos="500px"
                        yPos="700px"
                      >
                        {value.epoques[agenbr].symbols[2].description}
                      </GenericTag>
                    </>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={agestr}
                      number={ages.moyenage.video}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    <InteractionDragAndDrop
                      display={ages.moyenage.lock}
                      unlockAge={() => selectAges(agestr)}
                      increaseVideo={() => updateVideo(agestr)}
                      age={agestr}
                      frameTotal={frameTotal}
                      waitFor={waitFor}
                      pathDraw="M 400 250 A 50 50 0 1 1 400 100"
                      top="80vh"
                      left="20vw"
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
