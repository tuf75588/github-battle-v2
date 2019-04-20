import React from 'react';
import { battle } from '../utils/API';

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { playerOne, playerTwo } = this.props;
    battle([playerOne, playerTwo])
      .then((results) => {
        console.log(results);
        this.setState(() => ({
          winner: results[0],
          loser: results[1],
          loading: false,
          error: false,
        }));
      })
      .catch((error) => {
        this.setState(() => ({
          error,
          loading: false,
        }));
      });
  }

  render() {
    const { winner, loser } = this.state;
    if (this.state.loading === true) <h1>LOADING...</h1>;
    return (
      <div className='grid space-around container-sm'>
        <div className='card bg-light'>
          <h4 className='header-lg center-text'>
            {winner.score === loser.score ? 'Tie' : 'Winner'}
          </h4>
          <img src={winner.profile.avatar_url} className='avatar' />
        </div>
      </div>
    );
  }
}

export default Results;
