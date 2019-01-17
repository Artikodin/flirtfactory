import React from "react";
import PropTypes from "prop-types";

class ScrollToTopOnMount extends React.Component {
  state = {
    scrollIdex: 0,
    actualYposition: 0
  };

  static propTypes = {
    onScrollBottom: PropTypes.func
  };

  static defaultProps = {
    onScrollBottom: null
  };

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const { onScrollBottom } = this.props;
    const { scrollIdex, actualYposition } = this.state;
    const { clientHeight } = event.srcElement.body;
    const windowHeight = window.innerHeight;
    const scrollableHeight = clientHeight - windowHeight;
    const scrollYposition = window.pageYOffset;
    const scrollPercent = scrollYposition / scrollableHeight;
    const scrollPercentRounded = Math.round(scrollPercent * 100);

    if (scrollPercentRounded === 100 && onScrollBottom) {
      onScrollBottom();
    }

    if (actualYposition > scrollYposition) {
      this.setState({
        scrollIdex: scrollIdex - 1,
        actualYposition: scrollYposition
      });
    } else {
      this.setState({
        scrollIdex: scrollIdex + 1,
        actualYposition: scrollYposition
      });
    }
  };

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;
