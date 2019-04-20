import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import { battle } from '../utils/API';
import ProfileList from './ProfileList';

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
    const { winner, loser, error, loading } = this.state;
    if (loading === true) return <h1>LOADING....</h1>;
    if (error === true) return <p>{error}</p>;
    return (
      <div className='grid space-around container-sm'>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.user.avatar_url}
          href={winner.user.html_url}
          name={winner.user.login}
        >
          <ProfileList profile={winner.user} />
        </Card>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Loser'}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.user.avatar_url}
          href={loser.user.html_url}
          name={loser.user.login}
        >
          <ProfileList profile={loser.user} />
        </Card>
      </div>
    );
  }
}

Results.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
};

export default Results;
