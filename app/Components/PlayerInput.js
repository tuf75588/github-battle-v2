import React from 'react';

class PlayerInput extends React.Component {
  render() {
    const { label } = this.props;
    return (
      <form className='column player'>
        <label htmlFor='user' id='playerOne' className='player-label'>
          {label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            placeholder='Github username'
            autoComplete='off'
            className='input light'
          />
          <button className='btn dark-btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default PlayerInput;
