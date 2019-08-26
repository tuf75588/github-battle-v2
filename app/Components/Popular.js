/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { fetchPopularRepos } from '../utils/API';
import Loading from './Loading';

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='flex-center'>
      {languages.map((lang) => (
        <li key={lang}>
          <button
            type='button'
            className='btn-clear nav-link'
            onClick={() => onUpdateLanguage(lang)}
            style={lang === selected ? { color: 'rgb(187,46,31)' } : null}
          >
            {lang}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ReposGrid({ repos }) {
  // const { forks, owner } = repos;
  return (
    <ul className='grid space-around'>
      {repos.map((repo, index) => {
        const {
          open_issues,
          html_url,
          forks,
          owner,
          stargazers_count,
          id,
        } = repo;
        const { login, avatar_url } = owner;
        return (
          <li key={id} className='card bg-light'>
            <h4 className='header-lg center-text'>{index + 1}</h4>
            <img
              src={avatar_url}
              alt={`avatar for ${login}`}
              className='avatar'
            />
            <h2 className='center-text'>
              <a href={html_url} className='link'>
                {login}
              </a>
            </h2>
            <ul className='card-list'>
              <li>
                <FaUser color='rgb(255, 191, 116)' size={22} />
                <a href={`https://github.com/${login}`}>{login}</a>
              </li>
              <li>
                <FaStar color='rgb(255, 215, 0)' size={22} />
                {stargazers_count.toLocaleString()} stars
              </li>
              <li>
                <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                {open_issues.toLocaleString()} open
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

function Popular() {
  const [selectedLanguage, updateSelectedLanguage] = React.useState('All');
  const [repos, setRepos] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  function updateLanguage(selectedLang) {
    updateSelectedLanguage(selectedLang);
  }
  React.useEffect(() => {
    updateLanguage(selectedLanguage);
    if (!repos[selectedLanguage]) {
      setLoading(true);
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          // eslint-disable-next-line no-shadow
          setRepos((repos) => ({
            ...repos,
            [selectedLanguage]: data,
          }));
          setLoading(false);
          setError(false);
        })
        .catch(({ message }) => {
          setError(message);
        });
    }
  }, [repos, selectedLanguage]);
  React.useCallback(() => {
    updateLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <React.Fragment>
      <LanguagesNav
        onUpdateLanguage={updateLanguage}
        selected={selectedLanguage}
      />
      {loading && <Loading text='Fetching Repos' />}
      {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
      <p>{error && error}</p>
    </React.Fragment>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default Popular;
