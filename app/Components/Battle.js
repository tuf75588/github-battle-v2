/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';
import PlayerInput from './PlayerInput';

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
    </div>
  );
}

class Battle extends React.Component {
  render() {
    return (
      <div className='battle'>
        <Instructions />
        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            <PlayerInput label='Player One' />
          </div>
        </div>
      </div>
    );
  }
}
export default Battle;
