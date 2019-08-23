import React from 'react';
import PropTypes from 'prop-types';

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
      <form className='column player' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            id='username'
            className='input'
            placeholder='github username'
            value={this.state.username}
            autoComplete='off'
            onChange={this.handleInputChange}
          />
          <button
            type='submit'
            // className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlayerInput;
