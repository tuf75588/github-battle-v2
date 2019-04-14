import React from 'react';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

function Card({
  index,
  login,
  forks,
  open_issues: openIssues,
  url,
  avatar,
  stars,
}) {
  return (
    <li className='card bg-light'>
      <h4 className='header-lg center-text'>#{index + 1}</h4>
      <img src={avatar} alt={`avatar for ${login}`} className='avatar' />
      <h2 className='center-text'>
        <a href={url}>{login}</a>
      </h2>
      <ul className='card-list'>
        <li>
          <FaUser color='rgb(255, 191, 116)' size={22} />
          <a href={`https://www.github.com/${login}`}>{login}</a>
        </li>
        <li>
          <FaStar color='rgb(255, 215, 0)' size={22} />
          {stars.toLocaleString()} stars
        </li>
        <li>
          <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
          {forks.toLocaleString()} forks
        </li>
        <li>
          <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
          {openIssues.toLocaleString()} open
        </li>
      </ul>
    </li>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  forks: PropTypes.string.isRequired,
  open_issues: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};

export default Card;
