import React from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";

import { Transition } from "..";

class TransitionRoute extends React.Component {
  static propTypes = {
    component: PropTypes.any,
    rest: PropTypes.any,
    onChangeRoute: PropTypes.func
  };

  static defaultProps = {
    component: "",
    rest: {},
    onChangeRoute: () => {}
  };

  state = {
    showed: false
  };

  componentDidMount() {
    this.setState({ showed: true }, () => {
      this.stopTransition();
    });
  }

  // componentDidUpdate() {
  //   const { showed } = this.state;
  //   if (!showed) {
  //     // when the state is updated (turned red),
  //     // a timeout is triggered to switch it back off
  //     this.turnOffRedTimeout = setTimeout(() => {
  //       this.setState(() => ({ showed: true }));
  //     }, 500);
  //   }
  // }

  // componentWillUnmount() {
  //   // we set the timeout to this.turnOffRedTimeout so that we can
  //   // clean it up when the component is unmounted.
  //   // otherwise you could get your app trying to modify the state on an
  //   // unmounted component, which will throw an error
  //   clearTimeout(this.turnOffRedTimeout);
  // }

  stopTransition = () => {
    setTimeout(() => {
      this.setState({ showed: false });
    }, 1200);
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { showed } = this.state;
    return (
      <Route
        {...rest}
        render={props => (
          <>{showed ? <Transition /> : <Component {...props} />}</>
        )}
      />
    );
  }
}

export default TransitionRoute;
