import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

import { ThemeContext } from '../contexts/theme';

function Instructions() {
  const { theme } = React.useContext(ThemeContext);
  console.log(theme);
  return (
    <div className='instructions-container'>
      <h1 className='header-lg center-text battle-instructions'>
        Instructions
      </h1>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm'>Enter Two Github Users</h3>
          <FaUserFriends
            className={`bg-${theme}`}
            color='rgb(255,191,116)'
            size={140}
          />
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
          <FaUserFriends className={`bg-${theme}`} color='#727272' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>See the winners</h3>
          <FaTrophy
            className={`bg-${theme}`}
            color='rgb(255,215,0)'
            size={140}
          />
        </li>
      </ol>
    </div>
  );
}

function Battle() {
  const [playerOne, setPlayerOne] = React.useState(null);
  const [playerTwo, setPlayerTwo] = React.useState(null);

  const route = {
    pathname: '/battle/results',
    search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
  };
  return (
    <React.Fragment>
      <Instructions />
      <div className='players-container'>
        <h1 className='center-text header-lg'>Players</h1>
        <div className='row space-around'>
          {playerOne === null ? (
            <PlayerInput
              label='Player One'
              onSubmit={(player) => setPlayerOne(player)}
            />
          ) : (
            <PlayerPreview
              label='Player One'
              username={playerOne}
              onReset={() => setPlayerOne(null)}
            />
          )}
          {playerTwo === null ? (
            <PlayerInput
              label='Player Two'
              onSubmit={(player) => setPlayerTwo(player)}
            />
          ) : (
            <PlayerPreview
              label='Player Two'
              username={playerTwo}
              onReset={() => setPlayerTwo(null)}
            />
          )}
        </div>

        {playerOne && playerTwo && (
          <Link to={route} className='btn dark-btn btn-space'>
            Battle
          </Link>
        )}
      </div>
    </React.Fragment>
  );
}
export default Battle;
