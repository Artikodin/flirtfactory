import React from "react";
import PropTypes from "prop-types";

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
    agenbr: 7 // futur
  };

  // handleClick = ageNb => {
  //   console.log(ageNb);
  // };

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { agestr, agenbr } = this.state;
    const { history } = this.props;
    return (
      <Page periode={agestr} history={history} pathTo="flirtfactory">
        <TextContext.Consumer>
          {value => (
            <ProgressContext.Consumer>
              {({
                ages,
                updateVideo,
                unlockPoints,
                selectAges,
                selectFutur
              }) => (
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
                      {ages.futur.selected === 1 && (
                        <>
                          <GenericTag
                            unlocked={ages.futur.points[2]}
                            unlockPoint={() =>
                              unlockPoints(agestr, 2)
                            }
                            title={
                              value.epoques[agenbr].symbols[2].name
                            }
                            name="futur3"
                            xPos="65vw"
                            yPos="40vh"
                          >
                            {
                              value.epoques[agenbr].symbols[2]
                                .description
                            }
                          </GenericTag>
                        </>
                      )}
                      {ages.futur.selected === 2 && (
                        <>
                          <GenericTag
                            unlocked={ages.futur.points[1]}
                            unlockPoint={() =>
                              unlockPoints(agestr, 1)
                            }
                            title={
                              value.epoques[agenbr].symbols[1].name
                            }
                            name="futur2"
                            xPos="50vw"
                            yPos="40vh"
                          >
                            {
                              value.epoques[agenbr].symbols[1]
                                .description
                            }
                          </GenericTag>
                        </>
                      )}
                      {ages.futur.selected === 3 && (
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
                            xPos="50vw"
                            yPos="50vh"
                          >
                            {
                              value.epoques[agenbr].symbols[0]
                                .description
                            }
                          </GenericTag>
                        </>
                      )}
                      {ages.futur.selected === 4 && (
                        <>
                          <GenericTag
                            unlocked={ages.futur.points[3]}
                            unlockPoint={() =>
                              unlockPoints(agestr, 3)
                            }
                            title={
                              value.epoques[agenbr].symbols[3].name
                            }
                            name="futur4"
                            xPos="36vw"
                            yPos="63vh"
                          >
                            {
                              value.epoques[agenbr].symbols[3]
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
                        left="80vw"
                        top="20vh"
                        show
                        handleClick={() => {
                          selectFutur(agestr, 1)
                          updateVideo(agestr);
                          selectAges(agestr);
                        }}
                      />
                      <FuturTag
                        name="futur"
                        agenb={0}
                        left="15vw"
                        top="25vh"
                        show
                        handleClick={() => {
                          selectFutur(agestr, 2)
                          updateVideo(agestr);
                          selectAges(agestr);
                        }}
                      />
                      <FuturTag
                        name="futur"
                        agenb={0}
                        left="20vw"
                        top="60vh"
                        show
                        handleClick={() => {
                          selectFutur(agestr, 3)
                          updateVideo(agestr);
                          selectAges(agestr);
                        }}
                      />
                      <FuturTag
                        name="futur"
                        agenb={0}
                        left="60vw"
                        top="65vh"
                        show
                        handleClick={() => {
                          selectFutur(agestr, 4)
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
                      futur={ages.futur.selected}
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
