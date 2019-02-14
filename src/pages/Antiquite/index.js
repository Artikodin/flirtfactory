import React from "react";
import PropTypes from "prop-types";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  ProgressContext,
  TextContext,
  InteractionDragAndDrop,
  TaskBar,
  Tutorial,
  SoundController
} from "../../components";

class Antiquite extends React.Component {
  state = {
    agestr: "antiquite",
    agenbr: 0, // antiquite
    frameTotal: 41
  };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { agestr, agenbr, frameTotal } = this.state;
    const { history } = this.props;
    return (
      <Page periode={agestr} history={history} pathTo="moyenage">
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({
                ages,
                selectAges,
                updateVideo,
                unlockPoints,
                removeTutorial
              }) => (
                <>
                  <TaskBar
                    isOpen
                    name="antiquite"
                    progress={ages.antiquite.points}
                    unlocked={ages.antiquite.lock}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  <SoundController
                    playing
                    age={agestr}
                    unlocked={ages.antiquite.lock}
                    volume={0.5}
                  />
                  <Tutorial
                    showed={ages.antiquite.lock}
                    hide={ages.antiquite.tutorial}
                    removeTutorial={() => removeTutorial(agestr)}
                  />
                  {ages.antiquite.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.antiquite.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="antiquite1"
                        xPos="50vw"
                        yPos="58vh"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.antiquite.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="antiquite2"
                        xPos="76vw"
                        yPos="55vh"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.antiquite.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="antiquite3"
                        xPos="22vw"
                        yPos="40vh"
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
                      pathDraw="M 200 50 L 50 200"
                      top="30vh"
                      left="66vw"
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
