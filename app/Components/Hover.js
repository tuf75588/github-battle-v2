/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class Hover extends React.Component {
  state = {
    hovering: false,
  };

  mouseOut = () => {
    this.setState({ hovering: false });
  };

  mouseOver = () => {
    this.setState({ hovering: true });
  };

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}
export default Hover;
