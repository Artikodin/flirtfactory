import React from "react";

import {
  Page,
  BackgroundVideo,
  ProgressContext,
  InteractionDragAndDrop,
  TaskBar
} from "../../components";

class Intro extends React.Component {
  state = {
    agestr: "intro",
    frameTotal: 35,
    waitFor: 0 // sec
  };

  render() {
    const { agestr, frameTotal, waitFor } = this.state;
    return (
      <Page navbar={false}>
        <ProgressContext.Consumer>
          {({ ages, selectAges, updateVideo }) => (
            <>
              <TaskBar age={agestr} unlocked={ages.intro.lock} />
              <div className="background__wrapper">
                <BackgroundVideo
                  path={agestr}
                  number={ages.intro.video}
                  increaseVideo={() => updateVideo(agestr)}
                />
                <InteractionDragAndDrop
                  display={ages.intro.lock}
                  unlockAge={() => selectAges(agestr)}
                  increaseVideo={() => updateVideo(agestr)}
                  age={agestr}
                  frameTotal={frameTotal}
                  waitFor={waitFor}
                  pathDraw="M 400 50 L 400 200"
                  top="60vh"
                  left="40vw"
                />
              </div>
            </>
          )}
        </ProgressContext.Consumer>
      </Page>
    );
  }
}

export default Intro;
