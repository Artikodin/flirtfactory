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
    frameTotal: 25,
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
                  pathDraw="M 50 200 L 50 50"
                  top="70vh"
                  left="50vw"
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
