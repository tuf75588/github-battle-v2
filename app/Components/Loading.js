/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '20px',
    textAlign: 'center',
  },
};

class Loading extends React.Component {
  state = {
    content: this.props.text,
  };

  static defaultProps = {
    text: 'Loading...',
    speed: 300,
  };

  static propTypes = {
    speed: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  };

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  componentDidMount() {
    const { content } = this.state;
    const { speed, text } = this.props;
    this.interval = window.setInterval(() => {
      this.state.content === `${text}...`
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({
            content: `${content}.`,
          }));
    }, speed);
  }

  render() {
    return <div style={styles.content}>{this.state.content}</div>;
  }
}
export default Loading;
