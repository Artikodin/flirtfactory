import React from "react";
import PropTypes from "prop-types";

import {
  Page,
  BackgroundVideo,
  ProgressContext,
  TextContext,
  InteractionDragAndDrop,
  TaskBar,
  SoundController
} from "../../components";

class Intro extends React.Component {
  state = {
    agestr: "intro",
    agenbr: 8, // antiquite
    frameTotal: 25,
    showed: true
  };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { agestr, agenbr, frameTotal, showed } = this.state;
    const { history } = this.props;
    return (
      <Page
        periode={agestr}
        navbar={false}
        history={history}
        pathTo="antiquite"
        transition={false}
      >
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges, updateVideo }) => (
                <>
                  <TaskBar
                    age={agestr}
                    unlocked={ages.intro.lock}
                    datas={value.epoques[agenbr]}
                    isOpen
                  />
                  <SoundController
                    playing
                    age="intro"
                    unlocked={ages.intro.lock}
                    volume={0}
                  />
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={agestr}
                      number={ages.intro.video}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    {showed && (
                      <InteractionDragAndDrop
                        display={ages.intro.lock}
                        unlockAge={() => selectAges(agestr)}
                        increaseVideo={() => updateVideo(agestr)}
                        age={agestr}
                        frameTotal={frameTotal}
                        pathDraw="M 50 200 L 50 50"
                        top="36vh"
                        left="60vw"
                      />
                    )}
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
