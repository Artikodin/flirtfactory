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

class Intro extends React.Component {
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

export default Intro;
