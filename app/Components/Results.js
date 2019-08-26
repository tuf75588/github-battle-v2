import React from 'react';
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { battle } from '../utils/API';
import Card from './Card';
import Loading from './Loading';
import Tooltip from './Tooltip';

function ProfileList({ profile }) {
  return (
    <ul className='card-list'>
      <li>
        <FaUser color='rgb(239, 115, 115)' size={22} />
        {profile.name}
      </li>
      {profile.location && (
        <li>
          <Tooltip text="User's location">
            <FaCompass color='rgb(144, 115, 255)' size={22} />
            {profile.location}
          </Tooltip>
        </li>
      )}
      {profile.company && (
        <li>
          <Tooltip text="User's company">
            <FaBriefcase color='#795548' size={22} />
            {profile.company}
          </Tooltip>
        </li>
      )}
      <li>
        <FaUsers color='rgb(129, 195, 245)' size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color='rgb(64, 183, 95)' size={22} />
        {profile.following.toLocaleString()} following
      </li>
    </ul>
  );
}

function resultsReducer(state, action) {
  const { type } = action;
  if (type === 'fetch') {
    return {
      error: null,
      winner: null,
      loser: null,
      loading: true,
    };
  } else if (type === 'success') {
    return {
      winner: action.winner,
      loser: action.loser,
      loading: false,
      error: null,
    };
  } else if (type === 'error') {
    return {
      ...state,
      loading: false,
      error: action.message,
    };
  } else {
    throw new Error('Action type not recognized');
  }
}

function Results({ location }) {
  const { playerOne, playerTwo } = queryString.parse(location.search);
  const [state, dispatch] = React.useReducer(resultsReducer, {
    error: null,
    loading: true,
    winner: null,
    loser: null,
  });
  React.useEffect(() => {
    dispatch({ type: 'fetch' });
    battle([playerOne, playerTwo])
      .then((data) => {
        dispatch({ type: 'success', winner: data[0], loser: data[1] });
        console.log(data);
      })
      .catch(({ message }) => {
        dispatch({ type: 'error', message });
      });
  }, [playerOne, playerTwo]);

  if (state.loading === true) {
    return <Loading text='Battling' />;
  }

  if (state.error) {
    return <p className='error'>{state.error}</p>;
  }
  const { winner, loser } = state;
  return (
    <React.Fragment>
      <div className='grid space-around container-sm'>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={`${winner.profile.avatar_url}`}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>
        <Card
          header={loser.score === winner.score ? 'Tie' : 'Loser'}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={`${loser.profile.avatar_url}`}
          href={loser.profile.html_url}
          name={loser.profile.login}
        >
          <ProfileList profile={loser.profile} />
        </Card>
      </div>
      <Link className='btn dark-btn btn-space' to='/battle'>
        Reset
      </Link>
    </React.Fragment>
  );
}
export default Results;

ProfileList.propTypes = {
  profile: PropTypes.shape({}).isRequired,
};

Results.propTypes = {
  location: PropTypes.string.isRequired,
};
