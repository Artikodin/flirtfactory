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
  SoundController
} from "../../components";

class Contemporain extends React.Component {
  state = {
    agestr: "contemporain",
    agenbr: 6, // contemporain
    frameTotal: 41
  };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { agestr, agenbr, frameTotal } = this.state;
    const { history } = this.props;
    return (
      <Page periode={agestr} history={history} pathTo="futur">
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges, updateVideo, unlockPoints }) => (
                <>
                  <TaskBar
                    isOpen
                    name="contemporain"
                    progress={ages.contemporain.points}
                    unlocked={ages.contemporain.lock}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  <SoundController
                    playing
                    age={agestr}
                    unlocked={ages.contemporain.lock}
                    volume={0.15}
                  />
                  {ages.contemporain.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.contemporain.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="contemporain2"
                        xPos="72vw"
                        yPos="65vh"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.contemporain.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="contemporain1"
                        xPos="20vw"
                        yPos="54vh"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.contemporain.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="contemporain4"
                        xPos="40vw"
                        yPos="30vh"
                      >
                        {value.epoques[agenbr].symbols[2].description}
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
                      pathDraw="M 50 50 A 50 50 0 1 1 50 200"
                      top="22vh"
                      left="10vw"
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
