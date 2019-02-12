import React from "react";

import {
  Page,
  BackgroundVideo,
  GenericTag,
  ProgressContext,
  TextContext,
  FuturTag,
  TaskBar,
  GlobalSound
} from "../../components";

/* eslint-disable */

class BelleEpoque extends React.Component {
  state = {
    agestr: "futur",
    agenbr: 7, // futur
    selectedPoint: 1
  };

  render() {
    const { agestr, agenbr } = this.state;
    let { selectedPoint } = this.state;
    return (
      <Page>
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({
                ages,
                updateVideo,
                unlockPoints,
                selectAges
              }) => (
                <>
                  <TaskBar
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
                      {selectedPoint === 1 && (
                        <>
                          <GenericTag
                            unlocked={ages.futur.points[0]}
                            unlockPoint={() =>
                              unlockPoints(agestr, 0)
                            }
                            title={
                              value.epoques[agenbr].symbols[0].name
                            }
                            name="futur1"
                            xPos="65vw"
                            yPos="40vh"
                          >
                            {
                              value.epoques[agenbr].symbols[0]
                                .description
                            }
                          </GenericTag>
                        </>
                      )}
                    </>
                  )}
                  {ages.futur.lock === false && (
                    <>
                      <FuturTag
                        name="futur"
                        agenb={0}
                        left="84vw"
                        top="20vh"
                        handleClick={() => {
                          this.setState({
                            selectedPoint: 2
                          });
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
                      futur={this.state.selectedPoint}
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
