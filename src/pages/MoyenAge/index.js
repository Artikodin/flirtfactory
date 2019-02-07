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
    waitFor: 2000 // sec
  };

  render() {
    const { agestr, agenbr, waitFor } = this.state;
    return (
      <Page>
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges, updateVideo, unlockPoints }) => (
                <>
                  <TaskBar
                    name="moyenage"
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
                        xPos="38vw"
                        yPos="30vh"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.moyenage.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="bouquet"
                        xPos="75vw"
                        yPos="52vh"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.moyenage.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="serenade"
                        xPos="15vw"
                        yPos="50vh"
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
                      waitFor={waitFor}
                      pathDraw="M 100 200 A 50 50 0 1 1 100 50"
                      top="60vh"
                      left="25vw"
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
