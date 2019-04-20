/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';
import { Link, Route } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';

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
  state = {
    playerOne: null,
    playerTwo: null,
    battle: false,
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
      battle: false,
      playerOne: null,
      playerTwo: null,
    }));
  };

  render() {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle) {
      return (
        <Results
          playerOne={playerOne}
          playerTwo={playerTwo}
          onReset={this.handleBattleReset}
        />
      );
    }
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
            <button
              className='btn dark-btn btn-space'
              type='submit'
              onClick={() => this.setState({ battle: true })}
            >
              Battle
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Battle;
