import React from "react";

import {
  Page,
  DragAndDrop,
  BackgroundVideo,
  InterestTag,
  ButtonIA,
  ProgressContext
} from "../../components";

class Antiquite extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  state = {
    number: 1,
    loop: true
  };

  handleDrag = x => {
    if (x > 100) {
      this.setState({
        number: 3
      });
    } else if (x === 400) {
      this.setState({
        number: 4
      });
    }
  };

  playSecondVideo = () => {
    this.setState({
      number: 2
    });
  };

  playFourthVideo = () => {
    // jouer la video de zoom à l'envers
  };

  // DEBUG & TEST
  handleClick = () => {
    this.setState({
      number: 2,
      loop: false
    });
  };

  addOne = () => {
    this.setState(preState => {
      return {
        number: preState.number + 1
      };
    });
  };
  // END

  render() {
    const { number, loop } = this.state;
    return (
      <Page>
        <ButtonIA />
        <ProgressContext.Consumer>
          {({ ages, selectAges }) => {
            return (
              <>
                <DragAndDrop
                  dragEnd={this.handleEndDrag}
                  mouseUp={() => selectAges("antiquite")}
                  mouseDown={this.playFourthVideo}
                  dragging={this.handleDrag}
                />
                {ages.antiquite && (
                  <InterestTag title="Les sérénades" xPos="200px" yPos="200px">
                    La mode était aux sérénades. Pour déclarer sa flamme, le
                    prétendant, à l'image chantait son amour sous le balcon de
                    sa Juliette. Mais auparavant, il devait effectuer
                    d’incessants allers-retours dans la rue pour attirer son
                    attention. Pas très discret mais efficace…
                  </InterestTag>
                )}
              </>
            );
          }}
        </ProgressContext.Consumer>
        <BackgroundVideo path="antiquite" number={number} loop={loop} />
        <button type="button" onClick={this.addOne}>
          {number}
        </button>
      </Page>
    );
  }
}

export default Antiquite;
