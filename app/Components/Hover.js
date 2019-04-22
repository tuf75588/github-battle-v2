import React from 'react';
import PropTypes from 'prop-types';

class Hover extends React.Component {
  state = {
    hovering: false,
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
    const { hovering } = this.state;
    const { children } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {children(hovering)}
      </div>
    );
  }
}
Hover.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Hover;
