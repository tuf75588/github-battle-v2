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

function Loading({ text = 'Loading...', speed = 300 }) {
  const [content, setContent] = React.useState(text);
  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) =>
        content === `${text}...` ? text : `${content}.`
      );
    }, speed);
    return () => {
      window.clearInterval(id);
    };
  }, [text, speed]);
  return <div style={styles.content}>{content}</div>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};

export default Loading;
