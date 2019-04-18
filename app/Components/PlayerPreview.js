import React from 'react';
import PropTypes from 'prop-types';
import { FaTimesCircle } from 'react-icons/fa';

function PlayerPreview({ username, label, onReset }) {
  return (
    <React.Fragment>
      <div className='column player'>
        <div className='player-label'>{label}</div>
        <div className='row bg-light'>
          <div className='player-info'>
            <img
              className='avatar-small'
              src={`https://www.github.com/${username}.png?size=200`}
              alt={`avatar for ${username}`}
            />
            <a href={`https://www.github.com/${username}`} className='link'>
              {username}
            </a>
          </div>
          <button
            className='btn-clear flex-center'
            type='submit'
            onClick={onReset}
          >
            <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PlayerPreview;
