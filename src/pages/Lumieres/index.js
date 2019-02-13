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
  GlobalSound
} from "../../components";

class Lumieres extends React.Component {
  state = {
    agestr: "lumieres",
    agenbr: 3, // lumieres
    frameTotal: 41
  };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { agestr, agenbr, frameTotal } = this.state;
    const { history } = this.props;
    return (
      <Page periode={agestr} history={history} pathTo="belleepoque">
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, selectAges, updateVideo, unlockPoints }) => (
                <>
                  <TaskBar
                    isOpen
                    name="lumieres"
                    progress={ages.lumieres.points}
                    unlocked={ages.lumieres.lock}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  <GlobalSound
                    playing
                    age={agestr}
                    unlocked={ages.lumieres.lock}
                    volume={0.8}
                  />
                  {ages.lumieres.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.lumieres.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="lumieres1"
                        xPos="62vw"
                        yPos="15vh"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.lumieres.points[1]}
                        unlockPoint={() => unlockPoints(agestr, 1)}
                        title={value.epoques[agenbr].symbols[1].name}
                        name="lumieres2"
                        xPos="32vw"
                        yPos="30vh"
                      >
                        {value.epoques[agenbr].symbols[1].description}
                      </GenericTag>
                      <GenericTag
                        unlocked={ages.lumieres.points[2]}
                        unlockPoint={() => unlockPoints(agestr, 2)}
                        title={value.epoques[agenbr].symbols[2].name}
                        name="lumieres3"
                        xPos="70vw"
                        yPos="55vh"
                      >
                        {value.epoques[agenbr].symbols[2].description}
                      </GenericTag>
                    </>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={agestr}
                      number={ages.lumieres.video}
                      increaseVideo={() => updateVideo(agestr)}
                    />
                    <InteractionDragAndDrop
                      display={ages.lumieres.lock}
                      unlockAge={() => selectAges(agestr)}
                      increaseVideo={() => updateVideo(agestr)}
                      age={agestr}
                      frameTotal={frameTotal}
                      pathDraw="M 50 50 Q 150 100 150 250"
                      top="48vh"
                      left="65vw"
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

export default Lumieres;
