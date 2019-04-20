import React from 'react';
import PropTypes from 'prop-types';
import { FaUsers, FaCompass, FaBriefcase, FaUserFriends } from 'react-icons/fa';
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
    const { winner, loser, error, loading } = this.state;
    if (loading === true) return <h1>LOADING....</h1>;
    if (error === true) return <p>{error}</p>;
    return (
      <div className='grid space-around container-sm'>
        <div className='card bg-light'>
          <h4 className='header-lg center-text'>
            {winner.score === loser.score ? 'Tie' : 'Winner'}
          </h4>
          <img
            className='avatar'
            src={winner.user.avatar_url}
            alt={`avatar for ${winner.user.login}`}
          />
          <h4 className='center-text'>
            Score: {winner.score.toLocaleString()}
          </h4>

          <h2 className='center-text'>
            <a href={winner.user.html_url} className='link'>
              {winner.user.login}
            </a>
          </h2>
          <ul className='card-list'>
            <li>
              <FaUsers color='rgb(239, 115, 115)' size={22} />
              {winner.user.name}
            </li>
            {winner.user.location && (
              <li>
                <FaCompass color='rgb(144,115,255)' size={22} />
                {winner.user.location}
              </li>
            )}
            {winner.user.company && (
              <li>
                <FaBriefcase color='#795548' size={22} />
                {winner.user.company}
              </li>
            )}
            <li>
              <FaUsers color='rgb(129,195,245)' size={22} />
              {winner.user.followers.toLocaleString()} followers
            </li>
            <li>
              <FaUserFriends color='rgb(64,183,95)' size={22} />
              {winner.user.following.toLocaleString()} following
            </li>
          </ul>
        </div>
        <div className='card bg-light'>
          <h4 className='header-lg center-text'>
            {loser.score === winner.score ? 'Tie' : 'Loser'}
          </h4>
          <img
            className='avatar'
            src={loser.user.avatar_url}
            alt={`avatar for ${loser.user.login}`}
          />
          <h4 className='center-text'>Score: {loser.score.toLocaleString()}</h4>
          <h2 className='center-text'>
            <a className='link' href={loser.user.html_url}>
              {loser.user.login}
            </a>
          </h2>
          <ul className='card-list'>
            <li>
              <FaUsers color='rgb(239, 115, 115)' size={22} />
              {loser.user.name}
            </li>
            {loser.user.location && (
              <li>
                <FaCompass color='rgb(144, 115, 255)' size={22} />
                {loser.user.location}
              </li>
            )}
            {loser.user.company && (
              <li>
                <FaBriefcase color='#795548' size={22} />
                {loser.user.company}
              </li>
            )}
            <li>
              <FaUsers color='rgb(129, 195, 245)' size={22} />
              {loser.user.followers.toLocaleString()} followers
            </li>
            <li>
              <FaUserFriends color='rgb(64, 183, 95)' size={22} />
              {loser.user.following.toLocaleString()} following
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
};

export default Results;
