import React from 'react';
import PropTypes from 'prop-types';
import { FaTimesCircle } from 'react-icons/fa';

function PlayerPreview({ username, onReset, label }) {
  return (
    <div className='column player'>
      <h3 className='player-label'>{label}</h3>
      <div className='row'>
        <div className='player-info'>
          <img
            src={`https://www.github.com/${username}.png?size=200`}
            alt={`avatar for ${username}`}
            className='avatar-small'
          />
          <a href={`https://www.github.com/${username}`} className='link'>
            {username}
          </a>
        </div>
        <button
          className='btn-clear flex-center'
          onClick={onReset}
          type='button'
        >
          <FaTimesCircle size={26} color='rgb(194,57,42)' />
        </button>
      </div>
    </div>
  );
}

export default PlayerPreview;

PlayerPreview.propTypes = {
  label: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
