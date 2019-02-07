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

class Antiquite extends React.Component {
  state = {
    agestr: "antiquite",
    agenbr: 0, // antiquite
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
                    progress={ages.antiquite.points}
                    unlocked={ages.antiquite.lock}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  {ages.antiquite.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.antiquite.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="antiquite1"
                        xPos="500px"
                        yPos="200px"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.antiquite.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="antiquite2"
                        xPos="800px"
                        yPos="100px"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.antiquite.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="antiquite3"
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
