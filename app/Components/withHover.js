import React from 'react';

function withHover(Component, propName = 'hovering') {
  return class WithHover extends React.Component {
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
      const props = {
        // eslint-disable-next-line react/destructuring-assignment
        [propName]: this.state.hovering,
        ...this.props,
      };
      return (
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
}

export default withHover;
