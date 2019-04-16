/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { fetchUserInfo } from '../utils/API';

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
      <form className='column player' onSubmit={this.handleSubmit}>
        <label htmlFor='user' id='playerOne' className='player-label'>
          {label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            placeholder='Github username'
            autoComplete='off'
            className='input light'
            onChange={this.handleUserNameChange}
          />
          <button
            className='btn dark-btn'
            type='submit'
            disabled={this.isDisabled()}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default PlayerInput;
