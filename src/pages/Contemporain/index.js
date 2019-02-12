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

class Contemporain extends React.Component {
  state = {
    agestr: "contemporain",
    agenbr: 6, // contemporain
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
                    name="contemporain"
                    progress={ages.contemporain.points}
                    unlocked={ages.contemporain.lock}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  {ages.contemporain.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.contemporain.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="contemporain1"
                        xPos="500px"
                        yPos="200px"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.contemporain.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="contemporain2"
                        xPos="300px"
                        yPos="100px"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.contemporain.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="contemporain3"
                        xPos="100px"
                        yPos="500px"
                      >
                        {value.epoques[agenbr].symbols[2].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.contemporain.points[3]}
                        unlockPoint={() => unlockPoints(agestr, 3)}
                        title={value.epoques[agenbr].symbols[3].name}
                        name="contemporain4"
                        xPos="300px"
                        yPos="300px"
                      >
                        {value.epoques[agenbr].symbols[3].description}
                      </GenericTag>
                    </>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={agestr}
                      number={ages.contemporain.video}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    <InteractionDragAndDrop
                      display={ages.contemporain.lock}
                      unlockAge={() => selectAges(agestr)}
                      increaseVideo={() => updateVideo(agestr)}
                      age={agestr}
                      frameTotal={frameTotal}
                      waitFor={waitFor}
                      pathDraw="M 50 50 A 50 50 0 1 1 50 200"
                      top="22vh"
                      left="70vw"
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

export default Contemporain;
