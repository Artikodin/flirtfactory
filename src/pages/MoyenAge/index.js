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
                        unlocked={ages.moyenage.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
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
                        unlocked={ages.moyenage.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
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

export default MoyenAge;
