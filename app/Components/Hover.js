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

    return (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(hovering)}
      </div>
    );
  }
}

export default Hover;
