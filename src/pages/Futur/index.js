import React from "react";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  ProgressContext,
  TextContext,
  FlirtFactoryTag,
  TaskBar,
  GlobalSound
} from "../../components";

class BelleEpoque extends React.Component {
  state = {
    agestr: "futur",
    agenbr: 7 // futur
    // waitFor: 0 // sec
  };

  render() {
    const { agestr, agenbr } = this.state;
    return (
      <Page>
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({ ages, updateVideo, unlockPoints, selectAges }) => (
                <>
                  <TaskBar
                    isOpen
                    name="futur"
                    progress={ages.futur.points}
                    unlocked={ages.futur.lock}
                    age={agestr}
                    datas={value.epoques[agenbr]}
                  />
                  <GlobalSound
                    playing
                    age={agestr}
                    unlocked={ages.futur.lock}
                    volume={0.8}
                  />
                  {ages.futur.lock && (
                    <>
                      <GenericTag
                        unlocked={ages.futur.points[0]}
                        unlockPoint={() => unlockPoints(agestr, 0)}
                        title={value.epoques[agenbr].symbols[0].name}
                        name="futur1"
                        xPos="65vw"
                        yPos="40vh"
                      >
                        {value.epoques[agenbr].symbols[0].description}
                      </GenericTag>
                    </>
                  )}
                  {ages.futur.lock === false && (
                    <>
                      <FlirtFactoryTag
                        name="futur"
                        agenb={0}
                        left="84vw"
                        top="20vh"
                        handleClick={() => {
                          updateVideo(agestr);
                          selectAges(agestr);
                        }}
                      />
                    </>
                  )}
                  <div className="background__wrapper">
                    <BackgroundVideo
                      path={agestr}
                      number={ages.futur.video}
                      increaseVideo={() => updateVideo(agestr)}
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

export default BelleEpoque;
