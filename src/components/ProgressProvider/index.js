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
    points: [false, false, false]
  },
  moyenage: {
    lock: false,
    video: 1,
    points: [false, false, false]
  },
  renaissance: false,
  lumieres: false,
  belleepoque: false,
  moderne: false,
  contemporain: false,
  futur: false
};

export const ProgressContext = React.createContext({
  ages,
  unlockAll,
  selectAges: () => {},
  updateVideo: () => {},
  unlockPoints: () => {}
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

  state = {
    ages: ages,
    selectAges: this.selectAges,
    updateVideo: this.updateVideo,
    unlockPoints: this.unlockPoints
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
