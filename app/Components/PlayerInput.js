/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/theme';

function PlayerInput({ onSubmit, label }) {
  const [username, setUsername] = React.useState('');
  const { theme } = React.useContext(ThemeContext);
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(username);
  }
  return (
    <form className='column player' onSubmit={handleSubmit}>
      <label htmlFor='username' id='username' className='player-label'>
        {label}
      </label>
      <div className='row player-inputs'>
        <input
          type='text'
          id='username'
          className={`input-${theme}`}
          placeholder='github username'
          value={username}
          autoComplete='off'
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <button
          type='submit'
          disabled={!username}
          className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlayerInput;
