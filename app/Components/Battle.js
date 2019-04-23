/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';

function Instructions() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className='instructions-container'>
          <div className='center-text header-lg'>Instructions</div>
          <ol className='container-sm grid center-text battle-instructions'>
            <li>
              <h3 className='header-sm'>Enter Two Github Users</h3>
              <FaUserFriends
                className={`bg-${theme}`}
                color='rgb(255, 191, 116)'
                size={140}
              />
            </li>
            <li>
              <h3 className='header-sm'>Battle</h3>
              <FaFighterJet
                className={`bg-${theme}`}
                color='#727272'
                size={140}
              />
            </li>
            <li>
              <h3 className='header-sm'>See the winners</h3>
              <FaTrophy
                className={`bg-${theme}`}
                color='rgb(255, 215, 0)'
                size={140}
              />
            </li>
          </ol>
        </div>
      )}
    </ThemeConsumer>
  );
}

class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };

  handleSubmit = (id, player) => {
    this.setState(() => ({
      [id]: player,
    }));
  };

  handleReset = (playerId) => {
    this.setState(() => ({
      [playerId]: null,
    }));
  };

  handleBattleReset = () => {
    this.setState(() => ({
      playerOne: null,
      playerTwo: null,
    }));
  };

  render() {
    const { playerOne, playerTwo } = this.state;

    return (
      <React.Fragment>
        <Instructions />
        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {playerOne === null ? (
              <PlayerInput
                onSubmit={(player) => this.handleSubmit('playerOne', player)}
                label='Player One'
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label='Player One'
                onReset={() => this.handleReset('playerOne')}
              />
            )}
            {playerTwo === null ? (
              <PlayerInput
                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                label='Player Two'
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label='Player Two'
                onReset={() => this.handleReset('playerTwo')}
              />
            )}
          </div>
          {playerOne && playerTwo && (
            <Link
              to={{
                pathname: `${this.props.match.url}/results`,
                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
              }}
              className='btn dark-btn btn-space'
            >
              Battle
            </Link>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Battle;
