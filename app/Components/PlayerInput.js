/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/theme';

class PlayerInput extends React.Component {
  state = {
    username: '',
  };

  handleUserNameChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      username: value,
    }));
  };

  handleSubmit = (event) => {
    const { username } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(username);
  };

  // eslint-disable-next-line react/destructuring-assignment
  isDisabled = () => this.state.username === '';

  render() {
    const { label } = this.props;

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <form className='column player' onSubmit={this.handleSubmit}>
            <label htmlFor='user' id='playerOne' className='player-label'>
              {label}
            </label>
            <div className='row player-inputs'>
              <input
                type='text'
                placeholder='Github username'
                autoComplete='off'
                className={`input-${theme}`}
                onChange={this.handleUserNameChange}
              />
              <button
                className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                type='submit'
                // eslint-disable-next-line react/destructuring-assignment
                disabled={!this.state.username}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </ThemeConsumer>
    );
  }
}
PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default PlayerInput;
