/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';

function Instructions() {
  return (
    <div className='instructions-container'>
      <div className='center-text header-lg'>Instructions</div>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm'>Enter Two Github Users</h3>
          <FaUserFriends
            className='bg-light'
            color='rgb(255, 191, 116)'
            size={140}
          />
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
          <FaFighterJet className='bg-light' color='#727272' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>See the winners</h3>
          <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
        </li>
      </ol>
      <div className='players-container'>
        <h1 className='center-text header-lg'>Players</h1>
        <div className='row space-around'>
          <form className='column player'>
            <label htmlFor='user' id='playerOne' className='player-label'>
              Player One
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
          <form className='column player'>
            <label htmlFor='user' id='playerTwo' className='player-label'>
              Player Two
            </label>
            <div className='row player-inputs'>
              <input
                type='text'
                placeholder='Github username'
                autoComplete='off'
                className='input-light'
              />
              <button className='btn dark-btn' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

class Battle extends React.Component {
  render() {
    return (
      <div className='battle'>
        <Instructions />
      </div>
    );
  }
}
export default Battle;
