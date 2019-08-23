import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/theme';

class PlayerInput extends React.Component {
  state = {
    username: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      username: value,
    }));
  };

  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <form className='column player' onSubmit={this.handleSubmit}>
            <label htmlFor='username' className='player-label'>
              {this.props.label}
            </label>
            <div className='row player-inputs'>
              <input
                type='text'
                id='username'
                className={`input-${theme}`}
                placeholder='github username'
                value={this.state.username}
                autoComplete='off'
                onChange={this.handleInputChange}
              />
              <button
                type='submit'
                className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
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
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlayerInput;
