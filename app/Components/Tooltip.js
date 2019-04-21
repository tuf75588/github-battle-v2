/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    position: 'relative',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    height: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};

class Tooltip extends React.Component {
  state = {
    hover: false,
  };

  mouseOver = () => {
    this.setState(() => ({
      hovering: true,
    }));
  };

  mouseOut = () => {
    this.setState(() => ({
      hovering: false,
    }));
  };

  render() {
    const { text, children } = this.props;
    const { hovering } = this.state;
    return (
      <div
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        style={styles.container}
      >
        {hovering === true && <div style={styles.tooltip}>{text}</div>}
        {children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tooltip;
