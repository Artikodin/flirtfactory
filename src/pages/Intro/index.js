import React from "react";
import PropTypes from "prop-types";

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
    waitFor: 0, // sec,
    showed: false
  };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  handeAnswer = () => {
    this.setState({ showed: true });
  };

  render() {
    const { agestr, frameTotal, waitFor, showed } = this.state;
    const { history } = this.props;
    return (
      <Page navbar={false} history={history}>
        <ProgressContext.Consumer>
          {({ ages, selectAges, updateVideo }) => (
            <>
              <TaskBar
                onAnswer={() => this.handeAnswer()}
                age={agestr}
                unlocked={ages.intro.lock}
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
                    waitFor={waitFor}
                    pathDraw="M 50 200 L 50 50"
                    top="36vh"
                    left="30vw"
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
