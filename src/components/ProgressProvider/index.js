import React from "react";
import PropTypes from "prop-types";

const unlockAll = false;

const ages = {
  intro: {
    lock: false,
    video: 1
  },
  antiquite: {
    lock: false,
    video: 1,
    points: [false, false, false],
    tutorial: true
  },
  moyenage: {
    lock: false,
    video: 1,
    points: [false, false, false]
  },
  renaissance: {
    lock: false,
    video: 1,
    points: [false, false, false]
  },
  lumieres: {
    lock: false,
    video: 1,
    points: [false, false, false]
  },
  belleepoque: {
    lock: false,
    video: 1,
    points: [false, false, false]
  },
  moderne: {
    lock: false,
    video: 1,
    points: [false, false, false]
  },
  contemporain: {
    lock: false,
    video: 1,
    points: [false, false, false]
  },
  futur: {
    lock: false,
    video: 1,
    points: [false, false, false, false],
    selected: 1
  }
};

export const ProgressContext = React.createContext({
  ages,
  unlockAll,
  selectAges: () => {},
  updateVideo: () => {},
  unlockPoints: () => {},
  selectFutur: () => {},
  removeTutorial: () => {}
});

class ProgressProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  /* eslint-disable */
  selectAges = age => {
    this.setState(prevState => ({
      ages: {
        ...prevState.ages,
        [age]: {
          ...prevState.ages[age],
          lock: true
        }
      }
    }));
  };

  removeTutorial = age => {
    console.log("remove tutorial");
    this.setState(prevState => ({
      ages: {
        ...prevState.ages,
        [age]: {
          ...prevState.ages[age],
          tutorial: false
        }
      }
    }));
  };

  updateVideo = age => {
    this.setState(prevState => ({
      ages: {
        ...prevState.ages,
        [age]: {
          ...prevState.ages[age],
          video: this.state.ages[age].video + 1
        }
      }
    }));
  };

  unlockPoints = (age, number) => {
    this.setState(prevState => ({
      ages: {
        ...prevState.ages,
        [age]: {
          ...prevState.ages[age],
          points: [...prevState.ages[age].points].map((point, index) => {
            if (index === number) {
              return true
            }
            return point
          })
        }
      }
    }));
  };

  selectFutur = (age, number) => {
    this.setState(prevState => ({
      ages: {
        ...prevState.ages,
        [age]: {
          ...prevState.ages[age],
          selected: number
        }
      }
    }));
  };

  state = {
    ages: ages,
    selectAges: this.selectAges,
    updateVideo: this.updateVideo,
    unlockPoints: this.unlockPoints,
    selectFutur: this.selectFutur,
    removeTutorial: this.removeTutorial
  };
  /* eslint-enable */

  render() {
    const { children } = this.props;
    return (
      <ProgressContext.Provider value={this.state}>
        {children}
      </ProgressContext.Provider>
    );
  }
}

export default ProgressProvider;
