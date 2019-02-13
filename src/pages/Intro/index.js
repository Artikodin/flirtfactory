import React from "react";
import PropTypes from "prop-types";

import {
  Page,
  BackgroundVideo,
  ProgressContext,
  InteractionDragAndDrop,
  TaskBar,
  SoundController,
  IntroVideo
} from "../../components";

class Intro extends React.Component {
  state = {
    agestr: "intro",
    frameTotal: 25,
    showed: false
  };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  handeAnswer = () => {
    this.setState({ showed: true });
  };

  render() {
    const { agestr, frameTotal, showed } = this.state;
    const { history } = this.props;
    return (
      <Page
        periode={agestr}
        navbar={false}
        history={history}
        pathTo="antiquite"
      >
        <IntroVideo />
        <ProgressContext.Consumer>
          {({ ages, selectAges, updateVideo }) => (
            <>
              <TaskBar
                onAnswer={() => this.handeAnswer()}
                age={agestr}
                unlocked={ages.intro.lock}
                stayOpen
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
      </Page>
    );
  }
}

export default Intro;
