/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export function useHover() {
  const [hovering, setHovering] = React.useState(false);
  function mouseOver() {
    setHovering(true);
  }
  function mouseOut() {
    setHovering(false);
  }
  const attrs = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut,
  };
  return [hovering, attrs];
}
